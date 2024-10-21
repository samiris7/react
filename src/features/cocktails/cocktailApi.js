import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1', }),

  endpoints: (builder) => ({

    getAllDrinks: builder.query({
      query: () => ({
        url: '/list.php',
        params: {
          c: 'list'
        },
        method: 'GET',
      })
    }),

    // getDrinksByCategory: builder.query({
    //   query: (q) => ({
    //     url: '/filter.php',
    //     params: {
    //       c: q
    //     },
    //     method: 'GET',
    //   })
    // }),


    // getIdDetail: builder.query({
    //   query: (q) => ({
    //     url: '/lookup.php',
    //     params: {
    //       i: q
    //     },
    //     method: 'GET',
    //   })
    // }),




  })
});


export const { useLazyGetAllDrinksQuery, useGetAllDrinksQuery, } = cocktailApi;