export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Order {
    id: string;
    user: User;
    createdAt: string;
}

export interface Activity {
    id: string;
    description: string;
    user: User;
    createdAt: string;
}

export interface Notification {
    id: string;
    description: string;
    user: User;
    createdAt: string;
}