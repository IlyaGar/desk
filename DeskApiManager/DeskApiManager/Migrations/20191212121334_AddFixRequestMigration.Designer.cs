﻿// <auto-generated />
using System;
using DeskApiManager.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DeskApiManager.Migrations
{
    [DbContext(typeof(DeskContext))]
    [Migration("20191212121334_AddFixRequestMigration")]
    partial class AddFixRequestMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DeskApiManager.Models.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("DeskApiManager.Models.Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Autor");

                    b.Property<string>("Date");

                    b.Property<string>("MessageText");

                    b.Property<int?>("RequestTaskId");

                    b.HasKey("Id");

                    b.HasIndex("RequestTaskId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("DeskApiManager.Models.Picture", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("MessageId");

                    b.Property<string>("Path");

                    b.HasKey("Id");

                    b.HasIndex("MessageId");

                    b.ToTable("Pictures");
                });

            modelBuilder.Entity("DeskApiManager.Models.RequestTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Admin");

                    b.Property<string>("DateClose");

                    b.Property<string>("DateOpen");

                    b.Property<string>("Phone");

                    b.Property<string>("Shop");

                    b.Property<string>("Status");

                    b.Property<string>("Theme");

                    b.Property<string>("User");

                    b.HasKey("Id");

                    b.ToTable("RequestTasks");
                });

            modelBuilder.Entity("DeskApiManager.Models.Message", b =>
                {
                    b.HasOne("DeskApiManager.Models.RequestTask", "RequestTask")
                        .WithMany("Messages")
                        .HasForeignKey("RequestTaskId");
                });

            modelBuilder.Entity("DeskApiManager.Models.Picture", b =>
                {
                    b.HasOne("DeskApiManager.Models.Message", "Message")
                        .WithMany("Pictures")
                        .HasForeignKey("MessageId");
                });
#pragma warning restore 612, 618
        }
    }
}
