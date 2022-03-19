import React from "react";
import { motion } from "framer-motion";
import { Center, Group, Image } from "@mantine/core";
import style from "../styles/About.module.css";

function AboutMe() {
  return (
    <div className={style.container}>
      <Group position="center" direction="column" className={style.group}>
        <motion.div
          animate={{
            x: [null, 10, -8, 10],
            rotate: [5, -5, 5, -5],
            y: [null, 5, 6],
          }}
          transition={{
            type: "spring",
            duration: 2,

            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/images/tony.png"
            alt="logo"
            style={{ transform: "scale(0.4)", marginTop: "-5rem" }}
          />
        </motion.div>
        <h2>
          Hey, I'm <span className={style.mukhtar}>Mukhtar</span> 👋
        </h2>

        <p>
          I am a full stack web developer currently studying Information
          Technology at Simad University.
        </p>
        <p>
          I work with javaScript, CSS and the MERN, PERN Stacks, And external
          libraries like Mantaine, Framer Motion, etc.
        </p>
      </Group>
    </div>
  );
}

export default AboutMe;
