import { FaInstagram, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: " Aditya Seth ",
    role: "Lead Organiser",
    img: "/assets/team/aditya.jpg",
    social1: " ",
    social2: " ",
  },
  {
    name: " Satyaki De",
    role: "Tech Lead",
    img: "/assets/team/satyaki.png",
    social1: " ",
    social2: " ",
  },
  {
    name: " Senjuti Dey",
    role: "Graphics Lead",
    img: "/assets/team/senjuti.jpg",
    social1: " ",
    social2: " ",
  },
  {
    name: " Saptarshi Paul ",
    role: "Tech Member",
    img: "/assets/team/SaptaDev27.jpg",
    social1: " ",
    social2: " ",
  },
  {
    name: " Anuska Biswas ",
    role: "Tech Member",
    img: "/assets/team/anuska.jpg",
    social1: " ",
    social2: " ",
  },
  {
    name: " Aditi Chatterjee ",
    role: "Graphics Member",
    img: "/assets/team/aditi.jpg",
    social1: " ",
    social2: " ",
  },
  {
    name: " Rudranil Chowdhury ",
    role: "Tech Member",
    img: "/assets/team/rudranil.jpg",
    social1: " ",
    social2: " ",
  },
];

export default function TeamSection() {
  return (
    <div className="bg-transparent text-white py-10 w-full">
      <h1 className="text-center text-5xl font-bold text-purple-700">
        Meet Our Team
      </h1>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-950  rounded-2xl p-5 flex flex-col items-center text-center shadow-lg relative m-4  "
            >
              <div>
                <img
                  src={member.img}
                  alt={member.name}
                  className=" overflow-hidden   rounded-full border-2 border-gray-700 mb-4  h-32 w-32"
                />
              </div>
              <h3 className="text-xl font-semibold mt-1 mb-1">{member.name}</h3>
              <p className="text-gray-600 text-lg font-semibold mb-2">
                {member.role}
              </p>

              <div className="flex gap-3 mt-2">
                <a href={member.social1}>
                  <FaInstagram className="text-purple-700 text-2xl hover:text-blue-500 transition-all ease-in m-1" />
                </a>
                <a href={member.social2}>
                  <FaLinkedin className="text-purple-700 text-2xl  hover:text-blue-500 transition-all ease-in m-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
