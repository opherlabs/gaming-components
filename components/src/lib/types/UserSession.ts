
export declare interface IUserSession {
    user: {
        id: string;
        name: string;
        email: string;
        image: string;
    };
    expires: string;
    status: string|null;
}