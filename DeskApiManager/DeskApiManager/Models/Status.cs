using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Models
{
    public class Status
    {
        public string status { get; set; }
        public Status(string status)
        {
            this.status = status;
        }
    }
}