import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICategoryEntityList} from './entities/categoryEntity';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/',
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set(
        'Access-Control-Allow-Methods',
        'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      );
      return headers;
    },
  }),
  endpoints: builder => ({
    getCategory: builder.query<ICategoryEntityList, number>({
      query: userId => `categories/${userId}`,
    }),
  }),
});
export const {useGetCategoryQuery} = categoryApi;