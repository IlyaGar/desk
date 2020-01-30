using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DeskApiManager.Models;
using DeskApiManager.Repositories;
using Newtonsoft.Json;
using DeskApiManager.Servises;

namespace DeskApiManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly IMessangeRepository _repository;
        private readonly IRequestTaskRepository _repositoryRequest;
        private readonly IImageService _imageService;

        public MessagesController(IMessangeRepository repository, IRequestTaskRepository repositoryRequest, IImageService imageService)
        {
            _repository = repository;
            _repositoryRequest = repositoryRequest;
            _imageService = imageService;
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> Get([FromRoute] int id)
        {
            return new JsonResult(await _repository.GetMessagesAsync(id));
        }

        // POST: api/Messages 
        [HttpPost]
        public async Task<JsonResult> PostMessage([FromForm] NewRequest newRequest)
        {
            if (!ModelState.IsValid)
            {
                return new JsonResult(new Status("bad data"));
            }

            MessageToService messageToService = JsonConvert.DeserializeObject<MessageToService>(newRequest.Message);

            var message = new Message()
            {
                MessageText = messageToService.messageText,
                Autor = messageToService.autor,
                Date = DateTime.Now.ToString(),
                RequestTask = await _repositoryRequest.GetRequestTasksAsync(messageToService.requestTaskId),
                Pictures = newRequest.Files != null ? await _imageService.SavePictures(newRequest.Files) : null,
            };

            return new JsonResult(await _repository.CreateMessagesAsync(message));
        }

        //// DELETE: api/Messages/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteMessage([FromRoute] int id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var message = await _context.Messages.FindAsync(id);
        //    if (message == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Messages.Remove(message);
        //    await _context.SaveChangesAsync();

        //    return Ok(message);
        //}

        //private bool MessageExists(int id)
        //{
        //    return _context.Messages.Any(e => e.Id == id);
        //}
    }
}