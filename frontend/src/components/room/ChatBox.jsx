import { FiSend } from "react-icons/fi";

const ChatBox = () => {
  return (
    <div className="absolute left-0 bottom-0 p-4 bg-white w-full">
      <form className="flex items-center justify-between gap-5">
        <textarea
          placeholder="Enter Message"
          className="w-full text-sm"
        ></textarea>
        <button
          type="submit"
          className="p-4 bg-blue-500 text-white cursor-pointer rounded"
        >
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
