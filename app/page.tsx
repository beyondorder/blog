'use client'


import {useRouter} from "next/navigation";
import {useEffect} from "react";

const Home = () => {
  const router = useRouter();
  router.push('/About');
  return <></>
}

export default Home;
