import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  port: 8888,

  locales: {
    "/": {
      lang: "zh-CN",
      title: "向日葵的旅行",
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