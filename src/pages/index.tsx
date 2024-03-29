import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";
import { Layout } from "src/components/Layout";
import utilStyles from "src/styles/Utils.module.css";
import Link from "next/link";
import { client } from "lib/client";
import { formatDate } from "lib/util";
import { PageLoading } from "src/components/Loading/PageLoading";
import { useCallback, useEffect, useState } from "react";

//ssgの場合
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

//ssrの場合
// export const getServerSideProps = async () => {
//   const data = await client.get({ endpoint: "blog" });
//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };

export default function Home({ blog }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    !sessionStorage.getItem("visited")
      ? setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("visited", "first");
        }, 3000)
      : setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <Layout home>
          <Head>
            <title>
              PENGIN CODE | Next.jsとMicroCMSを使用したJamstackブログ
            </title>
            {/* <title>{siteTitle}</title> */}
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width, viewport-fit=cover"
            />
            <meta
              name="description"
              content="業界4年目のコーダーがフロントエンドの学習のため、Next.jsのSGとMicroCMSを使って構築したJamstackブログ"
            />
            <link
              rel="canonical"
              href="https://nextjs-microcms-blog-olive.vercel.app/"
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
            className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.position}`}
          >
            <h2>新着記事一覧</h2>
            <div className={styles.grid}>
              {blog.map((blog) => (
                <article key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <a
                      className={`${styles.moveImg} ${utilStyles.boldText} ${utilStyles.inlineBlock}`}
                    >
                      <Image
                        src={blog.thumbnail.url}
                        className={styles.thumbnailImage}
                        width={950}
                        height={534}
                        priority={true}
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={blog.thumbnail.url}
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
      )}
    </>
  );
}
