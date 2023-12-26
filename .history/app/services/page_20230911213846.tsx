"use client";

import { useEffect, useState } from "react";
import { ServicesPage, Preloader } from "@/components";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  return (
    <>
      <ServicesPage />
    </>
  );
};

export default Services;
