using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Models;

namespace StudyHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudyTablesController : ControllerBase
    {
        private readonly StudyHubContext _context;

        public StudyTablesController(StudyHubContext context)
        {
            _context = context;
        }

        // GET: api/StudyTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudyTables>>> GetStudyTables()
        {
            return await _context.StudyTables.ToListAsync();
        }

        // GET: api/StudyTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudyTables>> GetStudyTables(int id)
        {
            var studyTables = await _context.StudyTables.FindAsync(id);

            if (studyTables == null)
            {
                return NotFound();
            }

            return studyTables;
        }

        // PUT: api/StudyTables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudyTables(int id, StudyTables studyTables)
        {
            if (id != studyTables.id)
            {
                return BadRequest();
            }

            _context.Entry(studyTables).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudyTablesExists(id))
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

        // POST: api/StudyTables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StudyTables>> PostStudyTables(StudyTables studyTables)
        {
            _context.StudyTables.Add(studyTables);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudyTables", new { id = studyTables.id }, studyTables);
        }

        // DELETE: api/StudyTables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudyTables(int id)
        {
            var studyTables = await _context.StudyTables.FindAsync(id);
            if (studyTables == null)
            {
                return NotFound();
            }

            _context.StudyTables.Remove(studyTables);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudyTablesExists(int id)
        {
            return _context.StudyTables.Any(e => e.id == id);
        }
    }
}
