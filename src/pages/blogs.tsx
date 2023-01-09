import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";
import utilStyles from "../styles/Utils.module.css";
import Link from "next/link";
// import { getPostsData } from "lib/post";
import { client } from "lib/client";
import { formatDate } from "lib/util";

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

export default function Blog({ blog }) {
  return (
    <Layout blogs>
      <Head>
        <title>Blog | PENGIN CODE</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width ,viewport-fit=cover"
        />
        <meta name="description" content="ブログアーカイブページです" />
        <link
          rel="canonical"
          href="https://nextjs-microcms-blog-olive.vercel.app/blogs"
        />
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
        <h2>ブログ一覧</h2>
        <div className={styles.grid}>
          {blog.map((blog) => (
            <article key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a
                  className={`${utilStyles.boldText} ${utilStyles.inlineBlock}`}
                >
                  <Image
                    src={blog.thumbnail.url}
                    className={styles.thumbnailImage}
                    width={950}
                    height={534}
                    priority={true}
                    objectFit="cover"
                    alt={blog.title}
                  />

                  {blog.title}
                  <br />
                  <small className={utilStyles.lightText}>
                    {formatDate(blog.publishedAt)}
                  </small>
                </a>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
