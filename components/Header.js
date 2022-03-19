import React, { useState } from "react";
import style from "../styles/Header.module.css";
import { Center, Group } from "@mantine/core";
import { motion } from "framer-motion";

function Header() {
  const [Clicked, setClicked] = useState(false);
  const trasition = { type: "spring", duration: 0.3, bounce: 0.6 };
  const hover = { scale: 1.8 };
  const marginTop = "5rem";
  return (
    <Group
      direction="column"
      position="center"
      style={{
        marginTop: Clicked ? "3rem" : "15rem",
      }}
      className={style.groupContainer}
    >
      <motion.div
        transition={trasition}
        whileHover={hover}
        className={style.links}
        onClick={() => setClicked(false)}
      >
        <p>Home</p>
      </motion.div>
      <motion.div
        transition={trasition}
        whileHover={hover}
        className={style.links}
        onClick={() => setClicked(true)}
      >
        <p>About me</p>
      </motion.div>
      <motion.div
        transition={trasition}
        whileHover={hover}
        className={style.links}
        onClick={() => setClicked(true)}
      >
        <p>Projects</p>
      </motion.div>
      <motion.div
        transition={trasition}
        whileHover={hover}
        className={style.links}
        onClick={() => setClicked(true)}
      >
        <p>Contact</p>
      </motion.div>
    </Group>
  );
}

export default Header;
