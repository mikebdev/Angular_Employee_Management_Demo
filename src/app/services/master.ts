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


  /// <summary>
  /// Get All Departments
  /// TEST URL: hostAddress/api/DepartmentMaster/etAllDepartments
  /// </summary>
  /// <returns></returns>
  getAllDepartments() {
    return this.http.get(this.getAllDepartmentsURL);
  }

  /// <summary>
  /// Add Department
  /// TEST URL: hostAddress/api/DepartmentMaster/AddDepartment
  /// </summary>
  /// <param name="department"></param>
  /// <returns></returns>
  saveDepartment(department: DepartmentModel) {
    return this.http.post(this.saveDepartmentsURL, department);
  }

  /// <summary>
  /// Update Department
  /// TEST URL: hostAddress/api/DepartmentMaster/UpdateDepartment
  /// </summary>
  /// <param="department"></param>
  /// <returns></returns>
  updateDepartment(department: DepartmentModel) {
    return this.http.put(this.updateDepartmentURL, department);
  }

  /// <summary>
  /// Delete Department by ID
  /// TEST URL: hostAddress/api/DepartmentMaster/id 
  /// </summary>
  /// <param name="id"></param>
  /// <returns></returns>
  deleteDepartment(departmentId: number) {
    return this.http.delete(`${this.deleteDepartmentURL}/${departmentId}`);
  }
}
