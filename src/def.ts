export interface User {
    username: string;
}

export interface Message {
    content: string;
    author: User;
    timestamp: number;
}