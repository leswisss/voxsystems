import React from "react";
import Head from "next/head";
import { ServicesPage } from "@/components";

const Services = () => {
  return (
    <><Head>
    <title>SYSTEMS - Nos Services</title>
    <meta property="og:title" content="SYSTEMS - Nos Services" key="title" />
  </Head>
      <ServicesPage />
    </>
  );
};

export default Services;
