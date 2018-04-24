import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public nome_usuario:string ="Paulo Junior";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public Login(nome:string, senha:string): void{
    //alert("Faça login pfv!");
    //alert(nome + senha);

  }

  ionViewDidLoad() {
    //this.Login("Paulo","Junior");
  }

}
