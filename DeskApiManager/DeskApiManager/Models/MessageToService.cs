using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Models
{
    public class MessageToService
    {
        public string messageText { get; set; }
        public string autor { get; set; }
        public string date { get; set; }
        public int requestTaskId { get; set; }
    }
}
