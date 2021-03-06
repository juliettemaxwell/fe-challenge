/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { filterByDate } from './helpers/collections';
let chai = require('chai');
let assert = chai.assert;

describe('Component: DataTable', () => {
  it('should create an instance', () => {
    let component = new DataTableComponent();
    expect(component).toBeTruthy();
  });

  it('should include methods', () => {
    let component = new DataTableComponent();
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should filter an array according to a date range', () =>{
    let array = [
      {"id":1,"city":"Neftegorsk","start_date":"4/13/2013","end_date":"5/18/2013","price":"55.82","status":"Seldom","color":"#fd4e19"},
      {"id":2,"city":"Lancai","start_date":"5/19/2012","end_date":"11/29/2014","price":"22.49","status":"Yearly","color":"#ff5055"},
      {"id":3,"city":"Hekou","start_date":"8/28/2011","end_date":"4/7/2014","price":"9.48","status":"Often","color":"#903761"},
      {"id":4,"city":"Ballymahon","start_date":"8/19/2013","end_date":"8/3/2015","price":"47.53","status":"Often","color":"#cd387d"},
    ];
    let expectedArray = [
      {"id":1,"city":"Neftegorsk","start_date":"4/13/2013","end_date":"5/18/2013","price":"55.82","status":"Seldom","color":"#fd4e19"},
      {"id":4,"city":"Ballymahon","start_date":"8/19/2013","end_date":"8/3/2015","price":"47.53","status":"Often","color":"#cd387d"},
    ];
    let startDate = '3/12/2013';
    let endDate = '8/4/2015';
    assert.sameDeepMembers(expectedArray, filterByDate(array, startDate, endDate));
  });


});


