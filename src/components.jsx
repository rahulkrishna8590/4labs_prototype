import React, { useEffect, useState } from "react";
import "./component.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SummarizeIcon from "@mui/icons-material/Summarize";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import ClearIcon from "@mui/icons-material/Clear";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SegmentIcon from "@mui/icons-material/Segment";
import Checkbox from "@mui/material/Checkbox";
import { listData } from "./dummyData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// AppBar Component
export function AppBarComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="appBar">
        <Toolbar>
          <Grid container item xs={12}>
            <Grid item xs={2.5}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <AddHomeWorkIcon />
                <Typography component="div" className="siteHeader">
                  Grave site management
                </Typography>
              </IconButton>
            </Grid>
            <Grid xs={0} sm={1}></Grid>
            <Grid item xs={1.5} className="dashOptions">
              <DashboardIcon />
              Maintain
              <KeyboardArrowDownIcon />
            </Grid>
            <Grid item xs={1.5} className="dashOptions selected">
              <AttachMoneyIcon />
              Payments
            </Grid>
            <Grid item xs={1.5} className="dashOptions">
              <SummarizeIcon />
              Reports
            </Grid>
            <Grid item xs={0.5} className="dashOptions">
              <SearchIcon />
            </Grid>
            <Grid item xs={0.5} className="dashOptions">
              {" "}
              <SettingsIcon />
            </Grid>
            <Grid item xs={0.5} className="dashOptions">
              {" "}
              <HelpOutlineIcon />
            </Grid>
            <Grid item xs={0.5} className="dashOptions"></Grid>
            <Grid container item xs={1.5} className="dashOptions">
              <Grid item xs={3}>
                <Avatar sx={{ width: 35, height: 35 }}>H</Avatar>
              </Grid>
              <Grid item xs={8.7} className="userDetails">
                <Grid xs={12} className="name">
                  John Snow
                </Grid>
                <Grid xs={12}>Muncipality officer</Grid>
              </Grid>
              <Grid item xs={0.3} className="dashOptions">
                {" "}
                <KeyboardArrowDownIcon />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function ToolBarComponent() {
  return (
    <Grid container item xs={12} className="toolbarContainer">
      <Grid container item xs={12} className="toolbarSubContainerTop">
        <Grid item xs={0.7}></Grid>
        <Grid item xs={2} className="optionHeader">
          Payments
        </Grid>
        <Grid item xs={3.1} className="optionHeader"></Grid>
        <Grid item xs={3} className="optionHeader">
          <SearchInput />
        </Grid>
        <Grid item xs={1} className="optionHeader">
          <Button
            variant="contained"
            startIcon={<FilterAltIcon />}
            className="filterButton"
          >
            Filter
          </Button>
        </Grid>
        <Grid item xs={1} className="optionHeader">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className="paymentButton"
            color="success"
          >
            Payment
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} className="notificationDataLabel">
          <Grid className="siteHeader headerText" xs={4}>
            3 Payments have not yet been posted
          </Grid>
          <Grid className="siteHeader" xs={5}></Grid>
          <Grid container item className="siteHeader" xs={3}>
            <Grid item xs={1}>
              <SegmentIcon className="notifIcons" />
            </Grid>
            <Grid item xs={9} className="labelText1">
              Preview posting results
            </Grid>

            <Grid item xs={1} className="close">
              <ClearIcon className="notifIcons" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function SearchInput() {
  return (
    <FormControl variant="outlined" className="searchInput">
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        variant="outlined"
        placeholder="Search by reciept, grave site, payor"
      />
    </FormControl>
  );
}
export function ListDataGrid() {
  const label = { inputProps: { "aria-label": "select" } };
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Grid container className="centerItems">
      <Grid container item xs={10} className="listHeader">
        <Grid item xs={0.5}>
          {" "}
          <Checkbox {...label} />
        </Grid>
        <Grid item xs={1} className="headerLabelText">
          Receipt
        </Grid>
        <Grid item xs={1.5} className="headerLabelText">
          Status
        </Grid>
        <Grid item xs={1.5} className="headerLabelText">
          Grave site
        </Grid>
        <Grid item xs={2} className="headerLabelText">
          Paid by
        </Grid>
        <Grid item xs={2} className="headerLabelText">
          No of Payment
        </Grid>
        <Grid item xs={1.5} className="headerLabelText">
          Date Paid
        </Grid>
        <Grid item xs={0.7} className="headerLabelText">
          Total
        </Grid>
      </Grid>

      {listData &&
        listData.map((one) => {
          return (
            <Grid container item xs={10} className="listDatas">
              <Grid item xs={0.5}>
                {" "}
                <Checkbox {...label} />
              </Grid>
              <Grid item xs={1} className="headerLabelText">
                {one.reciept}
              </Grid>
              <Grid item xs={1.5} className="headerLabelText">
                {one.status ? (
                  <span className="postedLabel">Posted</span>
                ) : (
                  <span className="unPostedLabel">Unposted</span>
                )}
              </Grid>
              <Grid item xs={1.5} className="headerLabelText">
                {one.site}
              </Grid>
              <Grid item xs={1.5} className="headerLabelText">
                {one.name}
              </Grid>
              <Grid item xs={2} className="headerLabelText">
                {one.paidTimes}
              </Grid>
              <Grid item xs={2} className="headerLabelText">
                {one.paidDate}
              </Grid>

              <Grid item xs={0.7} className="headerLabelText">
                {one.total}
              </Grid>
            </Grid>
          );
        })}
      <Grid container item xs={10} className="gridFooter">
        <Grid item xs={3}>
          <div className="selectPage">
            <select
              id="selectOption"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="10">Display 10/page</option>
              <option value="25">Display 25/page</option>
              <option value="50">Display 50/page</option>
              <option value="100">Display 100/page</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3} container>
          <IconButton aria-label="delete">
            <ArrowBackIosIcon />
          </IconButton>
         <span className="pageNumber"> 1 &nbsp; &nbsp; 2 &nbsp; &nbsp; ... &nbsp; &nbsp; 24 &nbsp; &nbsp; 25</span>
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export function Footer() {
  return (
    <Grid container xs={12} className="footer">
      <Grid container item xs={3}>
        © 2023 Company
      </Grid>
      <Grid container item xs={6.3}></Grid>
      <Grid container item xs={0.5}>
        About
      </Grid>
      <Grid container item xs={1.2}>
        Terms of service
      </Grid>
      <Grid container item xs={1}>
        Contact
      </Grid>
    </Grid>
  );
}
