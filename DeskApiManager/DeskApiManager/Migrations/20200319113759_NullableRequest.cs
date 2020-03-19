using Microsoft.EntityFrameworkCore.Migrations;

namespace DeskApiManager.Migrations
{
    public partial class NullableRequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ObjectId",
                table: "RequestTasks",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "DepartmentId",
                table: "RequestTasks",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ObjectId",
                table: "RequestTasks",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "DepartmentId",
                table: "RequestTasks",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
