import { IPlayer } from "./IPlayer";

export interface IUser{
    id: string;
    name: string;
    admin: boolean;
    email: boolean;
    characters?: Array<IPlayer>;
}