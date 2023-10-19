import { Category, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagtypes";

const REVIEW_URL = "/review";

export const reviewApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get all
        reviews: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: REVIEW_URL,
                    method: "GET",
                    params: arg,
                };
            },
            transformResponse: (response: Category[], meta: IMeta) => {
                return {
                    reviews: response,
                    meta,
                };
            },
            providesTags: [tagTypes.REVIEW],
        }),
        // get single by service id
        review: build.query({
            query: (id: string) => ({
                url: `${REVIEW_URL}/service/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.REVIEW],
        }),
        // create
        addReview: build.mutation({
            query: (data) => ({
                url: REVIEW_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.REVIEW],
        }),

        // delete
        deleteReview: build.mutation({
            query: (id) => ({
                url: `${REVIEW_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.REVIEW],
        }),
    }),
});

export const {
    useAddReviewMutation,
    useDeleteReviewMutation,
    useReviewsQuery
} = reviewApi