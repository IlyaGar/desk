using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeskApiManager.Models
{
    public class Picture
    {
        public int Id { get; set; }
        public string Path { get; set; }
        [JsonIgnore()]
        public Message Message { get; set; }
    }
}
