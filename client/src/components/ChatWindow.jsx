const ChatWindow = () => {
  return (
    <section className="w-3/4 h-full p-4">
      <h2 className="text-lg font-bold mb-4">Chat with User A</h2>
      <div className="bg-gray-100 h-[80%] mb-4 rounded p-4 overflow-y-auto">
        {/* Chat messages go here */}
        <div className="mb-2 text-left">User A: Hello</div>
        <div className="mb-2 text-right">Me: Hi there!</div>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type a message..."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </section>
  );
};

export default ChatWindow;