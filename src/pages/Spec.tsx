import Layout from "../components/Layout";
import { FiCode, FiPenTool, FiLayers } from "react-icons/fi";

const specs = [
  { icon: FiCode, title: "Front end developer", text: "Building fast, accessible interfaces with React and TypeScript." },
  { icon: FiPenTool, title: "UX/UI Designer", text: "Designing layouts, flows and prototypes in Figma before writing code." },
  { icon: FiLayers, title: "Insight Designer", text: "Turning user feedback and data into clear design decisions." },
];

export default function Spec() {
  return (
    <Layout>
      <h2 className="title">My <span className="accent">Specializations</span></h2>
      <div className="stack">
        {specs.map(({ icon: Icon, title, text }) => (
          <article key={title} className="spec-card">
            <div>
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </div>
            <Icon className="accent" />
          </article>
        ))}
      </div>
    </Layout>
  );
}
