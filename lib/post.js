// import path from "path";
// import fs from "fs";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

// const postsDirectory = path.join(process.cwd(), "posts");

// //mdファイルのデータを取り出す
// export function getPostsData() {
//   // const fetchData = await fetch("endpoint")

//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, ""); //ファイル名（id）

//     //マークダウンファイルを文字列として読み取る
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     const matterResult = matter(fileContents);

//     //idとデータを取り出す
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });

//   return allPostsData;
// }

// //getStaticPathでreturnで使うpathを取得する
// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""), //ファイル名（id）
//       },
//     };
//   });
//   /*

//   getStaticPathはオブジェクトで返す
//     [
//       {
//         prams:{
//           id:"ssg-ssr"
//         }
//       },
//       {
//         params:{
//           id:"next-react"
//         }
//       }
//     ]
//     詳細は下記公式へ
//     https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
//    */
// }

// //idに基づいてブログ投稿データを返す関数
// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContent = fs.readFileSync(fullPath, "utf8");

//   const matterResult = matter(fileContent);
//   const blogContent = await remark().use(html).process(matterResult.content);

//   const blogContentHTML = blogContent.toString();

//   return {
//     id,
//     blogContentHTML,
//     ...matterResult.data,
//   };
// }
