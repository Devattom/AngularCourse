import { AuthUser } from "./auth.user";

export type LoggedUser = Omit<AuthUser, 'password'> & {
    firstname: string
    lastname: string
    token: string
}