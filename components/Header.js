import React, { useState } from "react";
import style from "../styles/Header.module.css";
import { Center, Group } from "@mantine/core";
import { motion } from "framer-motion";
import { useGlobalContext } from "./context";

function Header() {
  const links = [
    { id: 1, name: "home" },
    { id: 2, name: "about me" },
    { id: 3, name: "projects" },
    { id: 4, name: "contact" },
  ];

  const [Clicked, setClicked] = useState(false);
  const [Active, setActive] = useState("home");
  const { open, Aboutme, Project, Contact } = useGlobalContext();
  const trasition = { type: "spring", duration: 0.2, bounce: 0.6 };
  const hover = { scale: 1.8 };
  const marginTop = "5rem";

  const handleClick = (id) => {
    if (id === "1") {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

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
        animate={{
          x: [-30, 0],
          opacity: [0, 1],
        }}
        transition={{duration: 1}}
      >
        {links.map((link) => {
          const { id, name } = link;
          return (
            <motion.div
              transition={trasition}
              whileHover={Active !== name ? hover : { scale: 1 }}
              onClick={(e) => {
                handleClick(e.target.id);
                open(e.target.id);
                setActive(name);
              }}
              className={style.links}
              key={id}
            >
              <p id={id} className={Active === name ? `${style.active}` : ""}>
                {name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Group>
  );
}

export default Header;
