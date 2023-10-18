export interface IMeta {
    limit: number;
    page: number;
    total: number;
}

export type ResponseSuccessType = {
    data: any;
    meta?: IMeta;
};

export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
    path: string | number;
    message: string;
};

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN',
}

export type User = {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    contactNo: string;
    address: string;
    profileImg: string;
};

