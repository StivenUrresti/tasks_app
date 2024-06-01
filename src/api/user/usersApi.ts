import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {signInEntity, userEntity} from './entities/usersEntity';

export const usersApi = createApi({
  reducerPath: 'usersApi',
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
    verifyUser: builder.query<userEntity, signInEntity>({
      query: ({password, email}: signInEntity) => `users/${email}/${password}`,
    }),
  }),
});
export const {useVerifyUserQuery, useLazyVerifyUserQuery} = usersApi;
