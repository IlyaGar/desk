using Microsoft.EntityFrameworkCore.Migrations;

namespace DeskApiManager.Migrations
{
    public partial class ShopToShopIdInDepartment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Departments_Shops_ShopId",
                table: "Departments");

            migrationBuilder.AlterColumn<int>(
                name: "ShopId",
                table: "Departments",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Departments_Shops_ShopId",
                table: "Departments",
                column: "ShopId",
                principalTable: "Shops",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Departments_Shops_ShopId",
                table: "Departments");

            migrationBuilder.AlterColumn<int>(
                name: "ShopId",
                table: "Departments",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Departments_Shops_ShopId",
                table: "Departments",
                column: "ShopId",
                principalTable: "Shops",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
