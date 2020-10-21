import React from 'react';
import '../styles.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiTheme from '../MuiTheme.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { tiledata } from '../plantdata.js';

function Browse() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <div className="app" >
        <GridList cellHeight={300} spacing={10} className='grid-list' cols={3}>
          {tiledata.map((tile) => (
            <GridListTile component="button" className='grid-list' key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </MuiThemeProvider >
  );
}

export default Browse;