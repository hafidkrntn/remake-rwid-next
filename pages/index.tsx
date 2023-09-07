import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Course from "../components/Course";
import Navbar from "../components/Navbar";
import Product from "../components/Product";


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Remote Worker Indonesia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Product />
      <Course />
    </div>
  );
};

export default Home;
