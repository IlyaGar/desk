using DeskApiManager.Models;
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
        public DbSet<Admin> Admins { get; set; }
    }
}
