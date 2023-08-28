# Ministore Server

Backend based on basic [Apollo Server tutorial](https://www.apollographql.com/docs/apollo-server/getting-started)
and [Apollo TypeScript type generation tutorial](https://www.apollographql.com/docs/apollo-server/workflow/generate-types/).

## Getting Started

Requirements: [Node](https://nodejs.org) 16 or newer and relatively modern npm

Start development:

```
  $ npm install
  $ npm start
```

Hot reloading hasn't been implemented, so you'll need quit your server and run `npm start` to
see your changes.

## Generating GraphQL types

[GraphQL Code Generator](https://the-guild.dev/graphql/codegen) is used for creating types from
GraphQL schema file. To generate types, run `npm run codegen`. GQL Codegen is also included in
the compile and start commands.

The schema file can be found from ../schema/schema.graphql. Schema is shared between client and
server.

## ES Modules

This project uses ES Modules and all imports need to have .js extension, for example
`import { queries } from "./queries.js";`.
