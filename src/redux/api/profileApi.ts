'use client'
import { User } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagtypes";

const PROFILE_URL = "/profile";

export const profileApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get all
        profiles: build.query({
            query: () => {
                return {
                    url: PROFILE_URL,
                    method: "GET",
                };
            },

            providesTags: [tagTypes.PROFILE],
        }),

        // get
        createProfile: build.mutation({
            query: (data) => ({
                url: PROFILE_URL,
                method: "GET",
                data,
            }),
            invalidatesTags: [tagTypes.PROFILE],
        }),

        // update
        updateProfle: build.mutation({
            query: (id) => ({
                url: `${PROFILE_URL}/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: [tagTypes.PROFILE],
        }),
    }),
});

export const {
    useCreateProfileMutation,
    useProfilesQuery,
    useUpdateProfleMutation

} = profileApi