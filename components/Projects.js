import React from "react";
import { motion } from "framer-motion";
import { Center, Group, Image, Grid, Card, Text, Button } from "@mantine/core";
import style from "../styles/Tabs.module.css";
import { GrTwitter, GrGithub } from "react-icons/gr";
import { projects } from "../projectsData";

function Projects() {
  return (
    <motion.div
      animate={{
        y: [50, 5],
      }}
      transition={{ ease: "backOut", duration: 0.3 }}
      className={`${style.container} ${style.scroll}`}
    >
      <Group position="center" direction="column" className={style.group}>
        <motion.div
          animate={{
            x: [null, 10, -8, 10],
            rotate: [5, -5, 5, -5],
            y: [null, 5, 6],
          }}
          transition={{
            type: "spring",
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/images/blessings.png"
            alt="logo"
            style={{ transform: "scale(0.6)", marginTop: "-1.5rem" }}
          />
        </motion.div>
      </Group>

      <Group position="center" direction="column">
        {projects.map((project) => {
          const { id, name, description, link, img } = project;
          return (
            <Card p="lg" className={style.projecCard} key={id}>
              <Card.Section>
                <Image src={img} height={160} alt="calculator" />
              </Card.Section>

              <Text
                weight={500}
                transform="capitalize"
                style={{ marginTop: 10 }}
              >
                {name}
              </Text>

              <Text>
                <p>{description}</p>
              </Text>
              <a target="_blank" rel="noreferrer" href={link}>
                <Button fullWidth className={style.btn}>
                  View
                </Button>
              </a>
            </Card>
          );
        })}
      </Group>
    </motion.div>
  );
}

export default Projects;
