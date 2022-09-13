import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
export default function Layout({ pageTitle, children }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <React.Fragment>
      <Head>
        <title>
          {pageTitle
            ? pageTitle + ` | Final Year Project Help`
            : "Final Year Project Help"}
        </title>
      </Head>
      <main>
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
        >
          {children}
        </motion.main>
      </main>
    </React.Fragment>
  );
}


   

   