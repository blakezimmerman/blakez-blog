import merge from "deepmerge";
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors";

const primary = `#e03131`;
const primaryLight = `#ef9898`;
const background = `#282c35`;
const backgroundLight = `#373c49`;

export default merge(defaultThemeColors, {
  text: background,
  primary: primary,
  heading: background,
  modes: {
    dark: {
      background: background,
      primary: primaryLight,
      highlight: backgroundLight,
    },
  },
});
