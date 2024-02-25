import { baseApi } from "./baseApi";
import { tagTypes } from "../tagtypes";

const FEEDBACK_URL = "/feedback";

export const feedbackApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get all
        feedbacks: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: FEEDBACK_URL,
                    method: "GET",
                    params: arg,
                };
            },

            providesTags: [tagTypes.FEEDBACK],
        }),
        // get single by service id
        feedback: build.query({
            query: (id: string) => ({
                url: `${FEEDBACK_URL}/service/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.FEEDBACK],
        }),
        // create
        addfeedback: build.mutation({
            query: (data) => ({
                url: FEEDBACK_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.FEEDBACK],
        }),

        // delete
        deletefeedback: build.mutation({
            query: (id) => ({
                url: `${FEEDBACK_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.FEEDBACK],
        }),
    }),
});

export const {
    useAddfeedbackMutation,
    useDeletefeedbackMutation,
    useFeedbackQuery,
    useFeedbacksQuery
} = feedbackApi