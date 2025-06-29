import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatDialog,
  MatPaginator,
  MatSnackBar,
  MatTableDataSource,
  Sort,
} from "@angular/material";

import { DataService } from "src/app/feature/data.service";
import { AddEventComponent } from "../add-event/add-event.component";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"],
})
export class EventListComponent implements OnInit {
  public displayedColumns: string[] = [
    "bookId",
    "type",
    "guest",
    "date",
    "total",
    "action",
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  sortedData: any[];
  isUpdate: boolean = false;
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private dataService: DataService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.isUpdate=false;
    this.getEvents();
  }

  getEvents() {
    this.dataService.getEvent().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response);
      this.processTable();
    });
  }

  processTable() {
    this.dataSource.paginator = this.paginator;
  }

  // sorting data
  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      this.dataSource.data = this.sortedData;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      if (sort.active) {
        return this.compare(a.id, b.id, isAsc);
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

  // create new event
  onAdd() {
    this.isUpdate = false;
    let dialogData = {
      id: this.getBookingID(),
      isUpdate: this.isUpdate,
    };
    this.dialog
      .open(AddEventComponent, {
        data: dialogData
      })
      .afterClosed()
      .subscribe((result) => {
        this.getEvents();
      });
  }

  //get new id to create new event
  getBookingID(): Number {
    let array = this.dataSource.data;
    const sArray = array.sort((a, b) => a.id - b.id);
    return sArray[sArray.length - 1].id + 1;
  }

  onView(data) {}

  //to update existing event
  onEdit(data) {
    this.isUpdate = true;
    let dialogData = {
      isUpdate: this.isUpdate,
      data: data
    };
    this.dialog
      .open(AddEventComponent, {
        data: dialogData
      })
      .afterClosed()
      .subscribe((result) => {
        this.getEvents();
      });
  }

  //to delete event
  onDelete(data) {}

  onLogout() {
    this.dataService.logoutUser();
  }
}
