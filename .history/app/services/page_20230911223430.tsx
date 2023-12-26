"use client";

import { useEffect, useState } from "react";
import { ServicesPage, Preloader } from "@/components";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading2(false)
    }, 1500)    

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <Preloader state2={loading2} state={loading}/>
      <ServicesPage setState={setLoading} state={loading2} state2={}/>
    </>
  );
};

export default Services;
