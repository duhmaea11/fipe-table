import Head from 'next/head';
import React from 'react';

const AppHead: React.FC<{title: string}>= ({title}) => {
  return (
    <Head>
        <title>Tabela Fipe - {title} </title>
    </Head>
  )
}

export default AppHead;
