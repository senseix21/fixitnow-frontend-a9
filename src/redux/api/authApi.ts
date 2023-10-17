import { baseApi } from "./baseApi"

const AUTH_URL = `/auth`
const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/signin`,
                method: 'POST',
                body: loginData,
            }),
            invalidatesTags: ['user']
        }),
    }),
    overrideExisting: false,
})

export const { useUserLoginMutation } = authApi
