import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { AppProps } from 'next/app';
import '../styles/globals.css';

interface Props extends AppProps {
  pageProps: {
    session: Session;
  };
}

const App: React.FC<Props> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
