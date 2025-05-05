import { DummyAvatar } from "../../static/images";

const dummyUsers = [
  {
    _id: 1,
    name: "Rahul Yadav",
    email: "rahulyadav@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 2,
    name: "Jyoti Jaiswal",
    email: "jyotijaiswal@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 3,
    name: "Neha Vishwakarma",
    email: "jordkrishna@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 4,
    name: "Rohini Patil",
    email: "rohinipatil@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 5,
    name: "Vimal Pal",
    email: "vimalpal@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 6,
    name: "Rahul Yadav",
    email: "rahulyadav@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 7,
    name: "Jyoti Jaiswal",
    email: "jyotijaiswal@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 8,
    name: "Neha Vishwakarma",
    email: "jordkrishna@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 9,
    name: "Rohini Patil",
    email: "rohinipatil@gmail.com",
    avatar: DummyAvatar,
  },
  {
    _id: 10,
    name: "Vimal Pal",
    email: "vimalpal@gmail.com",
    avatar: DummyAvatar,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-[300px] h-screen overflow-x-hidden overflow-y-auto bg-black">
      <h6 className="p-4 text-white bg-black text-xl font-bold sticky top-0">
        Participants
      </h6>
      <ul>
        {dummyUsers.map((user) => (
          <li key={user._id}>
            <button className="flex items-center justify-items-start gap-4 p-4 cursor-pointer w-full transition duration-500 border-t border-r-4 border-solid border-gray-800 hover:border-r-gray-300">
              <div className="rounded-full overflow-hidden w-12 h-12">
                <img src={user.avatar} alt={user.name} />
              </div>
              <div className="w-[calc(100%_-_64px)] flex flex-col justify-items-start items-start gap-0.5">
                <span className="font-semibold text-white">{user.name}</span>
                <span className="text-gray-400 text-sm">{user.email}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
