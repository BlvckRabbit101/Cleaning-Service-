import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getToken = () => {
    const tokenString = localStorage.getItem('usertoken');
    try {
        return JSON.parse(tokenString);
    } catch (e) {
        console.error("Failed to parse usertoken from localStorage", e);
        return null;
    }
}

const token = getToken()?.logInUserToken


export const RtkSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cleaning-service-0mh2.onrender.com/api/users',
        prepareHeaders: (headers) => {
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
    }),
    reducerPath: 'userapi',
    endpoints: (builder) => ({
        getSingleUser: builder.query({
            query: () => '/profile',
        }),
        getAllUsers: builder.query({
            query: () => '/'
        }),
    })
});

export const {useGetSingleUserQuery,useGetAllUsersQuery} = RtkSlice