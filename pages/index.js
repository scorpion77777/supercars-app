import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getCommerce from "../utils/commerce";
import { useState } from "react";
import { Navbar } from "../components/Navbar";

export default function Home(props) {
  const [search, setSearch] = useState("");

  console.log(setSearch);

  const { products } = props;
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
      </div>
      <div className="flex justify-center mt-8 md:justify-center">
        <div className="mb-3 xl:w-96 ">
          <div className="input-group relative flex flex-row p-4 space-x-4 items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white bg-black bg-clip-padding border-1 border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-700 focus:border-gray-600 focus:outline-none"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div />

            <button
              className="btn justify-between text-gray-500 font-medium text-xs leading-tight uppercase rounded shadow-md   focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 md:text-sm mt-8">
          {products
            .filter((val) => {
              if (setSearch === "") {
                return val;
              } else if (val.name.toLowerCase().includes(search)) {
                return val;
              }
            })
            .map((product) => {
              return (
                <div
                  className="flex flex-col justify-between md:container mx-auto px-4 py-4 align-middle items-center"
                  key={products.id}
                >
                  <img
                    className="border-3 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer shadow-4xl shadow-black"
                    src={product.image.url}
                    alt={product.name}
                    height={550}
                    width={550}
                  />

                  <p className="text-white text-xl mt-4 p-4">{product.name}</p>
                  <span className="text-white items-center text-left text-xl md:text-sm"></span>
                  <p className="text-white text-2xl">
                    {product.price.formatted_with_symbol}
                  </p>
                  <p className="text-white">{product.variant}</p>
                </div>
              );
            })}
        </main>

        <footer className={styles.footer}>
          <a
            className="text-white"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}
