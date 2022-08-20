module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "next.config.js",
    "**/*.json",
    "node_modules",
    "public",
    "styles",
    ".next",
    "coverage",
    "dist",
    ".turbo",
  ],
};
