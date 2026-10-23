import Layout from "../components/Layout";
import { SiReact, SiFigma, SiNextdotjs, SiNodedotjs, SiGithub } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const skills = [
  { icon: SiReact, name: "React", level: "Advanced" },
  { icon: SiFigma, name: "Figma", level: "Advanced" },
  { icon: FaHtml5, name: "HTML & CSS", level: "Advanced" },
  { icon: SiNextdotjs, name: "Next.js", level: "Intermediate" },
  { icon: SiNodedotjs, name: "Node.js", level: "Intermediate" },
  { icon: SiGithub, name: "GitHub", level: "Intermediate" },
];

export default function Skill() {
  return (
    <Layout>
      <h2 className="title">My <span className="accent">Skills</span></h2>
      <div className="skills">
        {skills.map(({ icon: Icon, name, level }) => (
          <div key={name} className="skill">
            <Icon />
            <span className="accent">{level}</span>
            <small>{name}</small>
          </div>
        ))}
      </div>
    </Layout>
  );
}
