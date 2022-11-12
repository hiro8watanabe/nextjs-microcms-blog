import Head from "next/head";
import Layout from "../../components/Layout";
import { client } from "../../lib/client";
import utileStyles from "../../styles/utils.module.css";
import { formatDate } from "../../lib/util";

//SSG
export const getStaticProps = async (context) => {
  //urlを取得
  const id = context.params.id;
  //idに対応したブログ記事を取得してくる。こちらはMicroCMSの記述
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  return (
    // <main>
    //   <h1>{blog.title}</h1>
    //   <p>{blog.publishedAt}</p>
    //   <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
    // </main>

    <Layout>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className={utileStyles.circle}></div>
      <article className={`${utileStyles.position} ${utileStyles.inner}`}>
        <h1 className={utileStyles.headingXl}>{blog.title}</h1>
        <p className={utileStyles.lightText}>{formatDate(blog.publishedAt)}</p>
        <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
      </article>
    </Layout>
  );
}
