import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constants/apis'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: '/todos',
        method: 'GET',
        headers: {

        }
      }),
    }),


  }),
});

export const { useGetTodosQuery } = todosApi;