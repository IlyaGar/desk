using Microsoft.EntityFrameworkCore.Migrations;

namespace DeskApiManager.Migrations
{
    public partial class AddFixRequestMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "RequestTasks",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Shop",
                table: "RequestTasks",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Phone",
                table: "RequestTasks");

            migrationBuilder.DropColumn(
                name: "Shop",
                table: "RequestTasks");
        }
    }
}
