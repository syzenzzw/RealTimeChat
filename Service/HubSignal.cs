using ChatInRealTime.Interfaces;
using ChatInRealTime.Model;
using Microsoft.AspNetCore.SignalR;

namespace ChatInRealTime.Service
{
    public class HubSignal : Hub<IHubProvider>
    {
        public async Task SendMessage(MessageModel message)
        {
            await Clients.All.ReceivedMessage(message);
        }
    }
}
