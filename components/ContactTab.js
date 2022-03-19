import React from "react";
import { motion } from "framer-motion";
import { Center, Group, Image, Grid, Card } from "@mantine/core";
import style from "../styles/Tabs.module.css";
import { GrTwitter, GrGithub } from "react-icons/gr";

function Contact() {
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
            duration: 5,
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/mukhtxxr"
              >
                <GrTwitter className={style.contactLogo} />
              </a>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card className={style.card}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/spikeoze"
              >
                <GrGithub className={style.contactLogo} />
              </a>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>
    </motion.div>
  );
}

export default Contact;
