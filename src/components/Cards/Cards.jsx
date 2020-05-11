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
      <Grid container spacing={3} justify='center'>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.active, styles.card)}>
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
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.recovered, styles.card)}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Recovered
              </Typography>
              <Typography variant='h5'>
                <CountUp start={0} end={recovered.value} duration={2} separator='.' />
              </Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.deaths, styles.card)}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Deaths
              </Typography>
              <Typography variant='h5'>
                <CountUp start={0} end={deaths.value} duration={2} separator='.' />
              </Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.infected, styles.card)}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Total Infected
              </Typography>
              <Typography variant='h5'>
                <CountUp start={0} end={confirmed.value} duration={2} separator='.' />
              </Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
