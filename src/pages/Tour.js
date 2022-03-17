import React from 'react';
import {BottomNavigation, Box, Container, Paper, Typography} from '@mui/material';

import CustomImageList from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <div>
      <Container sx={{width: 900}}>
        <Typography variant={'h3'} component={'h1'} marginTop={3}>
          Explore the World in Vegas
        </Typography>

        <Box marginTop={3} sx={{display: 'flex'}}>
          <img
            src="https://media.istockphoto.com/photos/las-vegas-picture-id822252828?b=1&k=20&m=822252828&s=170667a&w=0&h=MS6MKVOPaNG1mm4AR387IW1JEqvWW4WKBKaUnFF6eu4="
            alt="Vegas"
            height={325}
          />
          <CustomImageList/>
        </Box>

        <Box>
          <Typography variant={'h6'} component={'h4'} marginTop={3}>
            About this ticket
          </Typography>

          <Typography variant={'paragraph'} component={'p'} marginTop={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, deserunt dicta dignissimos dolor
            dolorem exercitationem inventore ipsa obcaecati perspiciatis qui quibusdam quisquam tenetur, veniam,
            voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto itaque maiores ratione
            recusandae soluta vel.
          </Typography>
        </Box>

        <Box marginBottom={2}>
          <Typography variant={'h6'} component={'h4'} marginTop={3} marginBottom={2}>
            Frequently asked questions
          </Typography>
        </Box>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }} elevation={3}>
          <BottomNavigation sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BasicModal />
          </BottomNavigation>
        </Paper>

        <Box marginBottom={7}>
          <CustomizedAccordions/>
        </Box>
      </Container>
    </div>
  );
};

export default Tour;
