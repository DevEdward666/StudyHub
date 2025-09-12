using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StudyHub.Models;

namespace StudyHub.Data
{
    public class StudyHubContext : DbContext
    {
        public StudyHubContext (DbContextOptions<StudyHubContext> options)
            : base(options)
        {
        }

        public DbSet<StudyHub.Models.Users> Users { get; set; } = default!;
        public DbSet<StudyHub.Models.Credits> Credits { get; set; } = default!;
        public DbSet<StudyHub.Models.Transactions> Transactions { get; set; } = default!;
        public DbSet<StudyHub.Models.StudyTables> StudyTables { get; set; } = default!;
    }
}
