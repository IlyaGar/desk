using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Models
{
    public class RequestTask
    {
        public int Id { get; set; }
        public string Theme { get; set; }
        public string User { get; set; }
        public string Admin { get; set; }
        public string Status { get; set; }
        public int? ObjectId { get; set; }
        public int? DepartmentId { get; set; }
        public string Phone { get; set; }
        public string DateOpen { get; set; }
        public string DateClose { get; set; }
        public ICollection<Message> Messages { get; set; }
    }
}
