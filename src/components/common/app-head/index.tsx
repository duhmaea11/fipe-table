import Head from "next/head";
import React from "react";

const AppHead: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title} </title>
    </Head>
  );
};

export default AppHead;
