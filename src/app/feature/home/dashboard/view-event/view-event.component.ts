import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  
  private eventDetails;
  constructor(private dialogRef: MatDialogRef<ViewEventComponent>,
      @Inject(MAT_DIALOG_DATA) public dialogData: any, ) { }

  ngOnInit() {
    console.log(this.dialogData)
    if (this.dialogData) {
     this.eventDetails = this.dialogData
    }

  }

}
