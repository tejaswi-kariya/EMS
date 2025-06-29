import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatTableDataSource, Sort } from '@angular/material';
import { DataService } from 'src/app/feature/data.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
 public displayedColumns: string[] = ['id', 'type', 'guest', 'date', 'total', 'action'];
   dataSource = new MatTableDataSource<any>();
   @ViewChild(MatPaginator) paginator: MatPaginator;
 
   sortedData: any[];
   constructor(private dialog: MatDialog, private httpClient: HttpClient,
     private snackBar: MatSnackBar, private dataService: DataService) { }
 
   ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
   }
   ngOnInit() {
     this.getEvents();
   }
   
   getEvents() {
      this.dataService.getEvent().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response)
      this.processTable();
       })
   }  
 
    processTable() {
     this.dataSource.paginator = this.paginator;
   }
 
   // sorting data
   sortData(sort: Sort) {
     const data = this.dataSource.data.slice();
     if (!sort.active || sort.direction === '') {
       this.sortedData = data;
       this.dataSource.data = this.sortedData;
       return;
     }
 
     this.sortedData = data.sort((a, b) => {
       const isAsc = sort.direction === 'asc';
       if (sort.active ) {
           return this.compare(a.name, b.name, isAsc);
       }
     }); 
     this.dataSource.data = this.sortedData;
     this.processTable();
   }
   compare(a: number | string, b: number | string, isAsc: boolean) {
     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
   }
   // for searching data
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
     this.processTable();
   }
   // show status message
   openSnackBar(message: string, action: string) {
     this.snackBar.open(message, action, { duration: 2000 });
   }
 
   onAdd(){
 
   }
   onView(){}
   onEdit(){}
   onDelete(){}
 
}
