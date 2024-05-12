module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    //maps wp block to graphql
    ".node_modules/@wp-block-tools/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
