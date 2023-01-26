import Layout from '@/components/Layout';
import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import { notoSansKR } from '@/utils/fonts';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';
import Drawer from '@/components/Drawer';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className={notoSansKR.className}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Drawer />
        </SessionProvider>
      </div>
    </ThemeProvider>
  );
}
