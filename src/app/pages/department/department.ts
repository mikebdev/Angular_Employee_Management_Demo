import { Component } from '@angular/core';
import { DepartmentModel } from '../../models/Department.model';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';


@Component({
  selector: 'app-department',
  imports: [FormsModule, CommonModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})


export class Department implements OnInit {
  newDeptObj: DepartmentModel = new DepartmentModel();
  masterService = inject(Master);
  // departmentList: DepartmentModel[] = [];
  departmentList = signal<DepartmentModel[]>([]); // Using signal to manage the department list state

  ngOnInit() {
    this.getAllDepartments();
  }



  /// <summary>
  /// Get All Department
  /// TEST URL: hostAddress/api/DepartmentMaster/etAllDepartments
  /// </summary>
  /// <returns></returns>
  getAllDepartments() {
    this.masterService.getAllDepartments().subscribe({
      next: (result: any) => {
        console.log('Departments fetched successfully:', result);
        // Handle the result as needed, e.g., update a list of departments in the UI
        this.departmentList.set(result); // Assuming the API returns an array of departments
      },
      error: (error: any) => {
        console.error('Error fetching departments:', error);
        // Handle the error, e.g., show an error message to the user
        alert('Error fetching departments: ' + error.message);
      }
    });
  }


  /// <summary>
  /// Add Department
  /// TEST URL: hostAddress/api/DepartmentMaster/AddDepartment
  /// </summary>
  /// <param name="department"></param>
  /// <returns></returns>
  onSaveDepartment() {
    this.masterService.saveDepartment(this.newDeptObj).subscribe({
      next: (result: any) => {
        console.log('Department saved successfully:', result);
        // Handle the result as needed, e.g., update a list of departments in the UI
        alert('Department saved successfully:' + result.message);
        this.getAllDepartments(); // Refresh the department list after saving
        this.newDeptObj = new DepartmentModel(); // Reset the form fields after saving
      },
      error: (error: any) => {
        console.error('Error saving department:', error);
        // Handle the error, e.g., show an error message to the user
        alert('Error saving department: ' + error.message);
      }
    });
    console.log('Saving department:', this.newDeptObj);
    // You can add your logic to send the data to the backend API or perform any other action.  
  }


  /// <summary>
  // Why the stringify/parse dance: a deep-copy trick.
  // JSON.stringify then JSON.parse produces a brand-new object with no references back to the original
  // department in departmentList.
  // Without this, doing this.newDeptObj = department would make the form edit the same object that's displayed
  // in the table — so typing in the form would mutate the list row live, even before the user saves.
  /// </summary>
  /// <param name="department"></param>
  /// <returns>newDeptObj</returns>
  onEditDepartment(department: DepartmentModel) {
    const strData = JSON.stringify(department);
    const parsedData = JSON.parse(strData);
    this.newDeptObj = parsedData;
    console.log('Editing department:', strData);
    //alert('Editing department:' + strData);
    // Populate the form with the selected department's data for editing
    // this.newDeptObj = { ...department }; // Create a copy of the department object to avoid direct mutation
    // console.log('Editing department:', this.newDeptObj);
  }

  /// <summary>
  /// Update Department
  /// TEST URL: hostAddress/api/DepartmentMaster/UpdateDepartment
  /// </summary>
  /// <param="department"></param>
  /// <returns></returns>
  onUpdateDepartment() {
    this.masterService.updateDepartment(this.newDeptObj).subscribe({
      next: (result: any) => {
        console.log('Department updated successfully:', result);
        // Handle the result as needed, e.g., update a list of departments in the UI
        alert('Department updated successfully:' + result.message);
        this.getAllDepartments(); // Refresh the department list after updating
        this.newDeptObj = new DepartmentModel(); // Reset the form fields after updating
      },
      error: (error: any) => {
        console.error('Error updating department:', error);
        // Handle the error, e.g., show an error message to the user
        alert('Error updating department: ' + error.message);
      }
    });
    console.log('Updating department:', this.newDeptObj);
    // You can add your logic to send the data to the backend API or perform any other action.  
  }

  onCancelEdit() {
    // Reset the form fields to their initial values
    this.newDeptObj = new DepartmentModel();
    console.log('Edit canceled. Form reset:', this.newDeptObj);
    // You can add any additional logic if needed after canceling the edit.
  }


  /// <summary>
  /// Delete Department by ID
  /// TEST URL: hostAddress/api/DepartmentMaster/id 
  /// </summary>
  /// <param name="id"></param>
  /// <returns></returns>
  onDeleteDepartment(departmentId: number) {
    // Confirm deletion with the user before proceeding; might pass in the department name for a more user-friendly message
    const confirmation = confirm('Are you sure you want to delete this department? ' + departmentId);

    if (!confirmation) {
      console.log('Deletion canceled by user.');
      return; // Exit the function if the user cancels the deletion
    }

    console.log('Deleting department with ID:', departmentId);
    this.masterService.deleteDepartment(departmentId).subscribe({
      next: (result: any) => {
        console.log('Department deleted successfully:', result);
        // Handle the result as needed, e.g., update a list of departments in the UI
        alert('Department deleted successfully:' + result.message);
        this.getAllDepartments(); // Refresh the department list after deletion
      },
      error: (error: any) => {
        console.error('Error deleting department:', error);
        // Handle the error, e.g., show an error message to the user
        alert('Error deleting department: ' + error.message);
      }
    });
  }




  onResetForm() {
    // Reset the form fields to their initial values
    this.newDeptObj = new DepartmentModel();
    console.log('Form reset:', this.newDeptObj);
    // You can add any additional logic if needed after resetting the form.
  }


}
