import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare var $: any;
declare var Pusher: any;
var theMask = function () {
  let myArray: any[] = [];
  for (let index = 0; index < 255; index++) {
    myArray[index] = /[a-zA-Z0-9]/;
  }
  return myArray;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  hide = false;
  mask = theMask;
  user: any = {};
  workspace: string = '';

  workspace_selected = false;


  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  /**
   * Hace el llamado del metodo para validar las credenciales
   * Si es valido, hace el llamado del metodo para la peticion Login
   *
   * @returns
   * @memberof LoginComponent
   */
  login() {
    this.router.navigateByUrl('main');
  }

}


