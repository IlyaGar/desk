using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DeskApiManager.Models;
using DeskApiManager.Repositories;
using DeskApiManager.Servises;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DeskApiManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IRequestTaskRepository _repository;
        private readonly IImageService _imageService;

        public ValuesController(IRequestTaskRepository repository, IImageService imageService)
        {
            _repository = repository;
            _imageService = imageService;
        }

        [HttpGet("{login}")]
        public async Task<JsonResult> Get([FromRoute] string login)
        {
            return new JsonResult(await _repository.GetListRequestTasksAsync(login));
        }

        [HttpGet("{login}/{admin}/{type}")]
        public async Task<JsonResult> Get([FromRoute] string login, string admin, string type)
        {
            if(admin == "1")
                return new JsonResult(await _repository.GetListRequestTaskByAdminsAsync(login, type));
            else return new JsonResult(await _repository.GetListRequestTaskByUserAsync(login, type));
        }

        [HttpPost]
        public async Task<JsonResult> Post([FromForm] NewRequest newRequest)
        {
            RequestTaskToService requestTaskToService = JsonConvert.DeserializeObject<RequestTaskToService>(newRequest.Message);

            var message = new Message()
            {
                MessageText = requestTaskToService.message,
                Autor = requestTaskToService.user,
                Date = DateTime.Now.ToString(),
                Pictures = newRequest.Files != null ? await _imageService.SavePictures(newRequest.Files) : null,
            };

            RequestTask request = new RequestTask()
            {
                Theme = requestTaskToService.theme,
                User = requestTaskToService.user,
                Messages = new List<Message>() { message },
                DateOpen = DateTime.Now.ToString(),
                ObjectId = requestTaskToService.objectId,
                DepartmentId = requestTaskToService.departmentId,
                Phone = requestTaskToService.phone,
                Admin = "",
                Status = "new"
            };

            return (await _repository.CreateRequestTaskAsync(request) >= 0) ? new JsonResult(new Status("true")) : new JsonResult(new Status("false"));
        }

        [HttpPut]
        public async Task<JsonResult> Put([FromBody] RequestTask requestTask)
        {
            if (!ModelState.IsValid)
            {
                return new JsonResult(new Status("bad data"));
            }

            return new JsonResult(await _repository.UpdateRequestTasksAsync(requestTask));
        }

        [HttpPut("{status}")]
        public async Task<JsonResult> Put([FromRoute] string status, [FromBody] RequestTask requestTask)
        {
            if (!ModelState.IsValid)
            {
                return new JsonResult(new Status("bad data"));
            }

            return new JsonResult(await _repository.UpdateRequestTaskStatusAsync(requestTask));
        }
    }
}
