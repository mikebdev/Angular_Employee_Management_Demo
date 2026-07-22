/// <summary>
/// Department API URL: hostAddress/api/DepartmentMaster
/// </summary>
/// <returns></returns>

export class DepartmentModel {
    departmentId: number;
    departmentName: string;
    isActive: boolean;


    // initializing the properties in the constructor
    constructor() {
        this.departmentId = 0;
        this.departmentName = '';
        this.isActive = false;
    }
}




//INTERFACES

// will change to IDesignationModel and put in interfaces folder later
// POST: hostAddress/api/DesignationMaster/AddDesignation
export interface DesignationModel {
    designationId: number;
    departmentId: number;
    designationName: string;
}

// will change to IDesignationListModel and put in interfaces folder later
// Get: hostAddress/api/DesignationMaster/GetAllDesignations
export interface DesignationListModel {
    designationId: number;
    departmentId: number;
    designationName: string;
    departmentName: string;
}

// DesignationMasterController
// var designations = await _context.Designations.ToListAsync();
// // Join with departments to include department name in the result
// var designations = await (from d in _context.Designations
//                           join dept in _context.Departments on d.DepartmentId equals dept.DepartmentId
//                           select new
//                           {
//                               d.DesignationId,
//                               d.DepartmentId,
//                               d.DesignationName,
//                               DepartmentName = dept.DepartmentName
//                           }).ToListAsync();

// return Ok(designations);








// =====================================================

//Employee.API
// [Table("departmentTbl")]
// public class Department
// {
//     [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//     public int DepartmentId { get; set; }

//     [Required, MaxLength(50)]
//     public string DepartmentName { get; set; } = string.Empty;

//     public bool IsActive { get; set; }

// }