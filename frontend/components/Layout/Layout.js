import Head from 'next/head'

export const siteTitle = "DreamTeamSite"

const Layout = ({ children, title, content }) => {

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

      <main>
        {children}
      </main>

    </>
  )
}

Layout.defaultProps = {
  title: "GuildJoinSoulbound",
  description: "DreamTeamGuildStuff",
};

export default Layout