const PROXY_CONFIG = {
  "/styles.css": {
    target: "http://localhost:4200",
    secure: false,
    pathRewrite: { "^/styles.css": "/styles.theme.css" }, // rule is ignored
  },
  "/styles.virtual.css": {
    target: "http://localhost:4200",
    secure: false,
    pathRewrite: { "^/styles.virtual.css": "/styles.theme.css" }, // rule works fine
  },
};

module.exports = PROXY_CONFIG;
