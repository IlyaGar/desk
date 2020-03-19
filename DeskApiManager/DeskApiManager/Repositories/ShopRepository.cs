using DeskApiManager.Context;
using DeskApiManager.Models;
using DeskApiManager.Models.Shop;
using DeskApiManager.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Repositories
{
    public class ShopRepository : IShopRepository
    {
        private readonly DeskContext _context;
        public ShopRepository(DeskContext context) => _context = context;

        public async Task<IEnumerable<Shop>> GetShopsAsync() => await _context.Shops.Include(shop => shop.Departments).ToListAsync();
        //=> await _context.Shops.ToListAsync();

        public async Task<Status> CreateShopAsync(Shop shop)
        {
            _context.Shops.Add(shop);
            await _context.SaveChangesAsync();

            return new Status("Ok");
        }
        public async Task<Shop> UpdateShopAsync(Shop shop)
        {
            _context.Entry(shop).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return shop;
        }

        public async Task<Status> DeleteShopAsync(Shop shop)
        {
            _context.Entry(shop).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return new Status("Ok");
        }
    }
}