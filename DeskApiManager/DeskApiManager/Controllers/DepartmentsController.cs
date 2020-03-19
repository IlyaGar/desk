using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeskApiManager.Models;
using DeskApiManager.Models.Shop;
using DeskApiManager.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeskApiManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly IDepartmentRepository _repository;

        public DepartmentsController(IDepartmentRepository repository) => _repository = repository;

        [HttpGet]
        public async Task<JsonResult> Get() => new JsonResult(await _repository.GetDepartmentsAsync());
       
        [HttpPost]
        public async Task<Status> Post([FromBody] Department department) => await _repository.CreateDepartmentAsync(department);

        [HttpPut]
        public async Task<Department> Put([FromBody] Department department) => await _repository.UpdateDepartmentAsync(department);

        [HttpDelete]
        public async Task<Status> Delete([FromBody] Department department) => await _repository.DeleteDepartmentAsync(department);
    }
}