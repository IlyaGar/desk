using System.Threading.Tasks;
using DeskApiManager.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace DeskApiManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IImageRepository _repository;

        public ImagesController(IImageRepository repository) => _repository = repository;

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] int id) => 
            File(System.IO.File.OpenRead((await _repository.GetImageAsync(id)).Path), "image/png");
    }
}