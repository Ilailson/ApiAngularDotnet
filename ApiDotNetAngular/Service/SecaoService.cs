using ApiDotNetAngular.Models;
using Microsoft.EntityFrameworkCore;
using BackDOT.DataContext;
using BackDOT.Models;

namespace ApiDotNetAngular.Service
{
    public class SecaoService : ISecaoInterface
    {

        private readonly ApplicationDbContext _context;
            public SecaoService(ApplicationDbContext context)
            {
                _context = context;

            }



        public async Task<ServiceResponse<List<Secao>>> CreateSecao(Secao novoSecao)
        {
             ServiceResponse<List<Secao>> serviceResponse = new ServiceResponse<List<Secao>>();

                try
                {
                    if(novoSecao == null)
                    {
                        serviceResponse.Dados = null;
                        serviceResponse.Mensagem = "Informar dados!";
                        serviceResponse.Sucesso = false;

                        return serviceResponse;
                    }

                    _context.Add(novoSecao);
                    await _context.SaveChangesAsync();

                    serviceResponse.Dados = _context.Secoes.ToList();


                }catch (Exception ex)
                {
                    serviceResponse.Mensagem = ex.Message;
                    serviceResponse.Sucesso = false;
                }

                return serviceResponse;
        }


        public async Task<ServiceResponse<List<Secao>>> DeleteSecao(int id)
        {
            ServiceResponse<List<Secao>> serviceResponse = new ServiceResponse<List<Secao>>();

                try
                {
                    Secao secao = _context.Secoes.FirstOrDefault(x => x.Id == id);

                    if (secao == null)
                    {
                        serviceResponse.Dados = null;
                        serviceResponse.Mensagem = "Seção não localizada!";
                        serviceResponse.Sucesso = false;

                        return serviceResponse;


                    }


                    _context.Secoes.Remove(secao);
                    await _context.SaveChangesAsync();


                    serviceResponse.Dados = _context.Secoes.ToList();

                }
                catch(Exception ex)
                {
                    serviceResponse.Mensagem = ex.Message;
                    serviceResponse.Sucesso = false;
                }

                return serviceResponse;
        }

        public async Task<ServiceResponse<Secao>> GetSecaoById(int id)
        {
            ServiceResponse<Secao> serviceResponse = new ServiceResponse<Secao>();

                try
                {
                    Secao secao = _context.Secoes.FirstOrDefault(x => x.Id == id);

                    if(secao == null)
                    {
                        serviceResponse.Dados = null;
                        serviceResponse.Mensagem = "Seção não localizado!";
                        serviceResponse.Sucesso = false;
                    }

                    serviceResponse.Dados = secao;

                }
                catch(Exception ex)
                {

                    serviceResponse.Mensagem = ex.Message;
                    serviceResponse.Sucesso = false;
                }

                return serviceResponse;
        }

        public async Task<ServiceResponse<List<Secao>>> GetSecaos()
        {
             ServiceResponse<List<Secao>> serviceResponse = new ServiceResponse<List<Secao>>();

                try
                {
                    serviceResponse.Dados = _context.Secoes.ToList();

                    if(serviceResponse.Dados.Count == 0)
                    {
                        serviceResponse.Mensagem = "Nenhum dado encontrado!";
                    }


                }catch(Exception ex)
                {

                    serviceResponse.Mensagem = ex.Message;
                    serviceResponse.Sucesso = false;
                }

                return serviceResponse;
        }

        public async Task<ServiceResponse<List<Secao>>> InativaSecao(int id)
        {
             ServiceResponse<List<Secao>> serviceResponse = new ServiceResponse<List<Secao>>();

                try
                {
                    Secao secao = _context.Secoes.FirstOrDefault(x => x.Id == id);

                    if(secao == null)
                    {
                        serviceResponse.Dados = null;
                        serviceResponse.Mensagem = "Seção não localizado!";
                        serviceResponse.Sucesso = false;
                    }

                    secao.Ativo = false;
                    secao.DataDeAlteracao = DateTime.Now.ToLocalTime();

                    _context.Secoes.Update(secao);
                    await _context.SaveChangesAsync();

                    serviceResponse.Dados = _context.Secoes.ToList();


                }catch(Exception ex)
                {
                    serviceResponse.Mensagem = ex.Message;
                    serviceResponse.Sucesso = false;
                }

                return serviceResponse;
        }

         public async Task<ServiceResponse<List<Secao>>> AtivaSecao(int id)
        {
            ServiceResponse<List<Secao>> serviceResponse = new ServiceResponse<List<Secao>>();

                try
                {
                    Secao secao = _context.Secoes.FirstOrDefault(x => x.Id == id);

                    if(secao == null)
                    {
                        serviceResponse.Dados = null;
                        serviceResponse.Mensagem = "Seção não localizado!";
                        serviceResponse.Sucesso = false;
                    }

                    secao.Ativo = true;
                    secao.DataDeAlteracao = DateTime.Now.ToLocalTime();

                    _context.Secoes.Update(secao);
                    await _context.SaveChangesAsync();

                    serviceResponse.Dados = _context.Secoes.ToList();


                }catch(Exception ex)
                {
                    serviceResponse.Mensagem = ex.Message;
                    serviceResponse.Sucesso = false;
                }

                return serviceResponse;
        }

        public async Task<ServiceResponse<List<Secao>>> UpdateSecao(Secao editadoSecao)
        {
             ServiceResponse<List<Secao>> serviceResponse = new ServiceResponse<List<Secao>>();

                try
                {
                    Secao secao = _context.Secoes.AsNoTracking().FirstOrDefault(x => x.Id == editadoSecao.Id);

                    if (secao == null)
                    {
                        serviceResponse.Dados = null;
                        serviceResponse.Mensagem = "Seção não localizado!";
                        serviceResponse.Sucesso = false;
                    }


                    secao.DataDeAlteracao = DateTime.Now.ToLocalTime();

                    _context.Secoes.Update(editadoSecao);
                    await _context.SaveChangesAsync();

                    serviceResponse.Dados = _context.Secoes.ToList();

                }
                catch(Exception ex)
                {
                    serviceResponse.Mensagem = ex.Message;
                    serviceResponse.Sucesso = false;
                }

                return serviceResponse;
            }
        }
    }
