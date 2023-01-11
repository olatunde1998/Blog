import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <span style={{fontWeight: "800"}}>Rasheed</span>. I’m a software engineer and a UI/UX
          designer. You can contact me on <Link href="https://www.twitter.com/geodevinstitute">Twitter.</Link> 
        </p>
        <p style={{fontWeight: "800"}}>Blog</p>
        <Link href="/posts/first-post"><p>When to Use Static Generation v.s. Server-side Rendering</p></Link>
        <p>January 10, 2023</p>
        <Link href="/posts/second-post"><p>Two Forms of Pre-rendering</p></Link>
        <p>January 09, 2023</p>
      </section>
    </Layout>
  );
}
