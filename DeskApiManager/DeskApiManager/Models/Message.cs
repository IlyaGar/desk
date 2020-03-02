using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string MessageText { get; set; }
        public string Autor { get; set; }
        public string Date { get; set; }
        [JsonIgnore()]
        public RequestTask RequestTask { get; set; }
        public IEnumerable<Picture> Pictures { get; set; }
    }
}
