import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit {
  name: string;

  constructor(
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.name = this.navParams.get('userName');
  }
}
