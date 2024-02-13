import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { UsersLogging } from './users.logging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  activeUsers: any [] = [];
  inactiveUsers: any [] = [];
  countSwith : number;

  constructor(private usersService : UsersService, private usersLogging : UsersLogging ){}

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.countSwith = this.usersLogging.countSwith;

    this.usersLogging.countUpdates.subscribe(
      (count:number) => this.countSwith= count
    )
  }

}
