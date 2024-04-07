import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { PropsWithChildren } from 'react';

import './globals.css';

const wantedSansVariable = localFont({
  src: '../public/fonts/WantedSansVariable.woff2',
  display: 'swap',
});

const metadata: Metadata = {
  title: '우테코 따라잡기',
  description: '우테코 따라잡기',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <body className={wantedSansVariable.className}>{children}</body>
    </html>
  );
};

export { metadata };
export default RootLayout;
