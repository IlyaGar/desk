using Microsoft.EntityFrameworkCore.Migrations;

namespace DeskApiManager.Migrations
{
    public partial class RedoneRequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Shop",
                table: "RequestTasks");

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "RequestTasks",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ObjectId",
                table: "RequestTasks",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "RequestTasks");

            migrationBuilder.DropColumn(
                name: "ObjectId",
                table: "RequestTasks");

            migrationBuilder.AddColumn<string>(
                name: "Shop",
                table: "RequestTasks",
                nullable: true);
        }
    }
}
