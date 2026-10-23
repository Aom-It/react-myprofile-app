import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <p className="muted">Let's Work <span className="accent">Together !</span></p>
      <h1 className="headline">
        Hi From <span className="accent">Witsanu</span>, Interactive Designer &amp; Fullstack Web Developer
      </h1>
      <p className="body">
        I build clean, responsive websites that blend visual design with the power of code, from the first
        Figma frame to the deployed product.
      </p>
      <div className="stats">
        <div><strong className="accent">3+</strong><span>Years of Experience</span></div>
        <div><strong className="accent">10+</strong><span>Projects Completed</span></div>
      </div>
    </Layout>
  );
}
