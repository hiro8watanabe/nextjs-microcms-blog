import Head from "next/head";
// import Image from "next/image";
import about from "../styles/About.module.css";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/Utils.module.css"
// import Link from "next/link";
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

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.smallContainer}`}
      >
        <p className={utilStyles.position}>
          業界3年目のコーダーがフロントエンドの学習のため、Next.jsとMicroCMSを使って構築したJamstackブログです。
        </p>
      </section>

      <div className={utilStyles.circle}></div>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.position} ${utilStyles.inner}`}
      >
        <h2>ABOUT</h2>
        <div className={about.textLayout}>
          <h3>自己紹介</h3>
          <p>
            フリーランスで制作会社にjoinさせてもらっているHIROといいます。
            3年ほど前にコーダーとして活動開始。営業から顧客折衝、デザイン、コーディングなど、個人で全行程を行ってきました。
            最近は複数人での開発をしてみたいという想いから、制作会社さんのお仕事をメインに活動中。
            主にWordPress、PHP、JavaScript、mocの修正やディレクション業務を担当しています。
            個人的にはHeadlessCMSやJamstackといった領域に興味があり、業務終了後や休日を利用しNext.jsやReactの学習を進めています。
          </p>
        </div>
      </section>
    </Layout>
  );
}
