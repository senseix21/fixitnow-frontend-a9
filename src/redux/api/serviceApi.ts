import { IMeta, Service } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagtypes";

const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        // get all
        services: build.query({
            query: (arg: Record<string, any>) => {
                let url = SERVICE_URL;
                if (arg.categoryId) {
                    url += `?categoryId=${arg.categoryId}`;
                } else if (arg.search) {
                    url += `?search=${arg.search}`;
                }
                return {
                    url,
                    method: "GET",
                };
            },
            transformResponse: (response: Service[], meta: IMeta) => {
                return {
                    services: response,
                    meta,
                };
            },
            providesTags: [tagTypes.SERVICE],
        }),

        // get single
        service: build.query({
            query: (id: any) => ({
                url: `${SERVICE_URL}/${id}`,
                method: "GET",
            }),
            transformResponse: (response: Service) => {
                return {
                    services: response,
                };
            },
            providesTags: [tagTypes.SERVICE],
        }),
        // create
        addService: build.mutation({
            query: (data) => ({
                url: SERVICE_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.SERVICE],
        }),
        // update
        updateService: build.mutation({
            query: (data) => ({
                url: `${SERVICE_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.SERVICE],
        }),
        // delete
        deleteService: build.mutation({
            query: (id) => ({
                url: `${SERVICE_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.SERVICE],
        }),
    }),
});

export const {
    useServicesQuery,
    useAddServiceMutation,
    useDeleteServiceMutation,
    useUpdateServiceMutation,
    useServiceQuery
} = serviceApi