import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Task Cost Calculator is a convenient online tool for calculating the cost of tasks and projects." />
                <meta name="keywords" content="task calculator, cost calculator, project cost, task management" />
                <meta property="og:title" content="Task Cost Calculator" />
                <meta property="og:description" content="Task Cost Calculator is a convenient tool for calculating task and project costs." />
                <meta property="og:image" content="/assets/images/preview.jpg" />
                <meta property="og:url" content="http://taskcostcalculator.cloud/" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <link rel="icon" href="/favicon.ico" />
                {/* Google Tag Manager */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-CGRKBDWNLT"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CGRKBDWNLT');
            `,
                    }}
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
