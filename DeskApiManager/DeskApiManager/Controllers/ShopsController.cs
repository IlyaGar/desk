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
    public class ShopsController : ControllerBase
    {
        private readonly IShopRepository _repository;

        public ShopsController(IShopRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<JsonResult> Get() => new JsonResult(await _repository.GetShopsAsync());
        
        [HttpPost]
        public async Task<Status> Post([FromBody] Shop shop) => await _repository.CreateShopAsync(shop);
    }
}