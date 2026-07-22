import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { DepartmentModel, DesignationListModel } from '../models/Department.model';
import { DesignationModel } from '../models/Designation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {

  http = inject(HttpClient);
  hostAddress: string = "https://localhost:7004"

  // API endpoints - could be moved to a separate config file or environment variables for better maintainability
  loginURL: string = this.hostAddress + '/api/EmployeeMaster/login';

  // =======================
  // DEPARTMENt API URLS
  // =======================
  getAllDepartmentsURL: string = this.hostAddress + '/api/DepartmentMaster/GetAllDepartments';
  saveDepartmentsURL: string = this.hostAddress + '/api/DepartmentMaster/AddDepartment';
  updateDepartmentURL: string = this.hostAddress + '/api/DepartmentMaster/UpdateDepartment';
  deleteDepartmentURL: string = this.hostAddress + '/api/DepartmentMaster/DeleteDepartment';

  // =======================
  // DESIGNATION API URLS
  // =======================
  getAllDesignationsURL: string = this.hostAddress + '/api/DesignationMaster/GetAllDesignations';
  saveDesignationURL: string = this.hostAddress + '/api/DesignationMaster/AddDesignation';
  updateDesignationURL: string = this.hostAddress + '/api/DesignationMaster/UpdateDesignation';
  deleteDesignationURL: string = this.hostAddress + '/api/DesignationMaster/DeleteDesignation';

  // Only works in development
  SwaggerURL: string = this.hostAddress + 'swagger/index.html';
  SwaggerJSON: string = this.hostAddress + '/swagger/v1/swagger.json';
  ScalarURL: string = this.hostAddress + '/scalar';
  //SwaggerURL: https://localhost:7004/swagger/index.html
  //SwaggerJSON:  https://localhost:7004/swagger/v1/swagger.json
  //ScalarURL: https://localhost:7004/scalar




  // =======================
  // DEPARTMENTS API METHODS
  // =======================

  /// <summary>
  /// Get All Departments
  /// TEST URL: hostAddress/api/DepartmentMaster/GetAllDepartments
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





// =======================
// DESIGNATION API METHODS
// =======================

/// <summary>
/// Get All Designations
/// TEST URL: hostAddress/api/DesignationMaster/GetAllDesignations
/// </summary>
/// <returns></returns>
// getAllDesignations() {
//   return this.http.get(this.getAllDesignationsURL);
// }
// An Observable<T[]> represents a reactive data stream that emits an array of items over time. 
// In Angular 21, managing these streams is centered around utilizing modern template syntax
// (@for) and seamlessly bridging the gap between RxJS and Angular Signals via the interoperability package
getAllDesignations(): Observable<DesignationListModel[]> {
  return this.http.get <DesignationListModel[]>(this.getAllDesignationsURL);
}

/// <summary>
/// Add Designation
/// TEST URL: hostAddress/api/DesignationMaster/AddDesignation
/// </summary>
/// <param name="designation"></param>
/// <returns></returns>
saveDesignation(designation: DesignationModel) {
  return this.http.post(this.saveDesignationURL, designation);
}

/// <summary>
/// Update Designation
/// TEST URL: hostAddress/api/DesignationMaster/UpdateDesignation
/// </summary>
/// <param name="designation"></param>
/// <returns></returns>
updateDesignation(designation: DesignationModel) {
  return this.http.put(this.updateDesignationURL, designation);
}

/// <summary>
/// Delete Designation by ID
/// TEST URL: hostAddress/api/DesignationMaster/DeleteDesignation/{id}
/// </summary>
/// <param name="designationId"></param>
/// <returns></returns>
deleteDesignation(designationId: number) {
  return this.http.delete(`${this.deleteDesignationURL}/${designationId}`);
}














}
