import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { DepartmentModel } from '../models/Department.model';

@Injectable({
  providedIn: 'root',
})
export class Master {

  http = inject(HttpClient);
  hostAddress: string = "https://localhost:7004"

  // API endpoints - could be moved to a separate config file or environment variables for better maintainability
  loginURL: string = this.hostAddress + '/api/EmployeeMaster/login';
  getAllDepartmentsURL: string = this.hostAddress + '/api/DepartmentMaster/GetAllDepartments';
  saveDepartmentsURL: string = this.hostAddress + '/api/DepartmentMaster/AddDepartment';
  updateDepartmentURL: string = this.hostAddress + '/api/DepartmentMaster/UpdateDepartment';
  deleteDepartmentURL: string = this.hostAddress + '/api/DepartmentMaster/DeleteDepartment';

  getAllDepartments() {
    return this.http.get(this.getAllDepartmentsURL);
  }

  saveDepartment(department: DepartmentModel) {
    return this.http.post(this.saveDepartmentsURL, department);
  }

  updateDepartment(department: DepartmentModel) {
    return this.http.put(this.updateDepartmentURL, department);
  }

  deleteDepartment(departmentId: number) {
    return this.http.delete(`${this.deleteDepartmentURL}/${departmentId}`);
  }













}
