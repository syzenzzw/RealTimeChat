using ChatInRealTime.Model;

namespace ChatInRealTime.Interfaces
{
    public interface IHubProvider
    {
        Task ReceivedMessage(MessageModel messageModel);
    }
}
