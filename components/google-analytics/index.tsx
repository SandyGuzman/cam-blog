import Script from 'next/script'

export const GoogleAnalytics = () => {
  return (
    <>
      <Script strategy="lazyOnload" src={ `https://www.googletagmanager.com/gtag/js?id=${ process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS }` }/>
      <Script id="google-analytics" strategy="lazyOnload">
      { `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-782230YN0J');
      ` }
    </Script>
    </>
  )
}