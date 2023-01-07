import Head from "next/head";
import { Layout } from "src/components/Layout";
import { client } from "lib/client";
// import postStyles from "../../styles/Post.module.css";
import utileStyles from "src/styles/Utils.module.css";
import { formatDate } from "lib/util";
import { load } from "cheerio"; // cheerioの直接参照は非推奨だったため、loadをimport
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

//SSG
export const getStaticProps = async (context) => {
  //urlを取得
  const id = context.params.id;
  //idに対応したブログ記事を取得してくる。こちらはMicroCMSの記述
  const data = await client.get({ endpoint: "blog", contentId: id });

  const richText = load(data.body);
  richText("pre code").each((_, elm) => {
    const result = hljs.highlightAuto(richText(elm).text());
    richText(elm).html(result.value);
    richText(elm).addClass("hljs");
  });

  return {
    props: {
      blog: data,
      highlightedBody: richText.html(),
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

export default function BlogId({ blog, highlightedBody }) {
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
        <div dangerouslySetInnerHTML={{ __html: highlightedBody }} />
      </article>
    </Layout>
  );
}
