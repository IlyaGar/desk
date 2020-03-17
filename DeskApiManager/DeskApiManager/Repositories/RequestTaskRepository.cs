using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeskApiManager.Context;
using DeskApiManager.Models;
using DeskApiManager.Models.Shop;
using Microsoft.EntityFrameworkCore;

namespace DeskApiManager.Repositories
{
    public class RequestTaskRepository : IRequestTaskRepository
    {
        private readonly DeskContext _context;
        public RequestTaskRepository(DeskContext context) => _context = context;

        public async Task<IEnumerable<RequestTask>> GetListRequestTaskByAdminsAsync(string login, string type)
        {
            List<RequestTask> result = null;

            switch(type)
            {
                case "new":
                    result = await GetListRequestTaskByAdminsNewAsync();
                    break;

                case "my":
                    result = await GetListRequestTaskByAdminsMyAsync(login);
                    break;

                case "archive":
                    result = await GetListRequestTaskByAdminsArchiveAsync(login);
                    break;
            }

            result.ForEach(x => x.Messages = new List<Message>() { x.Messages.Last() });

            return result;
        }


        public async Task<IEnumerable<RequestTask>> GetListRequestTaskByUserAsync(string login, string type)
        {
            if (type == "archive")
            {
                var result = await _context.RequestTasks.Where(req => (req.User == login) && (req.Status == "decision")).Include(req => req.Messages).ToListAsync();
                result.ForEach(x => x.Messages = new List<Message>() { x.Messages.Last() });

                return result;
            }
            else return null;
        }

        public async Task<IEnumerable<RequestTask>> GetListRequestTasksAsync(string login)
        {
            var result = await _context.RequestTasks.Where(req => (req.User == login) && (req.DateClose == null)).Include(req => req.Messages).ToListAsync();
            result.ForEach(x => x.Messages = new List<Message>() { x.Messages.Last() });

            return result;
        }

        public async Task<RequestTask> GetRequestTasksAsync(int id)
        {
            return await _context.RequestTasks.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<int> CreateRequestTaskAsync(RequestTask requestTask)
        {
            _context.RequestTasks.Add(requestTask);
            await _context.SaveChangesAsync();

            return requestTask.Id;
        }

        public async Task<RequestTask> UpdateRequestTasksAsync(RequestTask requestTask)
        {
            var item = await _context.RequestTasks.FirstOrDefaultAsync(res => res.Id == requestTask.Id);
            item.Admin = requestTask.Admin;
            item.Status = "inprocess";
            _context.RequestTasks.Update(item);
            await _context.SaveChangesAsync();

            return item;
        }

        public async Task<RequestTask> UpdateRequestTaskStatusAsync(RequestTask requestTask)
        {
            var item = await _context.RequestTasks.FirstOrDefaultAsync(res => res.Id == requestTask.Id);
            item.Status = "decision";
            item.DateClose = DateTime.Now.ToString();
            _context.RequestTasks.Update(item);
            await _context.SaveChangesAsync();

            return item;
        }

        private async Task<List<RequestTask>> GetListRequestTaskByAdminsNewAsync()
        {
            return await _context.RequestTasks.Where(req => req.Status == "new").Include(req => req.Messages).ToListAsync();
        }

        private async Task<List<RequestTask>> GetListRequestTaskByAdminsMyAsync(string login)
        {
            return await _context.RequestTasks.Where(req => (req.Admin == login) && (req.Status == "inprocess")).Include(req => req.Messages).ToListAsync();
        }

        private async Task<List<RequestTask>> GetListRequestTaskByAdminsArchiveAsync(string login)
        {
            return await _context.RequestTasks.Where(req => (req.DateClose != null)).Include(req => req.Messages).ToListAsync();
            //return await _context.RequestTasks.Where(req => (req.Admin == login) && (req.DateClose != null)).Include(req => req.Messages).ToListAsync();
        }
    }
}
