export interface IMeta {
    limit: number;
    page: number;
    total: number;
}

export type ResponseSuccessType = {
    statusCode: number;
    data: any;
    meta?: IMeta;
};

export type IGenericErrorResponse = {
    success: boolean;
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
    path: string | number;
    message: string;
};

export type ILoginResponse = {
    userId: string,
    exp: number,
    iat: number,
    role: UserRole
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN',
}

export interface User {
    id: string;
    email: string;
    password: string;
    role: UserRole;
    name?: string | null;
    contactNo?: string | null;
    address?: string | null;
    profileImg?: string | null;
    Booking: Booking[];
    Review: Review[];
    Content: Content[];
    Cart: Cart[];
    Notification: Notification[];
    ServiceHistory: ServiceHistory[];
    UserFeedback: UserFeedback[];
}

export interface Category {
    id: string;
    name: string;
    service: Service[];
}

export interface Service {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    categoryId: string;
    category: Category;
    Booking: Booking[];
    Review: Review[];
    Cart: Cart[];
    ServiceHistory: ServiceHistory[];
}

export interface Cart {
    id: string;
    userId: string;
    serviceId: string;
    createdAt: Date;
    service: Service;
    user: User;
}

export interface Notification {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
    user: User;
}

export interface ServiceHistory {
    id: string;
    userId: string;
    serviceId: string;
    createdAt: Date;
    service: Service;
    user: User;
}

export interface Booking {
    id: string;
    serviceId: string;
    userId: string;
    date: Date;
    slotsAvailable: number;
    status: BookingStatus;
    service: Service;
    user: User;
    createdAt: Date;
}

export interface Review {
    id: string;
    serviceId: string;
    userId: string;
    rating: number;
    comment: string;
    service: Service;
    user: User;
    createdAt: Date;
}

export interface Content {
    id: string;
    title: string;
    body: string;
    image?: string | null;
    authorId: string;
    author: User;
    createdAt: Date;
}

export interface UserFeedback {
    id: string;
    userId: string;
    subject: string;
    message: string;
    createdAt: Date;
    user: User;
}


export enum BookingStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
    COMPLETED = 'COMPLETED',
}

