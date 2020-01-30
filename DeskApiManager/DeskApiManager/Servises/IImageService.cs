using DeskApiManager.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Servises
{
    public interface IImageService
    {
        Task<List<Picture>> SavePictures(List<IFormFile> formFiles);
    }
}
