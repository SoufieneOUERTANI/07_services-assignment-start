import { Injectable } from "@angular/core";
import { UsersLogging } from "./users.logging";

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private usersLogging : UsersLogging){}

    // eventEmitter : EventEmitter<number>;

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.usersLogging.countRaise();
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.usersLogging.countRaise();
      }

}