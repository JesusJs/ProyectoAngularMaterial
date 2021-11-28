import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-elements',
  templateUrl: 'dialog-elements.component.html',
})
export class DialogElementsExampleDialog {
  constructor(public dialog: MatDialog) {}
}