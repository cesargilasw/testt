import { Role } from '../enum/Role';

// Class to implement attributes of User
export class User {
    id: string;
    username: string;
    role: Role;
    token: string;
    constructor(data: any) {
        this.id = data.id;
        this.username = data.username;
        this.role = data.role;
        this.token = data.token;
    }
}
