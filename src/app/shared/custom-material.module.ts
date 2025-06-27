import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule, MatFormFieldModule, MatIconModule, MatToolbarModule, MatRadioModule,
    MatAutocompleteModule, MatPaginatorModule, MatCheckboxModule, MatSelectModule, MatDialogModule,
    MatTooltipModule, MatListModule, MatInputModule, MatButtonModule, MatDatepickerModule,
    MatGridListModule, MatSnackBarModule, MatTableModule, MatSortModule
  ],
  exports: [
    MatCardModule, MatFormFieldModule, MatIconModule, MatToolbarModule, MatRadioModule,
    MatAutocompleteModule, MatPaginatorModule, MatCheckboxModule, MatSelectModule, MatDialogModule,
    MatTooltipModule, MatListModule, MatInputModule, MatButtonModule, MatDatepickerModule,
    MatGridListModule, MatSnackBarModule, MatTableModule, MatSortModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [ { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }]
})
export class CustomMaterialModule { }
