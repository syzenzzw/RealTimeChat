namespace ChatInRealTime.Model
{
    public class MessageModel
    {
        public string Name { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;

        public MessageModel(string name, string message, string date)
        {
            Name = name;
            Message = message;
            Date = DateTime.UtcNow.ToString();
        }
    }
}
