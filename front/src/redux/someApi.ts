import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const someApi = createApi({
	reducerPath: "someApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
	endpoints: (builder) => ({
		getsomeByName: builder.query<void, string>({
			query: (name) => `some/${name}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetsomeByNameQuery } = someApi;
