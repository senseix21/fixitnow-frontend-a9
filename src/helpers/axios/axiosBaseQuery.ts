import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { instance as axiosInstance } from "./axiosInstance";
import { getBaseUrl } from "../config/envConfig";

export const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl: string } = { baseUrl: getBaseUrl() }
    ): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            params?: AxiosRequestConfig["params"];
            meta?: IMeta;
            contentType?: string;
        }
    // unknown,
    // unknown
    > =>
        async ({ url, method, data, params, contentType }) => {
            try {
                const result = await axiosInstance({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers: {
                        "Content-Type": contentType || "application/json",
                    },
                    withCredentials: true,
                });
                return { data: result.data }; // Return the data on success
            } catch (axiosError) {
                const err = axiosError as AxiosError;
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }; // Return an error object
            }
        };