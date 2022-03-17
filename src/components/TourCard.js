import React from 'react';
import {createTheme, ThemeProvider, Paper, Grid, Typography, Box, Rating} from '@mui/material';
import {AccessTime} from '@mui/icons-material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 13,
          }
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 11,
          }
        }
      ]
    }
  }
})

const TourCard = ({tour}) => {
  const {name, duration, rating, numberOfReviews, price, image} = tour;

  return (
    <Grid item xs={3}>

      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src={image}
            alt={name}
            className={'img'}
          />
          <Box paddingX={1}>
            <Typography variant={'subtitle1'}>
              {name}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '5px',
              }}
            >
              <AccessTime sx={{fontSize: '16px'}}/>
              <Typography variant={'body3'} component={'p'}>
                {duration} hours
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '5px',
                marginTop: '20px'
              }}
            >
              <Rating name={'read-only'} value={rating} precision={0.1} size={'small'} readOnly/>

              <Typography variant={'body2'} component={'p'} marginLeft={0.5}>
                {rating}
              </Typography>

              <Typography variant={'body2'} component={'p'} marginLeft={1.5}>
                ({numberOfReviews} reviews)
              </Typography>
            </Box>

            <Box marginTop={1.5}>
              <Typography variant={'body1'} component={'h3'}>
                {price} $
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
