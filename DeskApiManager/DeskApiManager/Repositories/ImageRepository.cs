using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeskApiManager.Context;
using DeskApiManager.Models;
using Microsoft.EntityFrameworkCore;

namespace DeskApiManager.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private readonly DeskContext _context;
        public ImageRepository(DeskContext context) => _context = context;

        public async Task<Picture> GetImageAsync(int id)
        {
            return await _context.Pictures.FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<IEnumerable<Picture>> GetImagesAsync(int id)
        {
            var r = await _context.Pictures.Where(i => i.Message.Id == id).ToListAsync();

            return await _context.Pictures.Where(i => i.Message.Id == id).ToListAsync();
        }
    }
}
