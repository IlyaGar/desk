using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Models
{
    public class RequestTaskToService
    {
        public string token { get; set; }
        public string user { get; set; }
        public string theme { get; set; }
        public string message { get; set; }
        public string shop { get; set; }
        public string phone { get; set; }
    }
}
