using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace Company.Function.CosmosDB
{
    public class Counter
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set;}
        [JsonProperty(PropertyName = "count")]
        public int Count { get; set; }
    }
}

