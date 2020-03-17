using DeskApiManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Repositories
{
    public interface IRequestTaskRepository
    {
        Task<IEnumerable<RequestTask>> GetListRequestTasksAsync(string login);
        Task<IEnumerable<RequestTask>> GetListRequestTaskByAdminsAsync(string login, string type);
        Task<IEnumerable<RequestTask>> GetListRequestTaskByUserAsync(string login, string type);
        Task<RequestTask> GetRequestTasksAsync(int id);
        Task<RequestTask> UpdateRequestTasksAsync(RequestTask requestTask);
        Task<RequestTask> UpdateRequestTaskStatusAsync(RequestTask requestTask);
        Task<int> CreateRequestTaskAsync(RequestTask requestTask);
    }
}
