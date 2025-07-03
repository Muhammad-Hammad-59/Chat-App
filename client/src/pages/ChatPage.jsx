import Header from "../components/Header";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

const ChatPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <h1>welcome to hammad chat app </h1>
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatPage;