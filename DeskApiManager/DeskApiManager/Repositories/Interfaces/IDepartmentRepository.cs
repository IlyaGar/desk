using DeskApiManager.Models;
using DeskApiManager.Models.Shop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Repositories.Interfaces
{
    public interface IDepartmentRepository
    {
        Task<IEnumerable<Department>> GetDepartmentsAsync();
        Task<Status> CreateDepartmentAsync(Department department);
        Task<Status> DeleteDepartmentAsync(Department department);
        Task<Department> UpdateDepartmentAsync(Department department);
    }
}
