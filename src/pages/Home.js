import React from 'react';
import {Container, Grid, Typography} from "@mui/material";

import TourCard from "../components/TourCard";
import cities from "../data.json";

const Home = () => {
  return (
    <div>
      <Container sx={{ marginY: 5 }}>

        {cities.map((city, index) => (
          <div key={index}>
            <Typography
              variant={'h4'}
              component={'h2'}
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </div>
        ) )}
      </Container>
    </div>
  );
};

export default Home;
