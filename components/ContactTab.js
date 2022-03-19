import React from "react";
import { motion } from "framer-motion";
import { Center, Group, Image, Grid, Card } from "@mantine/core";
import style from "../styles/Tabs.module.css";
import { GrTwitter, GrGithub } from "react-icons/gr";

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
            src="/images/phone.png"
            alt="logo"
            style={{ transform: "scale(0.4)", marginTop: "-8rem" }}
          />
        </motion.div>
        <Grid className={style.contactGrid} gutter="xl">
          <Grid.Col span={6}>
            <Card className={style.card}>
              <a target="_blank" href="https://twitter.com/mukhtxxr">
                <GrTwitter className={style.contactLogo} />
              </a>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card className={style.card}>
              <a target="_blank" href="https://github.com/spikeoze">
                <GrGithub className={style.contactLogo} />
              </a>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>
    </div>
  );
}

export default AboutMe;
