using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Repository;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<StudyHubContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("StudyHubContext") ?? throw new InvalidOperationException("Connection string 'StudyHubContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICreditsRepo, CreditsRepo>();
builder.Services.AddScoped<IUsersRepo, UsersRepo>();
builder.Services.AddScoped<IAuthRepo, AuthRepo>();
builder.Services.AddScoped<IStudayTablesRepo, StudyTablesRepo>();
builder.Services.AddScoped<IUserActivity, UserActivityRepo>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
