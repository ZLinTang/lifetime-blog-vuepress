export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"主页\",\"heroText\":\"旅 途 的 风 景\",\"tagline\":\"Never give up, be grateful\",\"heroFullScreen\":false,\"bgImage\":\"/bg2.jpg\",\"bgImageStyle\":{\"height\":\"600px\"},\"footer\":\"customize your footer text\",\"summary\":\".blog-hero .mask::after{ opacity: 0; } .theme-container .page.blog { padding-top: 0px; } .navbar { height: 50px; / line-height: 0px; / } .navbar .logo { height: 30px; margin-top: 5\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"向日葵的旅行\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.87,\"words\":260},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
