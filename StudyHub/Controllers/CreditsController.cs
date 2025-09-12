using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditsController : ControllerBase
    {
        private readonly StudyHubContext _context;
        private ICreditsRepo _creditsRepo;

        public CreditsController(StudyHubContext context, ICreditsRepo creditsRepo)
        {
            _context = context;
            _creditsRepo = creditsRepo;
        }

        [HttpGet]
        public async Task<ActionResult<List<Credits>>> GetCredits()
        {
            return await _creditsRepo.GetAllCredits();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Credits>> GetCredits(int  id)
        {
            var creditsById = new CreditsById();
            creditsById.credit_id = id;
            var credits = await _creditsRepo.GetCreditsById(creditsById);

            if (credits == null)
            {
                return NotFound();
            }

            return credits;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Credits>> PutCredits(int id, UpdateCredits credits)
        {
            if (id != credits.id)
            {
                return BadRequest();
            }

            try
            {
                await _creditsRepo.UpdateCredits(credits);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CreditsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Credits>> PostCredits(Credits credits)
        {
            try
            {
                return await _creditsRepo.CreateCredits(credits);
            }
            catch (Exception ex) {

                return BadRequest();
            }
        }
        [HttpPost]
        [Route("BuyCredits")]
        public async Task<ActionResult<Credits>> BuyCredits(CreditsDto credits)
        {
            try
            {
                return await _creditsRepo.BuyCredits(credits);
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

        private bool CreditsExists(int id)
        {
            return _context.Credits.Any(e => e.id == id);
        }
    }
}
