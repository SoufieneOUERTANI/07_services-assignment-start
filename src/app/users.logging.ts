import { EventEmitter } from "@angular/core";

export class UsersLogging{

    countSwith : number = 0;

    countUpdates = new EventEmitter<number>();
    
    countRaise(){
        this.countSwith++;
        this.countUpdates.emit(this.countSwith);
    }
    
}