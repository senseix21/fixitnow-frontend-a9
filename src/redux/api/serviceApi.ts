import { baseApi } from "./baseApi";
import { tagTypes } from "../tagtypes";

const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        //get all services
        services: build.query({
            query: (arg) => {
                const { categoryId, status, search, minPrice, maxPrice, size, page, sortBy, sortOrder } = arg;
                const queryParams = [];

                if (categoryId) queryParams.push(`categoryId=${categoryId}`);
                if (status) queryParams.push(`status=${status}`);
                if (search) queryParams.push(`search=${search}`);
                if (minPrice !== undefined && maxPrice !== undefined) {
                    queryParams.push(`minPrice=${minPrice}&maxPrice=${maxPrice}`);
                }
                if (size) queryParams.push(`size=${size}`);
                if (page) queryParams.push(`page=${page}`);
                if (sortBy) queryParams.push(`sortBy=${sortBy}`);
                if (sortOrder) queryParams.push(`sortOrder=${sortOrder}`);

                const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
                const url = `${SERVICE_URL}${queryString}`;
                console.log(url);
                return {
                    url,
                    method: "GET",
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

            providesTags: [tagTypes.SERVICE],
        }),
        // create
        addService: build.mutation({
            query: (data) => ({
                url: `${SERVICE_URL}/create-service`,
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