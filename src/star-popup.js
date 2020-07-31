import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Stars from './stars';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function MouseOverPopover({children}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

	const handleClick = (event) => {
		setAnchorEl(open ? null : event.currentTarget);
	};

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Button onClick={handleClick}>{ children }</Button>
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography><Stars count={1} /> for creating a project</Typography>
        <Typography><Stars count={2} /> for a description</Typography>
        <Typography><Stars count={3} /> for a picture</Typography>
        <Typography><Stars count={4} /> for answering questions</Typography>
        <Typography><Stars count={5} /> for sharing or upgrading</Typography>
      </Popover>
    </div>
  );
}
