import Document, { Html, Head, Main, NextScript } from "next/document";

export class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr" style={{ scrollBehavior: "smooth" }}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />

          <meta
            name="description"
            content="Je suis Robin Blanquart. Jeune développeur passionné par le développement web et l’Ui/Ux Design."
          ></meta>
          <meta name="title" content="Robin Blanquart - Portfolio 2022" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:locale" content="fr_FR" />
          <meta
            property="og:title"
            content="Robin Blanquart - Portfolio 2022"
          />
          <meta
            property="og:description"
            content="Je suis Robin Blanquart. Jeune développeur passionné par le développement web et l’Ui/Ux Design."
          />
          <meta property="og:site_name" content="Portfolio 2022" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/e-tech-test/image/upload/v1654684607/OG-min_n61lip.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="" />
          <meta
            property="twitter:title"
            content="Robin Blanquart - Portfolio 2022"
          />
          <meta
            property="twitter:description"
            content="Je suis Robin Blanquart. Jeune développeur passionné par le développement web et l’Ui/Ux Design."
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/e-tech-test/image/upload/v1654684607/OG-min_n61lip.png"
          ></meta>

          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#e42503"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#393D46"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
