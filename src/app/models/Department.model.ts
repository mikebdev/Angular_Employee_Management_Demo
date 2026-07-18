/// <summary>
/// Department API URL: https://localhost:7004/api/DepartmentMaster
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

