import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
    data-test="footer"
      component="footer"
      sx={{
        backgroundColor: "#E7F9F6",
        mt: 15,
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom data-test="p-apropos">
              A propos
            </Typography>
            <Typography variant="body2" color="text.secondary" data-test="p-desc">
            Automation Tester Academy, office de formation spécialisé en test logiciel.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom data-test="p-contact">
              Contactez nous!
            </Typography>
            <Typography variant="body2" color="text.secondary" data-test="p-adresse">
            14 Rue Beffroy, 92200 Neuilly-sur-Seine
            </Typography>
            <Typography variant="body2" color="text.secondary" data-test="p-email">
              Email: training@automationtesteracademy.com
            </Typography>
            <Typography variant="body2" color="text.secondary" data-test="p-tele">
              Phone: +33 7 57 82 27 08
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom data-test="p-media">
              Follow Us
            </Typography>
            <Link href="https://www.linkedin.com/company/ata-testing/" color="inherit" data-test="p-linkedin">
              <LinkedIn />
            </Link>
            <Link
            data-test="p-instagram"
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" data-test="p-twitter">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" data-test="p-copyright">
            {"Copyright © "}
            <Link color="inherit" href="https://www.automationtesteracademy.com/">
              Automation Tester Academy
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}