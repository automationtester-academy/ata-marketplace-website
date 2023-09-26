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
    data-testid="footer"
      component="footer"
      sx={{
        backgroundColor: "#ECF9FC;",
        mt: 15,
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom data-test="p-apropos" data-testid="p-apropos">
              A propos
            </Typography>
            <Typography variant="body2" color="text.secondary" data-test="p-desc" data-testid="p-desc">
            Automation Tester Academy, office de formation spécialisé en test logiciel.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom data-test="p-contact" data-testid="p-contact">
              Contactez nous!
            </Typography>
            <Typography variant="body2" color="text.secondary" data-test="p-adresse" data-testid="p-adresse">
            14 Rue Beffroy, 92200 Neuilly-sur-Seine
            </Typography>
            <Typography variant="body2" color="text.secondary" data-test="p-email" data-testid="p-email">
              Email: <a href="mailto:training@automationtesteracademy.com">training@automationtesteracademy.com</a>
            </Typography>
            <Typography variant="body2" color="text.secondary" data-test="p-tele" data-testid="p-tele">
              Phone: <a href="tel:+33757822708" className='tele' style={{color : 'rgb(0 0 0 / 60%)'}}>+33 7 57 82 27 08</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom data-test="p-media" data-testid="p-media">
              Follow Us
            </Typography>
            <Link href="https://www.linkedin.com/company/ata-testing/" color="inherit" data-test="p-linkedin" data-testid="p-linkedin">
              <LinkedIn />
            </Link>
            <Link
            data-test="p-instagram"
            data-testid="p-instagram"
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" data-test="p-twitter" data-testid="p-twitter">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" data-test="p-copyright" data-testid="p-copyright">
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