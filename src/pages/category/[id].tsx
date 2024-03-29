import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Layout } from "../../components/Layout";
import utilStyles from "../../styles/Utils.module.css";
import Link from "next/link";
// import { getPostsData } from "lib/post";
import { client } from "lib/client";
import { formatDate } from "lib/util";
import { GetStaticPaths } from "next/types";

type Array = {
  body: string;
  createdAt: string;
  id: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  description: string;
};

type Props = {
  blog: Array[];
};

//ssgの場合
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  console.log(context);
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};

// 静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map(
    (content: { id: string }) => `/category/${content.id}`
  );
  return {
    paths,
    fallback: false,
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

export default function CategoryId({ blog }: Props) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return (
      <Layout category>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width ,viewport-fit=cover"
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
          <h2>ブログコンテンツがありません</h2>
        </section>
      </Layout>
    );
  }

  // カテゴリーに紐付いたコンテンツがある場合に表示
  return (
    <Layout category>
      <Head>
        <title>{`${blog[0].category.name}記事一覧ページ | PENGIN CODE`}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta
          key={blog[0].id}
          name="description"
          content={`${blog[0].category.name}に関連するカテゴリー記事一覧ページです。`}
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
        <h2>{`${blog[0].category.name}記事一覧`}</h2>
        <div className={styles.grid}>
          {blog.map((blog) => (
            <article key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>
                  <Image
                    src={blog.thumbnail.url}
                    className={styles.thumbnailImage}
                    width={950}
                    height={534}
                    objectFit="cover"
                    alt={blog.title}
                  />
                </a>
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
