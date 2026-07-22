/// <summary>
/// Designation API URL: hostAddress/api/DesignationMaster
/// </summary>
/// <returns></returns>


export class DesignationModel {
  designationId: number;
  departmentId: number;
  designationName: string;


  constructor() {
    this.designationId = 0;
    this.departmentId = 0;
    this.designationName = '';
  }

}


//Employee.API
// [Table("designationTbl")]
// public class Designation
// {
//     [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//     public int DesignationId { get; set; }
//     public int DepartmentId { get; set; }

//     [Required,MaxLength(50)]
//     public string DesignationName { get; set; } = string.Empty;
// }
