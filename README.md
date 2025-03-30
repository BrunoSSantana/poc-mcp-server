# MCP Server POC

A proof of concept implementation of a Model Context Protocol (MCP) server that provides tools for querying information about Loomers, talks, posts, and videos.

## Features

- MCP server implementation using the official TypeScript SDK
- Integration with GraphQL API through `operations-sdk`
- Tools for querying:
  - Number of Loomers in an area
  - List of talks with pagination and filtering
  - List of posts with pagination and filtering
  - List of videos with pagination and filtering
  - API status check
- Comprehensive test suite using Vitest
- TypeScript with strict type checking

## Prerequisites

- Node.js 18 or later
- pnpm 10 or later

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd poc-mcp-server
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```env
   GRAPHQL_API=https://your-graphql-api-endpoint.com/graphql
   MCP_SERVER_NAME=mcp-api-service
   MCP_SERVER_VERSION=1.0.0
   NODE_ENV=development
   ```

## Development

Start the development server with hot reload:

```bash
pnpm dev
```

## Testing

Run the test suite:

```bash
pnpm test
```

Run tests with coverage:

```bash
pnpm test:coverage
```

## Building

Build the project for production:

```bash
pnpm build
```

## Usage

The server provides several tools that can be used through the MCP protocol:

### Get Loomers in Area

```typescript
// Example request
{
  method: "tools/get_loomers",
  params: {
    area: "Engineering"
  }
}

// Example response
{
  result: "There are 5 Loomers in the Engineering area."
}
```

### Get Talks

```typescript
// Example request
{
  method: "tools/get_talks",
  params: {
    limit: 10,
    offset: 0
  }
}

// Example response
{
  result: "Found 1 talk.\nShowing 1 talks (page 1)\n\n- Introduction to MCP by John Doe (March 30, 2024)\n  Learn about MCP"
}
```

### Get Posts

```typescript
// Example request
{
  method: "tools/get_posts",
  params: {
    limit: 10,
    offset: 0
  }
}

// Example response
{
  result: "Found 1 post.\nShowing 1 posts (page 1)\n\n- MCP Overview by John Doe (March 30, 2024)\n  MCP is a protocol..."
}
```

### Get Videos

```typescript
// Example request
{
  method: "tools/get_videos",
  params: {
    limit: 10,
    offset: 0
  }
}

// Example response
{
  result: "Found 1 video.\nShowing 1 videos (page 1)\n\n- MCP Tutorial by John Doe (March 30, 2024)\n  Learn MCP\n  URL: https://example.com/video"
}
```

### Check Status

```typescript
// Example request
{
  method: "tools/check_status"
}

// Example response
{
  result: "API is alive and responding."
}
```

## Project Structure

```
src/
├── config/        # Configuration files
│   └── api.ts     # API and server configuration
├── services/      # Service implementations
│   └── api.ts     # GraphQL API service
├── tools/         # MCP tool implementations
│   ├── loomers.ts # Loomer-related tools
│   ├── posts.ts   # Post-related tools
│   ├── status.ts  # Status check tool
│   ├── talks.ts   # Talk-related tools
│   └── videos.ts  # Video-related tools
├── types/         # TypeScript type definitions
│   └── index.ts   # Core types
└── utils/         # Utility functions
    └── language.ts # Text processing utilities
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'feat: add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 