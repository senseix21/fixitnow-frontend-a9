export type IGenericErrorMessage = {
    path: string | number;
    message: string;
};

export type IGenericResponse<T> = {
    meta: {
        page: number;
        size: number;
        total: number;
        totalPage: number;
    };
    data: T;
};

export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
};
