import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BankDataService } from '../bank-data.service';


export interface PeriodicElement {
  bank_name: string;
  branch: number;
  bank_id: number;
  ifsc: string;
}
export interface City {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  banks: any;
  ELEMENT_DATA: PeriodicElement[];
  selectedCity: boolean = false;
  constructor(private bankDataService: BankDataService) { }

  displayedColumns: string[] = ['bank_name', 'branch', 'bank_id', 'ifsc'];
  dataSource;
  citys: City[] = [
    { value: 'MUMBAI', viewValue: 'Mumbai' },
    { value: 'DELHI', viewValue: 'Delhi' },
    { value: 'BANGALORE', viewValue: 'Bangalore' },
    { value: 'HYDERABAD', viewValue: 'hyderabad' },
    { value: 'KOLKATA', viewValue: 'Kolkata' }

  ];
  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public onChange(cityName): void {  // event will give you full breif of action
    this.selectedCity = true;
    this.bankDataService.getallBankDetails(cityName).subscribe(data => {
      console.log(data);
      this.banks = data;
      this.dataSource = new MatTableDataSource(this.banks);
      1

    })
  }
}
