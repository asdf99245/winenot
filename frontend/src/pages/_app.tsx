import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import { notoSansKR } from '@/utils/fonts';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className={notoSansKR.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
