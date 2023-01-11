import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Two Forms of Pre-rendering</h1>
      <p>January 09, 2023</p>
      <p>
        Next.js has two forms of pre-rendering:{" "}
        <span style={{ fontWeight: "800" }}>Static Generation</span> and{" "}
        <span style={{ fontWeight: "800" }}>Server-side Rendering.</span>
        The difference is in <span style={{ fontWeight: "800" }}>when</span> it
        generates the HTML for a page.
      </p>
      <ul>
        <li>
          <span style={{ fontWeight: "800" }}>Static Generation </span>is the
          pre-rendering method that generates the HTML at{" "}
          <span style={{ fontWeight: "800" }}>build time.</span>
          The pre-rendered HTML is then reused on each request.
        </li>
        <li>
          <span style={{ fontWeight: "800" }}>Server-side Rendering</span> is
          the pre-rendering method that generates the HTML on{" "}
          <span style={{ fontWeight: "800" }}>each request.</span>
        </li>
        <li>E-commerce product listings</li>
      </ul>
      <p>
        Importantly, Next.js lets you{" "}
        <span style={{ fontWeight: "800" }}>choose</span> which pre-rendering
        form to use for each page. You can create a "hybrid" Next.js app by
        using Static Generation for most pages and using Server-side Rendering
        for others.
      </p>
    </Layout>
  );
}
