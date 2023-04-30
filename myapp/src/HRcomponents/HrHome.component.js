import React, { Component } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ReplayIcon from '@material-ui/icons/Replay';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import guc from '../Images/guc.svg'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../Styles/Content'




const categories = [



  {
    id: 'Manage Location',
    children: [
      { id: 'Add Location', icon: <AddIcon />, link: "/AddLocation" },
      { id: 'Update Location', icon: <UpdateIcon />, link: "/UpdateLocation" },
      { id: 'Delete Location', icon: <DeleteIcon />, link: "/DeleteLocation" },
    ],
  },

  {
    id: 'Manage Faculty',
    children: [
      { id: 'Add Faculty', icon: <AddIcon />, link: "/AddFaculty" },
      { id: 'Update Faculty', icon: <UpdateIcon />, link: "/UpdateFaculty" },
      { id: 'Delete Faculty', icon: <DeleteIcon />, link: "/DeleteFaculty" },
    ],
  },

  {
    id: 'Manage Department',
    children: [
      { id: 'Add Department', icon: <AddIcon />, link: "/AddDepartment" },
      { id: 'Update Department', icon: <UpdateIcon />, link: "/UpdateDepartment" },
      { id: 'Delete Department', icon: <DeleteIcon />, link: "/DeleteDepartment" },
    ],
  },

  {
    id: 'Manage Course',
    children: [
      { id: 'Add Course', icon: <AddIcon />, link: "/AddCourse" },
      { id: 'Update Course', icon: <UpdateIcon />, link: "/UpdateCourse" },
      { id: 'Delete Course', icon: <DeleteIcon />, link: "/DeleteCourse" },
    ],
  },


  {
    id: 'Manage Staff',
    children: [
      { id: 'Add Staff', icon: <AddIcon />, link: "/AddStaff" },
      { id: 'Update Staff', icon: <UpdateIcon />, link: "/UpdateStaff" },
      { id: 'Delete Staff', icon: <DeleteIcon />, link: "/DeleteStaff" },
      { id: 'Update Salary', icon: <UpdateIcon />, link: "/UpdateSalary" },
      { id: 'Staff Attendace', icon: <DnsRoundedIcon />, link: "/StaffAttendace" },
    ],
  },

];







class HrHome extends Component {
  constructor(props) {
    super(props);

  }





  render() {
    const { classes, ...other } = this.props

    return (
      <div>
        <div>
          <Drawer variant="permanent" {...other}>
            <List disablePadding className={classes.list}>

              <ListItem className={clsx(classes.item, classes.itemCategory)}>
                <ListItemIcon className={classes.itemIcon}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}

                >
                  HR Home
          </ListItemText>
              </ListItem>
              {categories.map(({ id, children }) => (
                <React.Fragment key={id}>
                  <ListItem className={classes.categoryHeader}>
                    <ListItemText
                      classes={{
                        primary: classes.categoryHeaderPrimary,
                      }}
                    >
                      {id}
                    </ListItemText>
                  </ListItem>
                  {children.map(({ id: childId, icon, active, link }) => (
                    <ListItem
                      key={childId}
                      button
                      className={clsx(classes.item, active && classes.itemActiveItem)}

                    >
                      <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                      <Button
                        classes={{
                          primary: classes.itemPrimary,
                        }}
                        href={link}
                      >
                        {childId}

                      </Button>

                    </ListItem>
                  ))}

                  <Divider className={classes.divider} />
                </React.Fragment>
              ))}
            </List>
          </Drawer>
        </div>

        <div>
          <Paper className={classes.paper}>
            <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
              <Toolbar>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                  <Grid item>
                    <Button variant="contained" color="primary" href="/Profile" className={classes.addUser}>
                      My Profle
                    </Button>


                    <Button variant="contained" color="primary" href="/UpdateProfile" className={classes.addUser}>
                      Update Profile
                    </Button>

                    <Button variant="contained" color="primary" href="/Attendace" className={classes.addUser}>
                      My Attendace
                     </Button>

                    <Button variant="contained" color="primary" href="/ResetPassword" className={classes.addUser}>
                      Reset Password
                     </Button>
                  </Grid>
                  <Grid item >

                    <CardMedia className={classes.guc} image={guc} />
                  </Grid>
                  <Grid item>



                    <Tooltip title="Logout">
                      <IconButton href="/Logout">
                        <ExitToAppIcon className={classes.icon} />
                      </IconButton>
                    </Tooltip>

                  </Grid>

                </Grid>
              </Toolbar>
            </AppBar>

            <Typography color="textSecondary" align="center">

            </Typography>

          </Paper>
        </div>

        <div>
          <Grid className={classes.gucGrid}>

          </Grid>
        </div>

      </div>
    );
  }

};

HrHome.propTypes = {
  classes: PropTypes.object.isRequired,

}


export default withStyles(styles)(HrHome);

