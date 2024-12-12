using ApiDotNetAngular.Models;
using BackDOT.Models;

namespace ApiDotNetAngular.Service
{
    public interface ISecaoInterface
    {
        Task<ServiceResponse<List<Secao>>> GetSecaos();
        Task<ServiceResponse<List<Secao>>> CreateSecao(Secao novoSecao);
        Task<ServiceResponse<Secao>> GetSecaoById(int id);
        Task<ServiceResponse<List<Secao>>> UpdateSecao(Secao editadoSecao);
        Task<ServiceResponse<List<Secao>>> DeleteSecao(int id);
        Task<ServiceResponse<List<Secao>>> InativaSecao(int id);
        Task<ServiceResponse<List<Secao>>> AtivaSecao(int id);
    }
}
