using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Models
{
    public class NewRequest
    {
        [FromForm(Name = "file")]
        public List<IFormFile> Files { get; set; }

        [FromForm(Name = "message")]
        public string Message { get; set; }
    }
}
