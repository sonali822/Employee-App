
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../service/localstorage.service';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {



  currentEmployee = []
  previousEmployee = []

  constructor(private router: Router,private ls: LocalStorageService ) {

  }

  ngOnInit(): void {
    this.currentEmployee = this.ls.getItem('currentEmployee') ? JSON.parse(this.ls.getItem('currentEmployee')) : []
    this.previousEmployee = this.ls.getItem('previousEmployee') ? JSON.parse(this.ls.getItem('previousEmployee')) : []

  }

  goToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }

  onDeleteEmployeeButton(index: any) {
    let arr = this.currentEmployee.splice(index,1);
    this.previousEmployee = [...this.previousEmployee,arr[0]]
    this.ls.setItem('currentEmployee', JSON.stringify([...this.currentEmployee]))
    this.ls.setItem('previousEmployee', JSON.stringify([...this.previousEmployee]))
  }

  onUndoEmployeeButton(index: any) {
    let arr = this.previousEmployee.splice(index,1);
    this.currentEmployee = [...this.currentEmployee,arr[0]]
    this.ls.setItem('currentEmployee', JSON.stringify([...this.currentEmployee]))
    this.ls.setItem('previousEmployee', JSON.stringify([...this.previousEmployee]))
  }
  
}
