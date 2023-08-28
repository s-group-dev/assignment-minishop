# Ministore client

This works as a baseline for both Web and Mobile clients

## Getting Started

1. Execute `npm install`
2. Execute `npm run codegen`

## Generating GraphQL types

GraphQL TypeScript type generation is based on Apollo client
[tutorial](https://www.apollographql.com/docs/react/development-testing/static-typing).

[GraphQL Code Generator](https://the-guild.dev/graphql/codegen) is used for creating types from
GraphQL schema file and source files with queries wrapped in gql-function. To generate types, run
`npm run codegen`. Parcel doesn't automacilly update GraphQL, but codegen watch mode is available
with `npm run codegen-watch`
