import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import Header from './components/Header';

const Page: FC<PropsWithChildren<PageConfig>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Idealtechno` : 'Idealtechno'}</title>
      </Head>
      <Header />
      <div className="relative w-full">{children}</div>
    </>
  );
};

export default Page;
