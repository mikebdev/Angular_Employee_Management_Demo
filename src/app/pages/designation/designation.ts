import { Component } from '@angular/core';
import { Master } from '../../services/master';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DesignationModel } from '../../models/Designation.model';
import { DepartmentModel, DesignationListModel } from '../../models/Department.model';
import { inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-designation',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})

export class Designation {
 
  masterService = inject(Master);
  fb = inject(FormBuilder);
  designationForm!: FormGroup;

  // designationList: DesignationModel[] = [];
  $designationList: Observable<DesignationListModel[]> = new Observable<DesignationListModel[]>();
  
  departmentList: DepartmentModel[] = [];
  
  isEditMode: boolean = false;

  ngOnInit(): void {
    this.createForm();
    this.loadDepartments();
    this.loadDesignations();
  }


  // ========================
  // FORM CREATION AND INITIALIZATION
  // ========================
  createForm() {
    this.designationForm = this.fb.group({
      designationId: [0],
      departmentId: [0, Validators.required],
      designationName: [0, Validators.required],
    });
  }



  // ==============================
  // Load Departments
  // ==============================
  loadDepartments() {
    this.masterService.getAllDepartments().subscribe(
      (response: any) => {
        this.departmentList = response;
      },
      (error) => {
        console.error('Error loading departments:', error);
      }
    );
  }
  // ==============================


  // ==============================
  // Load Designations
  // ==============================
  loadDesignations() {
    this.$designationList = this.masterService.getAllDesignations()
   }
   // todo: error handling for loadDesignations() if needed
  // ==============================




  // ==============================
  // Save / Update Designations
  // ==============================
  onSaveDesignation() {

    if (this.designationForm.invalid) {
      // check on departmentId=0 in html as that is "<option selected value="0">-- Select Department --</option>"
      alert('Please fill in all required fields before saving.');
      return;
    }

    const formValue: DesignationModel = this.designationForm.value;

    if (this.isEditMode) {
      // Update existing designation
      this.masterService.updateDesignation(formValue).subscribe(
        (response) => {
          console.log('Designation updated successfully:', response);
          this.loadDesignations();
          this.ResetForm();
        },
        (error) => {
          console.error('Error updating designation:', error);
        }
      );


    } else {
      // Save new designation
      this.masterService.saveDesignation(formValue).subscribe(
        (response) => {
          console.log('Designation saved successfully:', response);
          this.loadDesignations();
          this.ResetForm();
        },
        (error) => {
          console.error('Error saving designation:', error);
        }
      );
    }

  }
  // ==============================


  // ==============================  
  // Edit Designation
  // ==============================  
  onEditDesignation(item: DesignationModel) {
    this.isEditMode = true;
    this.designationForm.patchValue({
      designationId: item.designationId,
      departmentId: item.departmentId,
      designationName: item.designationName,
    });
  }
  // ==============================



  // ==============================  
  // Delete Designation
  // ============================== 
  onDeleteDesignation(designationId: number) {
    if (confirm('Are you sure you want to delete this designation?')) {
      this.masterService.deleteDesignation(designationId).subscribe(
        (response) => {
          console.log('Designation deleted successfully:', response);
          this.loadDesignations();
          this.ResetForm();
        },
        (error) => {
          console.error('Error deleting designation:', error);
        }
      );
    }
  } 








  // ==============================  
  // Reset Form
  // ==============================  
    ResetForm() {
      this.isEditMode = false;
      this.designationForm.reset({
        designationId: 0,
        departmentId: 0,
        designationName: '',
      }); 
  }





} // End of Designation class
