import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ListComponent } from './list/list.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SteperComponent } from './steper/steper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'form-fields', component: FormFieldComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'table', component: TableComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'steper', component: SteperComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'list', component: ListComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
