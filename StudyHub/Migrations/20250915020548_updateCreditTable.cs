using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudyHub.Migrations
{
    /// <inheritdoc />
    public partial class updateCreditTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "credit_value_hours",
                table: "Credits",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "credit_value_hours",
                table: "Credits");
        }
    }
}
