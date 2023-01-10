import Head from "next/head";
// import Image from "next/image";
import about from "src/styles/About.module.css";
import { Layout } from "src/components/Layout";
import utilStyles from "src/styles/Utils.module.css";
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
        <title>About | PENGIN CODE</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta name="description" content="Aboutページです" />
        <link
          rel="canonical"
          href="https://nextjs-microcms-blog-olive.vercel.app/about"
        />
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.smallContainer}`}
      >
        <p className={utilStyles.position}>
          業界4年目のコーダーがフロントエンドの学習のため、Next.jsのSGとMicroCMSを使って構築したJamstackブログ。仕事の合間にのんびり機能追加しながら、遭遇したエラーなどの対処法をひっそりと書いています。
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
            フリーランスで制作会社にjoinさせてもらっているPENGINといいます。
          </p>
          <p>
            3年ほど前にコーダーとして活動開始。営業から顧客折衝、デザイン、コーディングなど、個人で全行程を行ってきました。
            最近は複数人での開発をしてみたいという想いから、制作会社さんのお仕事をメインに活動中。
            主にWordPress、PHP、JavaScript、mocの修正やディレクション業務を担当しています。
            HeadlessCMSやJamstackといった領域に興味があり、業務終了後や休日を利用しNext.jsやReactの学習を進めています。
          </p>
          <p>
            趣味は釣り。南米アマゾンやインドの辺境地で釣りしたりしています。好きな魚はアジです。
            <br />
            びっくりしたことは起きたらワニが居たことです。よろしくお願いします。
          </p>
        </div>
      </section>
    </Layout>
  );
}
