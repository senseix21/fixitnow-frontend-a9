import { Booking } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagtypes";

const BOOKING_URL = "/booking";

export const bookingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get all
        bookings: build.query({
            query: () => {
                return {
                    url: BOOKING_URL,
                    method: "GET",
                };
            },
            transformResponse: (response: Booking[]) => {
                return {
                    bookings: response,
                };
            },
            providesTags: [tagTypes.BOOKING],
        }),

        // create
        addTobooking: build.mutation({
            query: (data) => ({
                url: BOOKING_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.BOOKING],
        }),

        // delete
        deletebooking: build.mutation({
            query: (id) => ({
                url: `${BOOKING_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.BOOKING],
        }),
    }),
});

export const {
    useAddTobookingMutation,
    useBookingsQuery,
    useDeletebookingMutation
} = bookingApi