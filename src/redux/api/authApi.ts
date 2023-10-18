import { baseApi } from "./baseApi"
const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/signin`,
                method: "POST",
                data: loginData
            }),
            invalidatesTags: ['user']
        }),
        userSignup: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signup`,
                method: "POST",
                data: data,
            }),
        }),
    }),

})

export const {
    useUserLoginMutation,
    useUserSignupMutation
} = authApi