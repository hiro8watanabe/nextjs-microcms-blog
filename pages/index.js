import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";
import { getPostsData } from "../lib/post";

//ssgの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  // console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// //ssrの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyle.headingMd} ${utilStyle.smallContainer}`}>
        <p className={utilStyle.position}>
          そろそろフロントエンドエンジニアになりたいコーダー3年目が、Next.jsのSSGを使って構築したブログです。
        </p>
      </section>

      <div className={utilStyle.circle}></div>
      <section
        className={`${utilStyle.headingMd} ${utilStyle.padding1px} ${utilStyle.position}`}
      >
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <Image
                  src={`${thumbnail}`}
                  className={styles.thumbnailImage}
                  width={640}
                  height={426}
                  objectFit="cover"
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
