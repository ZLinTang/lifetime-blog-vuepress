import { sidebar } from "vuepress-theme-hope";

export const mySidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
      collapsible: true,
    },
  ],
  // "/archive/": "structure",
  "/archive/": [
    {
      text: "大数据组件",
      icon: "note",
      prefix: "bigdata-components/",
      collapsible: true,
      children: [
        {
          text: "Hadoop",
          icon: "emmet",
          prefix: "Hadoop/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Kafka",
          icon: "emmet",
          prefix: "Kafka/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    "bigdata-components/",
    "编程语言",
  ]
});
