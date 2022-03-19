import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useReducer } from "react";
import { useGlobalContext } from "../components/context";
import AboutMe from "../components/AboutMe";
import ContactTab from "../components/ContactTab";
import Projects from "../components/Projects";

export default function Home() {
  const { Aboutme, Project, Contact } = useGlobalContext();
  return (
    <>
      {Aboutme && <AboutMe />}
      {Contact && <ContactTab />}
      {Project && <Projects />}
    </>
  );
}
