import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    rowData = [
      {name: 'Microsoft',symbol:'MSFT', score:'123434', sector: 'Tech', industry:'software-tech'}
    ];
    columnDefs:ColDef[] = [
      {headerName:'Name',field:'name'},
      {headerName:'Symbol',field:'symbol'},
      {headerName:'Score',field:'score'},
      {headerName:'Sector',field:'sector'},
      {headerName:'Industry',field:'industry'}
    ];
}
