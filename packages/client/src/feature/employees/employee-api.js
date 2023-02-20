import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  tagTypes: ['Employee'],
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => '/employee',
      providesTags: ['Employee'],
    }),
    addEmployee: builder.mutation({
      query: (body) => ({
        url: '/employee',
        method: 'POST',
        body: body,
      }),
      // invalidatesTags: ['Employee']
    }),
    updateEmployee: builder.mutation({
      query: ({ id, ...body }) => {
        return {
          url: `/employee/${id}`,
          method: 'PUT',
          body: body
        }
      },
      // invalidatesTags: ['Employee']
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: ['Employee']
    }),
  })
});

export const {
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,

  endpoints: {
    getEmployees,
  }
} = employeeApi;
