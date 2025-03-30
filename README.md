# POC MCP Server

A proof of concept implementation of a Model Context Protocol (MCP) server that provides tools for accessing and manipulating data about Loomers, forms, form responses, and projects.

## Features

- Get Loomers and Loomers in a specific area
- Get Forms and Form Responses
- Get Projects
- Pagination support for all list operations
- Filtering and sorting capabilities

## Requirements

- Node.js 18 or higher
- pnpm 10 or higher

## Installation

```bash
pnpm install
```

## Development

To start the development server:

```bash
pnpm dev
```

## Building

To build the project:

```bash
pnpm build
```

## Running

To run the built project:

```bash
pnpm start
```

## Testing

To run tests:

```bash
pnpm test
```

## Linting

To run the linter:

```bash
pnpm lint
```

## Project Structure

```
src/
  ├── config/       # Configuration files
  ├── tools/        # MCP tool implementations
  │   └── __tests__ # Tool tests
  ├── types/        # TypeScript type definitions
  └── index.ts      # Main entry point
```

## Tools

### getLoomers
Get a list of Loomers with optional pagination, filtering, and sorting.

### getLoomersInArea
Get a list of Loomers in a specific area.

### getForms
Get a list of forms with optional pagination, filtering, and sorting.

### getFormResponses
Get a list of form responses with optional pagination, filtering, and sorting.

### getProjects
Get a list of projects with optional pagination, filtering, and sorting.

## License

MIT 