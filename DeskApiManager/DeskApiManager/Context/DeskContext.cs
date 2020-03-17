using DeskApiManager.Models;
using DeskApiManager.Models.Shop;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Context
{
    public class DeskContext : DbContext
    {
        public DeskContext(DbContextOptions<DeskContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<RequestTask> RequestTasks { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Picture> Pictures { get; set; }
        public DbSet<AstomAdmin> AstomAdmins { get; set; }
        public DbSet<Shop> Shops { get; set; }
        public DbSet<Department> Departments { get; set; }
    }
}
