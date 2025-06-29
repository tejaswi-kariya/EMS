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

  constructor(
    private dialogRef: MatDialogRef<AddEventComponent>,
    private dataService: DataService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {}

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
