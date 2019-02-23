// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/404.js")),
  "component---src-pages-buhurt-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/buhurt.js")),
  "component---src-pages-events-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/events.js")),
  "component---src-pages-help-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/help.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/index.js")),
  "component---src-pages-northshore-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/northshore.js")),
  "component---src-pages-nz-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/nz.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/page-2.js")),
  "component---src-pages-world-js": preferDefault(require("/Users/benoit/perso/workspace/northshore-buhurt/src/pages/world.js"))
}

