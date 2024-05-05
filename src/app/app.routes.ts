import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { EmployeeListComponent } from './employee-list/employee-list.component'

export const routes: Routes = [
    { path: '', component: EmployeeListComponent, data: { name: 'Employee List' } },
    { path: 'add-employee', component: AddEmployeeComponent, data: { name: 'Add Employee Details' } },
];
