import { Component, OnInit, Output } from '@angular/core';

import { PassportStandard, UnitType } from '../model/datatypes';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-passport-standard-selector',
  templateUrl: './passport-standard-selector.component.html',
  styleUrls: ['./passport-standard-selector.component.css']
})
export class PassportStandardSelectorComponent implements OnInit {

  constructor() {
    this._standard = {
      pictureHeight: 2.0,
      pictureWidth: 2.0,
      faceHeight: 1.1875,
      units: UnitType.inch
    };
  }
  photoIdType: any;

  private _standard: PassportStandard;

  @Output()
  selectedStandard: EventEmitter<PassportStandard> = new EventEmitter();

  ngOnInit() {

    this.photoIdType = {
      name: 'US Passport',
      dimensions: '2\" x 2"'
    };
  }


}
