using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Interface
{
    public interface IStudayTablesRepo
    {
        Task<StudyTables> CreateStudyTables(StudyTablesDto tables);
        Task<StudyTables> UpdateTables(StudyTablesDto studyTablesDto);
        Task<List<StudyTables>> GetAllStudyTables();
        Task<SelectedStudyTable> GetStudyTablesById(StudyTablesById study_tables);
        Task<StudyTables> CustomerScanTable(CustomerScanTableDto studyTablesDto);
        Task<StudyTables> EndSession(EndSessionDto endSession);
    }
}
