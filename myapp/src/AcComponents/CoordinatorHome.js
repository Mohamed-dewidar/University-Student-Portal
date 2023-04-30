import React, { Component } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
      id: 'Manage Course Slot',
      children: [
        { id: 'Add Course Slot', icon: <AddIcon />, link: "/AddCourseSlot" },
        { id: 'Update Course Slot', icon: <UpdateIcon />, link: "/UpdateCourseSlot" },
        { id: 'Delete Course Slot', icon: <DeleteIcon />, link: "/DeleteCourseSlot" },
      ],
    },
  

    {
      id: 'Handle Requests',
      children: [
        { id: 'View Link Requests', icon: <ViewComfyIcon />, link: "/ViewLinkReq" },
        { id: 'Manage Link Request', icon: <AccessTimeIcon />, link: "/ManageLinkReq" },
        
      ],
    },
  
    {
      id: 'Send Request',
      children: [
        { id: 'Change Dayoff', icon: <MailOutlineIcon />, link: "/ChangeDayoff" },
        { id: 'Leave Request', icon: <MailOutlineIcon />, link: "/LeaveRequest" },
        { id: 'Link Request', icon: <MailOutlineIcon />, link: "/LinkRequest" },
      ],
    },
  
  
    {
      id: 'Schedule',
      children: [
        { id: 'My Schedule', icon: <ViewComfyIcon />, link: "/ViewSchedule" },
       
      ],
    },
  
  ];

 class CoordinatorHome extends Component {


  /*  render() {
        return (
        

           
            <a href="/AddCourseSlot">Insert Course Slots  </a><br/>
            <a href="/UpdateCourseSlot">Update Course Slots</a><br/>
            <a href="/DeleteCourseSlot">Delete Course Slots  </a><br/>
           




   


            </div>

            </div>
        )
    }*/



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
                      Coordinator Home
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

}

export default withStyles(styles)(CoordinatorHome);