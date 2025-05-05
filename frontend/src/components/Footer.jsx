import { Link } from "react-router";
import {
  PiYoutubeLogo,
  PiInstagramLogo,
  PiTwitterLogo,
  PiFacebookLogo,
} from "react-icons/pi";

import { Logo } from "../static/images";

const topicList = [
  {
    label: "Climate",
    to: "/climate",
  },
  {
    label: "Democracy",
    to: "/democracy",
  },
  {
    label: "Digital",
    to: "/digital",
  },
  {
    label: "Economy",
    to: "/economy",
  },
  {
    label: "Global Europe",
    to: "/global-europe",
  },
  {
    label: "Health",
    to: "/health",
  },
  {
    label: "Peace and Security",
    to: "/peace-and-security",
  },
];

const moreList = [
  {
    label: "Our Activities",
    to: "/activities",
  },
  {
    label: "Privacy Policy",
    to: "/privacy-policy",
  },
];

const socialList = [
  {
    title: "Facebook",
    icon: <PiFacebookLogo />,
    url: "#",
  },
  {
    title: "Youtube",
    icon: <PiYoutubeLogo />,
    url: "#",
  },
  {
    title: "Instagram",
    icon: <PiInstagramLogo />,
    url: "#",
  },
  {
    title: "Twitter",
    icon: <PiTwitterLogo />,
    url: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container-expanded">
        <div className="bg-black rounded-4xl rounded-tr-none py-10">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8 flex flex-col items-start justify-between">
                <img src={Logo} alt="Debate" className="w-38" />

                <div>
                  <h6 className="text-white text-semibold mb-3">Follow Us</h6>

                  <div className="flex gap-3">
                    {socialList.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        target="_blank"
                        className="text-white text-3xl"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <h5 className="text-white text-xl font-bold mb-5">Topics</h5>

                <ul>
                  {topicList.map((item) => (
                    <li key={item.label} className="mb-1">
                      <Link
                        to={item.to}
                        className="text-gray-300 hover:text-white text-sm transition duration-500"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2">
                <h5 className="text-white text-xl font-bold mb-5">More</h5>

                <ul>
                  {moreList.map((item) => (
                    <li key={item.label} className="mb-1">
                      <Link
                        to={item.to}
                        className="text-gray-300 hover:text-white text-sm transition duration-500"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-5">
                    <p className="text-sm text-gray-400">
                      &copy; Debating India {currentYear}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
