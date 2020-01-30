using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeskApiManager.Context;
using DeskApiManager.Models;
using Microsoft.EntityFrameworkCore;

namespace DeskApiManager.Repositories
{
    public class MessangeRepository : IMessangeRepository
    {
        private readonly DeskContext _context;

        public MessangeRepository(DeskContext context) =>  _context = context;     

        public async Task<IEnumerable<Message>> GetMessagesAsync(int id)
        {
            return await _context.Messages.Where(mes => mes.RequestTask.Id == id).Include(mes => mes.Pictures).ToListAsync();
        }

        public async Task<int> CreateMessagesAsync(Message message)
        {
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            return message.Id;
        }
    }
}
