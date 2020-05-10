import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

// eslint-disable-next-line react/prop-types
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return 'Loading...';
  return (
    <div className={styles.root}>
      <Grid container direction='row' justify='space-between' alignItems='center'>
        <Grid
          item
          component={Card}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className={cx(styles.card, styles.active)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Active Cases
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value - recovered.value - deaths.value}
                duration={2}
                separator='.'
              />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={2} separator='.' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={2} separator='.' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Total Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={2} separator='.' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
