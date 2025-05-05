import { useState } from "react";
import { Link } from "react-router";

import {
  Education,
  Reporter,
  SocialMedia,
  Marketing,
} from "../../static/images/tags";

const tagsList = [
  {
    _id: 1,
    name: "Education",
    image: Education,
    description:
      "Debate about the future of education, teaching methods, and student experience.",
  },
  {
    _id: 2,
    name: "Social Media",
    image: SocialMedia,
    description:
      "Discuss the impact of social media on society, mental health, and communication.",
  },
  {
    _id: 3,
    name: "Marketing",
    image: Marketing,
    description:
      "Debate the role of marketing in business growth and ethical marketing practices.",
  },
  {
    _id: 4,
    name: "Reporter",
    image: Reporter,
    description:
      "Engage in debates on the role of journalism, fake news, and media ethics.",
  },
];

const CategorySection = () => {
  const [activeTag, setActiveTag] = useState(tagsList[0]);

  const handleTagClick = (tag) => {
    const index = tag - 1;
    setActiveTag(tagsList[index]);
  };

  return (
    <section className="relative py-20">
      <div className="container">
        <h4 className="text-3xl font-bold uppercase">
          Explore Tags For Debate
        </h4>
        <hr className="mt-2 mb-10" />

        <div className="grid grid-cols-2 gap-10">
          <div className="col">
            <ul>
              {tagsList.map((tag) => (
                <li key={tag._id} className="mb-2">
                  <button
                    onClick={() => handleTagClick(tag._id)}
                    className={`w-full  py-4 px-2 text-lg font-bold transition duration-500 hover:bg-black hover:text-white rounded-xl rounded-br-none cursor-pointer ${
                      tag._id === activeTag._id
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {tag.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <div>
              {tagsList.map((tag) => {
                if (tag._id === activeTag._id) {
                  return (
                    <div
                      key={tag._id}
                      className="grid grid-cols-5 gap-4 p-4 rounded-md bg-white shadow-lg"
                    >
                      <div className="relative col-span-3 overflow-hidden rounded h-[250px]">
                        <img
                          src={tag.image}
                          alt={tag.name}
                          className="object-cover object-center h-full w-full"
                        />
                      </div>
                      <div className="col-span-2">
                        <h6 className="text-2xl font-bold mb-3">{tag.name}</h6>
                        <p className="mb-4">{tag.description}</p>
                        <Link
                          to="/"
                          className="bg-black text-white px-4 py-3 inline-block rounded-4xl text-xs font-semibold"
                        >
                          Visit Link
                        </Link>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
