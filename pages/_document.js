import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
        />
        <meta
          name="description"
          content="cabinet dentiste tunisie vous aide a trouver un cabient dentiste en tunisie et de prendre une consultation qui vous gagantie des traitements dentaires"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tunisie-dentiste.tn" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
