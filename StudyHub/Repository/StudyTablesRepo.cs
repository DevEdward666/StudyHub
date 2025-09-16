using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;
using StudyHub.ViewModels;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace StudyHub.Repository
{
    public class StudyTablesRepo : IStudayTablesRepo
    {
        private readonly StudyHubContext _context;

        public StudyTablesRepo(StudyHubContext context)
        {
            _context = context;
        }

        public async Task<StudyTables> CreateStudyTables(StudyTablesDto tables)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    StudyTables studyTables = new StudyTables();
                    studyTables.status = tables.status;
                    studyTables.table_no = tables.table_no;

                    _context.StudyTables.Add(studyTables);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return studyTables;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while Buying credits.", ex);

                }
            }
        }
        public async Task<StudyTables> CustomerScanTable(CustomerScanTableDto studyTablesDto)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var credits = await _context.Credits
                       .Where(v => v.id == studyTablesDto.credit_id)
                       .FirstOrDefaultAsync();

                    var studyTablesUpdate = await _context.StudyTables
                        .Where(v => v.id == studyTablesDto.id)
                        .FirstOrDefaultAsync();
                    var getUsers = await _context.Users
                       .Where(v => v.id == studyTablesDto.used_by)
                       .FirstOrDefaultAsync();
                    if (studyTablesUpdate.status == 1)
                    {
                        throw new Exception("This stable still in used by other user");
                    }
                    if (credits == null)
                    {
                        throw new Exception("Credit not found.");
                    }
                    if (studyTablesUpdate == null)
                    {
                        throw new Exception("Study Table not found.");
                    }
                    long startTime = DateTimeOffset.UtcNow.ToUnixTimeSeconds();

                    long endTime = DateTimeOffset.UtcNow.AddHours(credits.credit_value_hours).ToUnixTimeSeconds();

                    getUsers.total_credits = getUsers.total_credits - credits.credit_value;
                    studyTablesUpdate.status = studyTablesDto.status;
                    studyTablesUpdate.session_started = startTime.ToString();
                    studyTablesUpdate.session_ended = endTime.ToString();
                    studyTablesUpdate.session_finished = null;
                    studyTablesUpdate.used_by = studyTablesDto.used_by;

                    await _context.SaveChangesAsync();

                    await transaction.CommitAsync();

                    return studyTablesUpdate;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while updating the study tables.", ex);
                }
            }
        }
        public async Task<StudyTables> EndSession(EndSessionDto endSession)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var studyTablesUpdate = await _context.StudyTables
                        .Where(v => v.id == endSession.id)
                        .FirstOrDefaultAsync();
                 
                    if (studyTablesUpdate == null)
                    {
                        throw new Exception("Study Table not found.");
                    }
                    long finished = DateTimeOffset.UtcNow.ToUnixTimeSeconds();


                    studyTablesUpdate.used_by = null;
                    studyTablesUpdate.status = 0;
                    studyTablesUpdate.session_started = null;
                    studyTablesUpdate.session_ended = null;
                    studyTablesUpdate.session_finished = finished.ToString();

                    await _context.SaveChangesAsync();

                    await transaction.CommitAsync();

                    return studyTablesUpdate;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while updating the study tables.", ex);
                }
            }
        }
        public async Task<StudyTables> UpdateTables (StudyTablesDto studyTablesDto)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var studyTablesUpdate = await _context.StudyTables
                        .Where(v => v.id == studyTablesDto.id)
                        .FirstOrDefaultAsync();

                    if (studyTablesUpdate == null)
                    {
                        throw new Exception("Study Table not found.");
                    }

                    studyTablesUpdate.status = studyTablesDto.status;
                    studyTablesUpdate.table_no = studyTablesDto.table_no;

                    await _context.SaveChangesAsync();

                    await transaction.CommitAsync();

                    return studyTablesUpdate;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while updating the study tables.", ex);
                }
            }
        }
        public async Task<List<StudyTables>> GetAllStudyTables()
        {
            var getAllStudyTables = await _context.StudyTables.ToListAsync();
            return getAllStudyTables;
        }
        public async Task<SelectedStudyTable> GetStudyTablesById(StudyTablesById study_tables)
        {
            try
            {
                SelectedStudyTable selectedStudyTable = new SelectedStudyTable();
                var getSelectedStudyTables = await _context.StudyTables.FindAsync(study_tables.study_tables_id);
                var StudyTableUser = await _context.Users.FindAsync(getSelectedStudyTables.used_by);

                long startTime = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
                long endTime = long.Parse(getSelectedStudyTables.session_ended ?? "0");


                long remainingSeconds = endTime - startTime;
                TimeSpan remainingTime = TimeSpan.FromSeconds(endTime == 0 ? 0:remainingSeconds);

                string formatted = remainingTime.ToString(@"hh\:mm\:ss");
                selectedStudyTable.id = getSelectedStudyTables.id;
                selectedStudyTable.status = getSelectedStudyTables.status;
                selectedStudyTable.remaining_time = remainingTime;
                selectedStudyTable.table_no = getSelectedStudyTables.table_no;
                selectedStudyTable.user = StudyTableUser;

                return selectedStudyTable;
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while getting the study tables.", ex);
            }
        }
    }
}
