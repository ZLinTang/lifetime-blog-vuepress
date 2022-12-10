import { navbar } from "vuepress-theme-hope";

export const myNavbar = navbar([
  "/",
  { text: "归档", icon: "note", link: "/archive/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/article/",
    children: [

    ],
  },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "edit", link: "1" },
  //         "2",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //       ],
  //     },
  //     { text: "樱桃", icon: "edit", link: "cherry" },
  //     { text: "火龙果", icon: "edit", link: "dragonfruit" },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
  { text: "生活", icon: "result", link: "/life/" },
  { text: "旅程", icon: "sitemap", link: "/journey/" },
  { text: "理财", icon: "proxy", link: "/finance/" },
  { text: "友链", icon: "proxy", link: "/friend/" }
]);
