import Layout from "../components/Layout";

export default function AboutMe() {
  return (
    <Layout>
      <h2 className="title">About <span className="accent">Me</span></h2>
      <p className="body">
        I find fulfillment in blending visual design with the power of coding to create meaningful
        experiences. I enjoy turning ideas into interfaces that are simple to use and pleasant to look at.
      </p>
      <p className="body">
        When I'm not building, I'm exploring new tools, studying interaction design, and improving the way
        I move work from design to production.
      </p>
    </Layout>
  );
}
