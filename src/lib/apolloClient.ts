import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export function createClient(uri: string) {
  const link = createHttpLink({ uri });

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          ships: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  });

  return new ApolloClient({
    link,
    cache,
  });
}
