import type { AppProps } from 'next/app';
import Page from 'components/Page';
import 'styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page {...pageProps.pageConfig}>
      <Component {...pageProps} />
    </Page>
  );
}
