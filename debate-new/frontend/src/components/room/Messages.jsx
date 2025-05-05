import { LuCircleMinus, LuCirclePlus } from "react-icons/lu";

import { DummyAvatar } from "../../static/images";

const messageList = [
  {
    message:
      "Education empowers individuals with knowledge and skills, leading to better career opportunities.",
    type: "pros",
    user: "Rahul Yadav",
  },
  {
    message:
      "A well-educated society contributes to economic growth and innovation.",
    type: "pros",
    user: "Jyoti Jaiswal",
  },
  {
    message:
      "Education helps in personal development by improving critical thinking and decision-making skills.",
    type: "pros",
    user: "Rahul Yadav",
  },
  {
    message:
      "Higher education increases earning potential and financial stability.",
    type: "pros",
    user: "Jyoti Jaiswal",
  },
  {
    message:
      "Education promotes gender equality by providing equal opportunities for all.",
    type: "pros",
    user: "Rahul Yadav",
  },
  {
    message:
      "It fosters creativity and innovation, leading to advancements in science and technology.",
    type: "pros",
    user: "Jyoti Jaiswal",
  },
  {
    message:
      "Education enhances communication skills, making social and professional interactions easier.",
    type: "pros",
    user: "Rahul Yadav",
  },
  {
    message:
      "It helps in reducing poverty by providing people with the means to secure better jobs.",
    type: "pros",
    user: "Jyoti Jaiswal",
  },
  {
    message:
      "Education encourages civic engagement and responsible citizenship.",
    type: "pros",
    user: "Rahul Yadav",
  },
  {
    message:
      "It improves health outcomes by increasing awareness about hygiene and disease prevention.",
    type: "pros",
    user: "Jyoti Jaiswal",
  },
  {
    message:
      "Formal education often focuses more on rote learning rather than practical skills.",
    type: "cons",
    user: "Neha Vishwakarma",
  },
  {
    message:
      "Higher education can be expensive and may not guarantee employment.",
    type: "cons",
    user: "Rohini Patil",
  },
  {
    message:
      "The traditional education system may not cater to individual learning styles.",
    type: "cons",
    user: "Vimal Pal",
  },
  {
    message:
      "Excessive academic pressure can lead to stress and mental health issues.",
    type: "cons",
    user: "Neha Vishwakarma",
  },
  {
    message:
      "Education systems in many countries are outdated and fail to adapt to modern job market needs.",
    type: "cons",
    user: "Rohini Patil",
  },
  {
    message:
      "Overemphasis on degrees and certifications undermines practical experience and skills.",
    type: "cons",
    user: "Vimal Pal",
  },
  {
    message:
      "Rural and underprivileged communities often lack access to quality education.",
    type: "cons",
    user: "Neha Vishwakarma",
  },
  {
    message:
      "Education can sometimes reinforce social and economic inequalities.",
    type: "cons",
    user: "Rohini Patil",
  },
  {
    message:
      "Not all degrees provide real-world value, leading to underemployment or unemployment.",
    type: "cons",
    user: "Vimal Pal",
  },
  {
    message:
      "Rigid curricula limit creativity and out-of-the-box thinking in students.",
    type: "cons",
    user: "Neha Vishwakarma",
  },
];

const prosList = messageList.filter((message) => message.type === "pros");
const consList = messageList.filter((message) => message.type === "cons");

const messageCard = (list) => {
  return (
    <ul className="flex flex-col gap-2">
      {list.map((message, index) => (
        <li key={index} className="bg-gray-900 rounded relative p-4">
          <p className="text-white font-medium">{message.message}</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src={DummyAvatar}
              alt={message.user}
              className="w-5 h-5 rounded-full"
            />
            <span className="m-0 text-xs font-semibold text-gray-500">
              {message.user}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Messages = () => {
  return (
    <section className="p-4 h-[calc(100%_-_80px)] overflow-hidden">
      <div className="container h-full overflow-hidden">
        <div className="flex bg-black h-full">
          <div className="w-1/2 border-r border-solid border-gray-800">
            <div className="h-full w-full">
              <h4 className="p-4 border-b border-solid border-gray-800 text-lg text-white font-bold flex items-center justify-between">
                <span>Pros</span>
                <LuCirclePlus className="text-green-400" />
              </h4>
              <div className="p-4 h-[calc(100%_-_61px)] overflow-hidden overflow-y-auto hide-scrollbar">
                {messageCard(prosList)}
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="h-full w-full">
              <h4 className="p-4 border-b border-solid border-gray-800 text-lg text-white font-bold flex items-center justify-between">
                <span>Cons</span>
                <LuCircleMinus className="text-red-400" />
              </h4>
              <div className="p-4 h-[calc(100%_-_61px)] overflow-hidden overflow-y-auto hide-scrollbar">
                {messageCard(consList)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
