import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  host: '0.0.0.0',
  port: 8899,

  locales: {
    "/": {
      lang: "zh-CN",
      // title: "向日葵的旅行",
      title: "漫谈大数据",
      description: "ZLin的个人博客",
    },
  },

  theme,

  shouldPrefetch: false,

  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],

  templateDev: path.resolve(__dirname, './templateBuild.html'),

});