import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const teamMembers = [
  // Your team members data
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
    <footer className="bg-EBuyYellow text-EBuyGray mt-2 p-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-EBuyOrange rounded-lg p-2 m-2 md:w-1/4 lg:w-1/5 hover:shadow-md hover:scale-105 transition duration-300 text-center"
          >
            <h4 className="font-semibold mb-2 truncate text-lg">
              {member.name}
            </h4>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-EBuyGray hover:text-EBuyDeepOrange text-xl transition duration-300"
              >
                <AiFillGithub />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-EBuyGray hover:text-EBuyDeepOrange text-xl transition duration-300"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-EBuyGray text-center mt-2">
        &copy; {new Date().getFullYear()} E-Buy. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
