import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Events } from "../../model/event.model";
import { DataService } from "src/app/feature/data.service";
import { DatePipe } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.css"],
})
export class AddEventComponent implements OnInit {

  public addEvent: Events = new Events();
  private isUpdate: Boolean;

  eventForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEventComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, 
    private dataService: DataService,
    private datePipe: DatePipe //private eventData:any
  ) {
    this.eventForm = this.fb.group({
          id: [""],
          eventType: ["", Validators.required],
          guest: ["", Validators.required],
          date: ["", Validators.required],
          total: ["", Validators.required]
        });
  }

  ngOnInit() {
    if (this.dialogData) {
      this.isUpdate = this.dialogData.isUpdate;
      if (this.isUpdate && this.dialogData.data) {
        this.eventForm = this.fb.group({
          id: this.dialogData.data.id,
          eventType: this.dialogData.data.eventType,
          guest: this.dialogData.data.guest,
          date: new Date(this.dialogData.data.date),
          total: this.dialogData.data.total,
        });
      } else {
        this.eventForm.controls["id"].setValue(this.dialogData.id);
        this.eventForm.controls["id"].disable();
      }
    }
  }

  //create new event
  addNewEvent() {
    const formData = this.eventForm.value;

    if (this.isUpdate) {
      this.dataService.updateEvent(formData).subscribe({
        next: (response) => {
          console.log("Event updated:", response);
          this.dialogRef.close();
        },
        error: (err) => {
          console.error("Error updating event:", err);
        },
      });
    } else {
      this.dataService.addEvent(formData).subscribe({
        next: (response) => {
          console.log("Event added:", response);
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
