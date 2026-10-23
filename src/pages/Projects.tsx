import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout>
      <h2 className="title">Featured <span className="accent">Projects</span></h2>
      <article className="project">
        <h3>Manage Task App - fullstack web development</h3>
        <p className="muted">
          A task management app with registration, login and per-user task lists.
        </p>
        <div className="project__shot" role="img" aria-label="Project screenshot placeholder">
          Project screenshot
        </div>
      </article>
    </Layout>
  );
}
