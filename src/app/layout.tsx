import './root.css';
import { DM_Mono } from '@next/font/google';
import localFont from '@next/font/local';

const sans = localFont({ src: [{ path: './fonts/wotfard/wotfard-medium-webfont.woff2', weight: '500' }] });
const mono = DM_Mono({ weight: '400', variable: '--font-mono', subsets: ['latin'] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link href="/favicon.png" rel="shortcut icon" />
        <title>Really Bad Players</title>
      </head>
      <body className={`${sans.className} ${mono.variable}`}>
        <div className="background" />
        {props.children}
      </body>
    </html>
  );
}
