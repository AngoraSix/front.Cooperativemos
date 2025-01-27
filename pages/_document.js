import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import config from '../config';

export default function Document() {
  const head = config.site.head;
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/Lato.css" />
        <meta property="og:title" key="og.title" content={head.title} />
        <meta
          property="og:description"
          key="og.description"
          content={head.description}
        />
        <meta
          property="og:image"
          itemProp="image"
          key="og.image"
          content={head.image.logo}
        />
        <meta property="fb:app_id" key="fb.id" content={head.facebookAppId} />
        {/* Google Tag Manager - Script (HEAD) */}
        <Script id="gtm-script-head">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${config.thirdParties.googleTagManager.id}');`}
        </Script>
      </Head>
      <body>
        {/* Google Tag Manager - Script (BODY - noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${config.thirdParties.googleTagManager.id}`}
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
