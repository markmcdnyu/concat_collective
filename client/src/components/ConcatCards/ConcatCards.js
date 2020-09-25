import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function ConcatCards(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} className='concat' >
      <Card className={classes.root}>
        <CardContent>
          <h4>
            <bold>Concat (collective)</bold> an open space for developers to gather resources and continuously imporove their skillset. Gather, rate,  and consume helpful resources for yourself and your community WELCOME
      </h4>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ConcatCards; 