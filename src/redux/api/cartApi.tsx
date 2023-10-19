import { Cart, Category, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagtypes";

const CART_URL = "/cart";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get all
        carts: build.query({
            query: () => {
                return {
                    url: CART_URL,
                    method: "GET",
                };
            },
            transformResponse: (response: Cart[]) => {
                return {
                    carts: response,
                };
            },
            providesTags: [tagTypes.CART],
        }),

        // create
        addTocart: build.mutation({
            query: (data) => ({
                url: CART_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.CART],
        }),

        // delete
        deletecart: build.mutation({
            query: (id) => ({
                url: `${CART_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.CART],
        }),
    }),
});

export const {
    useAddTocartMutation,
    useCartsQuery,
    useDeletecartMutation
} = cartApi