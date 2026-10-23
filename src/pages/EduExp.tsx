import Layout from "../components/Layout";

const items = [
  { year: "2024 - Present", title: "UX/UI Designer", place: "Freelance" },
  { year: "2022 - 2024", title: "Fullstack Web Developer", place: "Company name" },
  { year: "2019 - 2023", title: "Bachelor Degree in Technology Digital and Innovation", place: "southeast asia university" },
  { year: "2016 - 2019", title: "High school", place: "โรงเรียนราชวินิตบางแคปานขำ " },
];

export default function EduExp() {
  return (
    <Layout>
      <h2 className="title">Education &amp; <span className="accent">Experience</span></h2>
      <ul className="timeline">
        {items.map((i) => (
          <li key={i.title}>
            <small className="accent">{i.year}</small>
            <strong>{i.title}</strong>
            <span className="muted">{i.place}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
