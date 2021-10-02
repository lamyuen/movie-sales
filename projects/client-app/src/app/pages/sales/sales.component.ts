import { Component, OnInit } from '@angular/core';

import { Control } from 'projects/mat-helper/src/public-api';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  controls: Control[] = [];

  constructor() {}

  ngOnInit(): void {}
}
