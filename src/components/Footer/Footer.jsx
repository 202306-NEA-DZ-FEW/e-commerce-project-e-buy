import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const teamMembers = [
  {
    name: "Fella Kettani",
    github: "https://github.com/fketta",
    linkedin: "https://www.linkedin.com/in/fella-kettani/",
  },
  {
    name: "Katia Ghezali",
    github: "https://github.com/KatiaGhezali",
    linkedin: "https://www.linkedin.com/in/katiaghezali/",
  },
  {
    name: "Sid-Ali Habchi",
    github: "https://github.com/HabchiSidAli",
    linkedin: "https://www.linkedin.com/in/sid-ali-habchi-10216125a/",
  },
  {
    name: "Hadj Said Bouras",
    github: "https://github.com/Hadj-Said-Bouras",
    linkedin: "https://www.linkedin.com/in/hadj-said-a577a8255/",
  },
  {
    name: "Walid Lamraoui",
    github: "https://github.com/dzc0d3r",
    linkedin: "https://www.linkedin.com/in/walid-lamraoui",
  },
]

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">E-Buy</h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 m-2 hover:shadow-md hover:scale-105 transition duration-300"
            >
              <h4 className="font-semibold mb-2 truncate">{member.name}</h4>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 text-xl transition duration-300"
                >
                  <AiFillGithub />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 text-xl transition duration-300"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
