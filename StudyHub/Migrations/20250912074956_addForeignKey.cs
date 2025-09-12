using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudyHub.Migrations
{
    /// <inheritdoc />
    public partial class addForeignKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StudyTables",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    table_no = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    used_by = table.Column<int>(type: "int", nullable: true),
                    Usersid = table.Column<int>(type: "int", nullable: true),
                    status = table.Column<int>(type: "int", nullable: false),
                    session_started = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    session_ended = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    session_finished = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudyTables", x => x.id);
                    table.ForeignKey(
                        name: "FK_StudyTables_Users_Usersid",
                        column: x => x.Usersid,
                        principalTable: "Users",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    total_credits = table.Column<int>(type: "int", nullable: false),
                    user_id = table.Column<int>(type: "int", nullable: false),
                    stutus = table.Column<int>(type: "int", nullable: false),
                    created_at = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.id);
                    table.ForeignKey(
                        name: "FK_Transactions_Users_user_id",
                        column: x => x.user_id,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StudyTables_Usersid",
                table: "StudyTables",
                column: "Usersid");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_user_id",
                table: "Transactions",
                column: "user_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudyTables");

            migrationBuilder.DropTable(
                name: "Transactions");
        }
    }
}
