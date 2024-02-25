import { Category, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagtypes";

const CATEGORY_URL = "/category";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get all
        categories: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: CATEGORY_URL,
                    method: "GET",
                    params: arg,
                };
            },

            providesTags: [tagTypes.CATEGORY],
        }),
        // get single
        category: build.query({
            query: (id: string) => ({
                url: `${CATEGORY_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.CATEGORY],
        }),
        // create
        addCategory: build.mutation({
            query: (data) => ({
                url: CATEGORY_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.CATEGORY],
        }),
        // update
        updateCategory: build.mutation({
            query: (data) => ({
                url: `${CATEGORY_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.CATEGORY],
        }),
        // delete
        deleteCategory: build.mutation({
            query: (id) => ({
                url: `${CATEGORY_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.CATEGORY],
        }),
    }),
});

export const {
    useCategoriesQuery,
    useCategoryQuery,
    useAddCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categoryApi