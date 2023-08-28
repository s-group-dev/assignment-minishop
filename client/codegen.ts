import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "../schema/schema.graphql",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;