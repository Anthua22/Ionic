import { User } from "src/app/users/interfaces/user.interface";

export interface UserResponse {
    user: User
}

export interface TokenResponse {
    accessToken: string;
}
