import type {
	form_responsesFilter,
	form_responsesOrderBy,
	formsFilter,
	formsOrderBy,
	loomersFilter,
	loomersOrderBy,
	projectsFilter,
	projectsOrderBy,
} from "../../operations-sdk/schema.js";
import { client } from "../config/api.js";
import type {
	Connection,
	Form,
	FormResponse,
	Loomer,
	Project,
	QueryOptions,
} from "../types/index.js";

/**
 * Get the number of Loomers in a specific area
 */
export async function getLoomersInArea(areaId: string): Promise<number> {
	const response = await client.query({
		loomersCollection: {
			__args: {
				filter: { area_id: { eq: areaId } } as loomersFilter,
			},
			edges: {
				node: {
					id: true,
				},
			},
		},
	});
	return response.loomersCollection?.edges.length ?? 0;
}

/**
 * Get Loomers with pagination and filtering
 */
export async function getLoomers(
	options: QueryOptions = {},
): Promise<Connection<Loomer>> {
	const response = await client.query({
		loomersCollection: {
			__args: {
				first: options.first,
				after: options.after,
				filter: options.filter as loomersFilter,
				orderBy: options.orderBy?.map(({ field, direction }) => ({
					[field]: direction,
				})) as loomersOrderBy[],
			},
			edges: {
				cursor: true,
				node: {
					nodeId: true,
					id: true,
					created_at: true,
					name: true,
					email: true,
					hire_date: true,
					birthday: true,
					area_id: true,
					areas: {
						nodeId: true,
						id: true,
						created_at: true,
						name: true,
					},
				},
			},
			pageInfo: {
				endCursor: true,
				hasNextPage: true,
				hasPreviousPage: true,
				startCursor: true,
			},
		},
	});
	return {
		edges:
			response.loomersCollection?.edges.map(({ cursor, node }) => ({
				cursor,
				node: {
					...node,
					area: node.areas,
					createdAt: node.created_at,
					hireDate: node.hire_date,
				},
			})) ?? [],
		pageInfo: response.loomersCollection?.pageInfo ?? {
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null,
		},
	};
}

/**
 * Get forms with pagination and filtering
 */
export async function getForms(
	options: QueryOptions = {},
): Promise<Connection<Form>> {
	const response = await client.query({
		formsCollection: {
			__args: {
				first: options.first,
				after: options.after,
				filter: options.filter as formsFilter,
				orderBy: options.orderBy?.map(({ field, direction }) => ({
					[field]: direction,
				})) as formsOrderBy[],
			},
			edges: {
				cursor: true,
				node: {
					nodeId: true,
					id: true,
					created_at: true,
					title: true,
					description: true,
				},
			},
			pageInfo: {
				endCursor: true,
				hasNextPage: true,
				hasPreviousPage: true,
				startCursor: true,
			},
		},
	});
	return {
		edges:
			response.formsCollection?.edges.map(({ cursor, node }) => ({
				cursor,
				node: {
					...node,
					createdAt: node.created_at,
				},
			})) ?? [],
		pageInfo: response.formsCollection?.pageInfo ?? {
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null,
		},
	};
}

/**
 * Get form responses with pagination and filtering
 */
export async function getFormResponses(
	options: QueryOptions = {},
): Promise<Connection<FormResponse>> {
	const response = await client.query({
		form_responsesCollection: {
			__args: {
				first: options.first,
				after: options.after,
				filter: options.filter as form_responsesFilter,
				orderBy: options.orderBy?.map(({ field, direction }) => ({
					[field]: direction,
				})) as form_responsesOrderBy[],
			},
			edges: {
				cursor: true,
				node: {
					nodeId: true,
					id: true,
					created_at: true,
					form_id: true,
					loomer_id: true,
					responses: true,
					forms: {
						nodeId: true,
						id: true,
						created_at: true,
						title: true,
						description: true,
					},
					loomers: {
						nodeId: true,
						id: true,
						created_at: true,
						name: true,
						email: true,
						hire_date: true,
						birthday: true,
						area_id: true,
					},
				},
			},
			pageInfo: {
				endCursor: true,
				hasNextPage: true,
				hasPreviousPage: true,
				startCursor: true,
			},
		},
	});
	return {
		edges:
			response.form_responsesCollection?.edges.map(({ cursor, node }) => ({
				cursor,
				node: {
					...node,
					createdAt: node.created_at,
					formId: node.form_id,
					loomerId: node.loomer_id,
					form: node.forms && {
						...node.forms,
						createdAt: node.forms.created_at,
					},
					loomer: node.loomers && {
						...node.loomers,
						createdAt: node.loomers.created_at,
						hireDate: node.loomers.hire_date,
					},
				},
			})) ?? [],
		pageInfo: response.form_responsesCollection?.pageInfo ?? {
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null,
		},
	};
}

/**
 * Get projects with pagination and filtering
 */
export async function getProjects(
	options: QueryOptions = {},
): Promise<Connection<Project>> {
	const response = await client.query({
		projectsCollection: {
			__args: {
				first: options.first,
				after: options.after,
				filter: options.filter as projectsFilter,
				orderBy: options.orderBy?.map(({ field, direction }) => ({
					[field]: direction,
				})) as projectsOrderBy[],
			},
			edges: {
				cursor: true,
				node: {
					nodeId: true,
					id: true,
					created_at: true,
					name: true,
				},
			},
			pageInfo: {
				endCursor: true,
				hasNextPage: true,
				hasPreviousPage: true,
				startCursor: true,
			},
		},
	});
	return {
		edges:
			response.projectsCollection?.edges.map(({ cursor, node }) => ({
				cursor,
				node: {
					...node,
					createdAt: node.created_at,
				},
			})) ?? [],
		pageInfo: response.projectsCollection?.pageInfo ?? {
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null,
		},
	};
}
