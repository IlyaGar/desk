using DeskApiManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Repositories
{
    public interface IMessangeRepository
    {
        Task<IEnumerable<Message>> GetMessagesAsync(int id);
        Task<int> CreateMessagesAsync(Message message);
    }
}
