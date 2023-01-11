import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";
import { Layout } from "src/components/Layout";
import utilStyles from "src/styles/Utils.module.css";
import Link from "next/link";
import { Form } from "src/components/Form/Form";
// import { getPostsData } from "../lib/post";
// import { client } from "../lib/client";
// import { formatDate } from "../lib/util";

//ssgの場合
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blog" });

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | PENGIN CODE</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta name="description" content="Contactページです" />
        <link
          rel="canonical"
          href="https://nextjs-microcms-blog-olive.vercel.app/contact"
        />
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.smallContainer}`}
      ></section>

      <div className={utilStyles.circle}></div>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.position}`}
      >
        <h2>Contact</h2>
        <p className={utilStyles.position}>
          制作・相談などの各種お問い合わせはこちらから。
        </p>

        <Form />

        {/* <p className={`${utilStyles.heading4Xl} ${utilStyles.heightL}`}>
          Coming Soon!
        </p> */}
      </section>
    </Layout>
  );
}
