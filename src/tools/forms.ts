import { z } from "zod";
import { TOOL_CONFIG } from "../config/api.ts";
import { getForms } from "../services/api.ts";
import type {
	Connection,
	Form,
	McpResponse,
	McpTextContent,
	QueryOptions,
} from "../types/index.ts";
import { formatDate, truncateText } from "../utils/language.ts";

/**
 * MCP tool definition for getting forms
 */
export const getFormsTool = {
	name: TOOL_CONFIG.forms.name,
	description: TOOL_CONFIG.forms.description,
	parameters: {
		first: z.number().optional().describe("Number of items to return"),
		after: z.string().optional().describe("Cursor for pagination"),
		filter: z.record(z.unknown()).optional().describe("Filter criteria"),
		orderBy: z
			.array(
				z.object({
					field: z.string(),
					direction: z.enum([
						"AscNullsFirst",
						"AscNullsLast",
						"DescNullsFirst",
						"DescNullsLast",
					]),
				}),
			)
			.optional()
			.describe("Sorting criteria"),
	},
	handler: async (params: QueryOptions): Promise<McpResponse> => {
		try {
			const response: Connection<Form> = await getForms(params);

			if (response.edges.length === 0) {
				const content: McpTextContent = {
					type: "text",
					text: "No forms found.",
				};

				return {
					content: [content],
					_meta: { totalCount: 0 },
				};
			}

			const formList = response.edges
				.map(({ node: form }) => {
					const title = truncateText(form.title || "Untitled", 50);
					const description = form.description
						? truncateText(form.description, 100)
						: "No description available.";
					const date = formatDate(form.createdAt);

					return `- ${title} (Created: ${date})\n  ${description}`;
				})
				.join("\n\n");

			const totalMessage = `Found ${response.edges.length} form${response.edges.length === 1 ? "" : "s"}.`;
			const paginationInfo = response.pageInfo.hasNextPage
				? "There are more results available. Use the cursor for pagination."
				: "No more results available.";

			const content: McpTextContent = {
				type: "text",
				text: `${totalMessage}\n${paginationInfo}\n\n${formList}`,
			};

			return {
				content: [content],
				_meta: {
					totalCount: response.totalCount,
					hasNextPage: response.pageInfo.hasNextPage,
					endCursor: response.pageInfo.endCursor,
				},
			};
		} catch (err) {
			const error =
				err instanceof Error ? err.message : "Unknown error occurred";
			const content: McpTextContent = {
				type: "text",
				text: `Failed to fetch forms: ${error}`,
			};

			return {
				content: [content],
				isError: true,
			};
		}
	},
};
