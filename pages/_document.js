import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta property="og:title" content="Dentiste Tunisie" />
        <meta property="og:type" content="cabinet dentiste en tunisie" />
        <meta property="og:url" content="https://tunisie-dentiste.tn/" />
        <meta property="og:image" content="https://tunisie-dentiste.tn/_next/image?url=%2Fimg%2Flogo%20asma2.png&w=1920&q=75" />
        <meta property="og:site_name" content="Tunisie Dentiste" />
        <meta property="og:description"
           content="cabinet dentiste tunisie vous aide a trouver un cabient dentiste
            en tunisie et de prendre une consultation qui vous gagantie des traitements dentaires"
           />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
        />

        <meta
          name="description"
          content="cabinet dentiste tunisie vous aide a trouver un cabient dentiste en tunisie et de prendre une consultation qui vous gagantie des traitements dentaires"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
