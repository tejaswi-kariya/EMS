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
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    if (this.dialogData) {
      this.addEvent.id = this.dialogData.id;
      this.isUpdate = this.dialogData.isUpdate;
    }
  }

  addNewEvent() {
    this.updateEventDate();
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

  updateEventDate() {
    const formattedDate = this.datePipe.transform(
      this.addEvent.date,
      "dd/MM/yyyy"
    );
    this.addEvent.date = formattedDate;
  }
}
