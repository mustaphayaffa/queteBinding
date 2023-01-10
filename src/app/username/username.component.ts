import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {

  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    imageSrc: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  public displayButton = true;




}

  // ngOnInit(): void {
  // }

  // sayHello(): void  {
  //   alert("Bonjour !");
  // }


