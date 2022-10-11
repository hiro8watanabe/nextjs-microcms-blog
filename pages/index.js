import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getPostsData } from "../lib/post";
import { client } from "../lib/client";
import { formatDate } from "../lib/util";

//ssgの場合
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

// //ssrの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ blog }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.smallContainer}`}
      >
        <p className={utilStyles.position}>
          業界3年目のコーダーがフロントエンドの学習のため、Next.jsのSSGとMicroCMSを使って構築したJamstackブログです。
        </p>
      </section>

      <div className={utilStyles.circle}></div>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.position}`}
      >
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {blog.map((blog) => (
            <article key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <Image
                  src={blog.thumbnail.url}
                  className={styles.thumbnailImage}
                  width={640}
                  height={426}
                  objectFit="cover"
                />
              </Link>
              <Link href={`/blog/${blog.id}`}>
                <a
                  className={`${utilStyles.boldText} ${utilStyles.inlineBlock}`}
                >
                  {blog.title}
                </a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {formatDate(blog.publishedAt)}
              </small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
