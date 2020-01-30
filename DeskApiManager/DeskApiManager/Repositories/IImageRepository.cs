using DeskApiManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Repositories
{
    public interface IImageRepository
    {
        Task<IEnumerable<Picture>> GetImagesAsync(int id);
        Task<Picture> GetImageAsync(int id);
    }
}
