using System.Text.Json.Serialization;

namespace BackDOT.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DepartamentoEnum
    {
        RH,
        Financeiro,
        Compras,
        Atendimento,
        Zeladoria,
        Soinf
    }
}