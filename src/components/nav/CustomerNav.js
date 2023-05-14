import { AppBar, Button, IconButton, Toolbar, Grid, MenuItem, Menu, Fab, Icon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export const CustomerNav = ({ colorMode, setColorMode }) => {
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setDrawer(!drawer)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setDrawer(!drawer)
  }


  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          container>
            <Grid item>
              <MenuItem
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </MenuItem>
            </Grid>
            <Grid>
              <MenuItem
                onClick={() => {
                  navigate("/orderform");
                }}
              >
                New Order
              </MenuItem>
            </Grid>
            <Grid>
              <MenuItem
                onClick={() => {
                  navigate("/orders");
                }}
              >
                Orders
              </MenuItem>
              </Grid>
              <Grid>
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  setColorMode(!colorMode);
                }}
                color="inherit"
              >
                {colorMode === true ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Grid>
            <Grid item>
            <IconButton
                sx={{ ml: 1 }}
                onClick={(evt) => {
                  handleClick(evt)

                }}
                color="inherit"
              >
                {drawer === true ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Menu anchorEl={anchorEl} open={drawer} onClose={handleClose}>
              <MenuItem onClick={() => {
                  navigate("/myAccount")
                }}>My Account</MenuItem>
                <MenuItem onClick={() => {
                  localStorage.removeItem("prints_user");
                  navigate("/", { replace: true });
                }}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
