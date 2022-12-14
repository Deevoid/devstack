module.exports = {
  extends: ["next", "airbnb", "airbnb-typescript", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/react-in-jsx-scope": "off",
  },
};
