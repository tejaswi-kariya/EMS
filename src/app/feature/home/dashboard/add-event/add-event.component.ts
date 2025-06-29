import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Events } from "../event-list/model/event.model";
import { DataService } from "src/app/feature/data.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.css"],
})
export class AddEventComponent implements OnInit {
  public addEvent: Events = new Events();
  private isUpdate: Boolean;
  constructor(
    private dialogRef: MatDialogRef<AddEventComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dataService: DataService,
    private datePipe: DatePipe //private eventData:any
  ) {}

  ngOnInit() {
    if (this.dialogData) {
      this.isUpdate = this.dialogData.isUpdate;
      if (this.isUpdate && this.dialogData.data) {
        this.addEvent = this.dialogData.data;
      } else {
        this.addEvent.id = this.dialogData.id;
      }
    }
  }

  //create new event
  addNewEvent() {
    this.updateEventDate();
    if (this.isUpdate) {
      this.dataService.updateEvent(this.addEvent).subscribe({
        next: (response) => {
          console.log("Event updated:", response);
          this.addEvent = new Events();
          this.dialogRef.close();
        },
        error: (err) => {
          console.error("Error updating event:", err);
        },
      });
    } else {
      this.dataService.addEvent(this.addEvent).subscribe({
        next: (response) => {
          console.log("Event added:", response);
          this.addEvent = new Events();
          this.dialogRef.close();
        },
        error: (err) => {
          console.error("Error adding event:", err);
        },
      });
    }
  }

  //event date format
  updateEventDate() {
    const formattedDate = this.datePipe.transform(
      this.addEvent.date,
      "dd/MM/yyyy"
    );
    this.addEvent.date = formattedDate;
  }
}
