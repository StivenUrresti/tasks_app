import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ITaskEntityArray} from './entities/taskEntity';

export const taskApi = createApi({
  reducerPath: 'taskApi',
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
    getTasks: builder.query<ITaskEntityArray, number>({
      query: id => `tasks/${id}`,
    }),
    createTask: builder.mutation<
      ITaskEntityArray,
      {title: string; description: string; categoryId: number; userId: number}
    >({
      query: body => ({
        url: `tasks/${body.userId}/${body.categoryId}`,
        method: 'POST',
        body: {
          title: body.title,
          description: body.description,
          status: 'not_done',
        },
      }),
    }),
  }),
});
export const {useGetTasksQuery, useCreateTaskMutation, useLazyGetTasksQuery} =
  taskApi;
