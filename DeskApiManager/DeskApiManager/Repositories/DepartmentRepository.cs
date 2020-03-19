using DeskApiManager.Context;
using DeskApiManager.Models;
using DeskApiManager.Models.Shop;
using DeskApiManager.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Repositories
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly DeskContext _context;
        public DepartmentRepository(DeskContext context) => _context = context;

        public async Task<IEnumerable<Department>> GetDepartmentsAsync() => await _context.Departments.ToListAsync();

        public async Task<Status> CreateDepartmentAsync(Department department)
        {
            if(!await IsDepartmentInDbAsync(department))
            {
                _context.Departments.Add(department);
                await _context.SaveChangesAsync();

                return new Status("Ok");
            }
            else return new Status("Record in DB");
        }

        public async Task<Department> UpdateDepartmentAsync(Department department)
        {
            _context.Entry(department).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return department;
        }

        public async Task<Status> DeleteDepartmentAsync(Department department)
        {
            _context.Entry(department).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return new Status("Ok");
        }

        private async Task<bool> IsDepartmentInDbAsync(Department department)
        {
            var depFilter = await _context.Departments.FirstOrDefaultAsync(dep => (dep.Name == department.Name && dep.ShopId == department.ShopId));
            return depFilter != null ? true : false;
        }
    }
}
