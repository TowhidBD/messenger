import Head from "next/head";

const Layout = ({children}) => {
  return (
    <div className="messenger">
      <Head>
        <title>Messenger</title>
        <meta name="description" content="A simple messaging applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {children}
    </div>
  );
};

export default Layout;
