import { AppProps } from 'next/app';

import Cursor from '~/components/Cursor';
import CursorContextProvider from '~/context/CursorContextProvider';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CursorContextProvider>
      <Cursor />
      <Component {...pageProps} />
    </CursorContextProvider>
  );
}
