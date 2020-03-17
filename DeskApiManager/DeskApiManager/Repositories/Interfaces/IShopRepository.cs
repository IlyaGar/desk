using DeskApiManager.Models;
using DeskApiManager.Models.Shop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Repositories.Interfaces
{
    public interface IShopRepository
    {
        Task<IEnumerable<Shop>> GetShopsAsync();
        Task<Status> CreateShopAsync(Shop shop);
        Task<Status> DeleteShopAsync(Shop shop);
    }
}
