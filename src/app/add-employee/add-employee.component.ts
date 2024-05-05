import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/localstorage.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent  {

  employee = {
    name: '',
    position: '',
    date: { from: '', to: '' },
  }
  roles = [
    { value: '', label: 'Select role' },
    { value: 'Product Designer', label: 'Product Designer' },
    { value: 'Flutter Developer', label: 'Flutter Developer' },
    { value: 'QA Tester', label: 'QA Tester' },
    { value: 'Product Owner', label: 'Product Owner' }
  ];

  constructor(private router: Router, private ls: LocalStorageService){

  }

  
  addEmployee() {
    if(this.employee.name && this.employee.position){
      let currentEmployeeList = this.ls.getItem('currentEmployee') ? JSON.parse(this.ls.getItem('currentEmployee')) : []
      this.ls.setItem('currentEmployee', JSON.stringify([...currentEmployeeList, this.employee]))
      this.goToListPage()
    }
    
  }

  goToListPage(){
    this.router.navigate(['']);
  }
}
