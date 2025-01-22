using ChatInRealTime.Service;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSignalR();
builder.Services.AddOpenApi();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors(cors =>
{
    cors.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials().WithOrigins("https://localhost:5173");  
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapHub<HubSignal>("/hub");

app.Run();
