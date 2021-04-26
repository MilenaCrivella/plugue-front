import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  displayLogin = false;
  displayCadastro = false;
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

  clickLogin() {
    this.displayLogin = true;
  }

  clickSignUp() {
    this.displayCadastro = true;
  }

}
