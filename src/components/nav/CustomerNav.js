import { AppBar, Button, IconButton, Toolbar, Grid, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const CustomerNav = ({ colorMode, setColorMode }) => {
  const navigate = useNavigate();

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
                  navigate("/currentOrders");
                }}
              >
                Current Orders
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
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("prints_user");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
