import { USERS_URL } from "../constans";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => ({ url: `${PRODUCTS_URL}/${id}` }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useLoginMutation } =  usersApiSlice;
