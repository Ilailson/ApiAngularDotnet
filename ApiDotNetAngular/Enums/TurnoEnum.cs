using System.Text.Json.Serialization;

namespace BackDOT.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum TurnoEnum
    {
        Manha,
        Tarde,
        Noite,
        Madrugada
    }
}