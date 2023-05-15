import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  MenuItem,
  Menu,
  SvgIcon,
  createSvgIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const CustomerNav = ({ colorMode, setColorMode }) => {
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clicked, setClicked] = useState(0)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setDrawer(!drawer);
    setClicked(clicked + 1)
  };
  const handleClose = () => {
    setAnchorEl(null);
    setDrawer(!drawer);
  };

  const CoolS = () => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 16.139 49.253"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="a"
        d="M8.07 38.505V27.931L.132 21.322V10.747L8.07.173l7.937 10.574v10.575l-4.016 3.305"
        fill="none"
        stroke="#7e57c2"
        strokeLinejoin="round"
        strokeWidth={3}
      />
      <use
        transform="rotate(180 8.07 24.646)"
        width="100%"
        height="100%"
        xlinkHref="#a"
      />
    </svg>
  );
  


  const coolSChoice = () => {
    if(clicked > 5){
      return CoolS()
    } else{
      return <MenuIcon />
    }
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            container
          >
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
                  handleClick(evt);
                }}
                color="inherit"
              >
                {drawer === true ? <CloseIcon /> : coolSChoice()}
              </IconButton>
              <Menu anchorEl={anchorEl} open={drawer} onClose={handleClose}>
                <MenuItem
                  onClick={() => {
                    navigate("/myAccount");
                  }}
                >
                  My Account
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem("prints_user");
                    navigate("/", { replace: true });
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
