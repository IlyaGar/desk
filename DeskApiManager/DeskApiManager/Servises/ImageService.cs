using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using DeskApiManager.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace DeskApiManager.Servises
{
    public class ImageService : IImageService
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public ImageService(IHostingEnvironment environment) => _hostingEnvironment = environment;

        public async Task<IEnumerable<Picture>> SavePictures(IEnumerable<IFormFile> formFiles)
        {
            List<Picture> pictures = new List<Picture>();
            var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");

            foreach (var file in formFiles)
            {
                var filePath = Path.Combine(uploads, DateTime.Now.ToString("yyyyMMddhhmmss") + "-" + file.FileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                pictures.Add(new Picture() { Path = filePath });
            }

            return pictures;
        }
    }
}
