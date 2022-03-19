import React from "react";
import Header from "./Header";
import { MantineProvider, Container } from "@mantine/core";

function Layout({ children }) {
  return (
    <MantineProvider
      defaultProps={{
        Container: {
          sizes: {
            xs: 540,
            sm: 720,
            md: 960,
            lg: 1140,
            xl: 1320,
          },
        },
      }}
    >
      <Container size="md">
        <Header />
        {children}
      </Container>
    </MantineProvider>
  );
}

export default Layout;

