import { Role } from './role';

export class User {
    id: string;
    userName: string;
    email: string;
    roles: Role[];
}
