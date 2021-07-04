import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
title:String="Welcome User to Central Library"
  constructor() { }

  ngOnInit(): void {
  }

}
