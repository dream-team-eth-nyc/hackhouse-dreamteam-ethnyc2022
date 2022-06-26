import Head from "react-helmet";
import React from "react";

export const siteTitle = "DreamTeamSite";

type LayoutProps = {
  title?: string;
  content?: string;
  children?: any;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "GuildJoinSoulbound",
  content = "DreamTeamGuildStuff",
}) => {
  return (
    <>
      <Head>
        {/* need to include this link to prevent large icon lazy loading with ssr */}
        <link
          href="https://use.fontawesome.com/releases/v5.15.4/css/svg-with-js.css"
          rel="stylesheet"
        ></link>

        <title>{title}</title>
        <meta name="description" content={content} />

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="UTF-8" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
