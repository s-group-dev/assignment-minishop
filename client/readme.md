# Ministore client

[React](https://react.dev/) client for Ministore. Uses [Parcel](https://parceljs.org/) for bundling
and development server, [React-router](https://reactrouter.com/en/main) for routing and
[Apollo GraphQL](https://www.apollographql.com/docs/react/) client.

## Getting started

Requirements: [Node.js](https://nodejs.org) 16 or newer and relatively modern npm

Start development:

```
  $ npm install
  $ npm start
```

Parcel development server should watch your changes as you work and apply changes immediately. If
you can't see your changes, removing parcel cache with `rm -rf .parcel-cache`, restaring Parcel and
reloading page may help. Parcel doesn't watch for GraphQL schema changes, see Generating GraphQL
types below.

## Generating GraphQL types

GraphQL TypeScript type generation is based on Apollo client
[tutorial](https://www.apollographql.com/docs/react/development-testing/static-typing).

[GraphQL Code Generator](https://the-guild.dev/graphql/codegen) is used for creating types from
GraphQL schema file and source files with queries wrapped in gql-function. To generate types, run
`npm run codegen`. Parcel doesn't automacilly update GraphQL, but codegen watch mode is available
with `npm run codegen-watch`

## Typechecking

By default, Parcel doesn't do type checking and it hasn't been been enabled in this project. Find
more at Parcel [documentation](https://parceljs.org/languages/typescript/).
