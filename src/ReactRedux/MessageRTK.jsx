import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const messageRtkSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://cleaning-service-0mh2.onrender.com/api/message" }),
    reducerPath: "messageapi",
    endpoints: (builder) => ({
        getAllMessage: builder.query({
            query: () => "/",
            providesTags: ['message']
        }),
        updateMessageStatus: builder.mutation({
            query: ({id,body}) => ({
                url: `/update/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['message']
        })
    })
});

export const {useGetAllMessageQuery,useUpdateMessageStatusMutation} = messageRtkSlice