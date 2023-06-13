using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        // private = only used in this class
        private IMediator _mediator;
        // protected = used within this class or any derived classes
        // ??= = if _mediator = null then assign anything to the right of ??= to _mediator proeprty.
        protected IMediator Mediator => _mediator ??=
            HttpContext.RequestServices.GetService<IMediator>();
    }
}
