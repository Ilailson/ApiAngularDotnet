using ApiDotNetAngular.Models;
using ApiDotNetAngular.Service;
using BackDOT.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiDotNetAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecaoController : Controller
    {
         private readonly ISecaoInterface _secaoInterface;
        public SecaoController(ISecaoInterface secaoInterface)
        {
            _secaoInterface = secaoInterface;
        }

         [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<Secao>>>> GetSecaos()
        {
            return Ok( await _secaoInterface.GetSecaos());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<Secao>>> GetSecaoById(int id)
        {
            ServiceResponse<Secao> serviceResponse = await _secaoInterface.GetSecaoById(id);

            return Ok(serviceResponse);
        }

        [HttpPost]
public async Task<ActionResult<ServiceResponse<List<Secao>>>> CreateSecao([FromBody] Secao secao)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }

    ServiceResponse<List<Secao>> serviceResponse = await _secaoInterface.CreateSecao(secao);
    return Ok(serviceResponse);
}



        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<Secao>>>> UpdateSecao(Secao editadoSecao)
        {
            ServiceResponse<List<Secao>> serviceResponse = await _secaoInterface.UpdateSecao(editadoSecao);

            return Ok(serviceResponse);
        }


        [HttpPut("inativaSecao")]
        public async Task<ActionResult<ServiceResponse<List<Secao>>>> InativaSecao(int id)
        {
            ServiceResponse<List<Secao>> serviceResponse = await _secaoInterface.InativaSecao(id);

            return Ok(serviceResponse);

        }

        [HttpPut("ativaSecao")]
        public async Task<ActionResult<ServiceResponse<List<Secao>>>> AtivaSecao(int id)
        {
            ServiceResponse<List<Secao>> serviceResponse = await _secaoInterface.AtivaSecao(id);

            return Ok(serviceResponse);

        }

        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<List<Secao>>>> DeleteSecao(int id)
        {
            ServiceResponse<List<Secao>> serviceResponse = await _secaoInterface.DeleteSecao(id);

            return Ok(serviceResponse);

        }


    }
}
