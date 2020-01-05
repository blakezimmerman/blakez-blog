import React from "react";
import { css, Styled } from "theme-ui";
import Header from "gatsby-theme-blog/src/components/header";
import GlobalStyles from "./global-styles";

export default ({ children, ...props }) => (
  <Styled.root>
    <GlobalStyles />
    <Header {...props} />
    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
);
