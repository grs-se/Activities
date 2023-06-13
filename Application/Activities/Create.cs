using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest<Unit>
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            // Unit doesn't actually have any value, like returning nothing, but does tell API that our request is finished so it can move on.
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                // add activity to memory, we do not touch db, so we do not need to use the async version of Add method
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();
                // equivalent to nothing, but usefult let API controller know we are finished. 
                return Unit.Value;
            }
        }
    }
}
