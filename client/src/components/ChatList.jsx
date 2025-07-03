const ChatList = () => {
  return (
    <aside className="w-1/4 border-r border-gray-300 h-full p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Recent Chats</h2>
      {/* Dummy user list */}
      <ul className="space-y-3">
        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">User A</li>
        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">User B</li>
        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">User C</li>
      </ul>
    </aside>
  );
};

export default ChatList;