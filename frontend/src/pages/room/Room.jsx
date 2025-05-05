import { ChatBox, Messages } from "../../components";

const Room = () => {
  return (
    <div className="relative h-[calc(100%_-_60px)]">
      <Messages />
      <ChatBox />
    </div>
  );
};

export default Room;
