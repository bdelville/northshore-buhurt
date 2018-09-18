// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/media/data/workspace/web/northshore-buhurt/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/media/data/workspace/web/northshore-buhurt/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/media/data/workspace/web/northshore-buhurt/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/media/data/workspace/web/northshore-buhurt/src/pages/page-2.js"))
}

