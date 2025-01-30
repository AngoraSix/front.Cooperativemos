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
        <script
          id="gtm-script-head"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${config.thirdParties.googleTagManager.id}');`
          }}
        />

        {/* Google tag (gtag.js) for Ads */}
        <script
          id="gtm-ads-script-1"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.thirdParties.googleTagManager.id}`}
        ></script>
        <script
          id="gtm-ads-script-2"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${config.thirdParties.googleTagManager.id}');`
          }}
        />

        {/* Event snippet for Submit lead form (2) conversion page
        In your html page, add the snippet and call gtag_report_conversion when
        someone clicks on the chosen link or button. */}
        <script
          id="ads-script-conversion-form-submit"
          dangerouslySetInnerHTML={{
            __html: `function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': '${config.thirdParties.googleAnalytics.id}/d2NaCISZ5JYaEImp6d0-',
                    'event_callback': callback
                });
                return false;
              }`
          }}
        />

        {/* Google tag */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.thirdParties.googleAnalytics.id}`}
        ></script>
        <script
          id="ga-script"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
    
            gtag('config', '${config.thirdParties.googleAnalytics.id}');`
          }}
        />
        {/* Google reCaptcha */}
        <script
          async
          defer
          src={`https://www.google.com/recaptcha/api.js?render=${config.thirdParties.googleRecaptcha.key}`}
        ></script>
      </Head>
      <body>
        {/* Google Tag Manager - Script (BODY - noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${config.thirdParties.googleTagManager.id}`}
            height="0" width="0" style={{
              display: "none",
              visibility: "hidden",
            }}></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
