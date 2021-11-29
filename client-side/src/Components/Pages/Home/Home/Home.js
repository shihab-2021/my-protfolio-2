import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import ownerPhoto from "../../../../images/owner2.jpg";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { TurnedIn } from "@mui/icons-material";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";

const drawerWidth = 300;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const drawer = (
    <div>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <div className="img-set">
              <img src={ownerPhoto} alt="" className="img-fluid" />
            </div>
            <h1>
              <NavLink className="navbar-brand fw-bold logo" to="/home">
                Shajibul Alam Shihab
              </NavLink>
            </h1>
            <div className="social-link mt-3 text-center">
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/md-shajibul-alam-shihab-b96576216/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a target="_blank" href="https://github.com/shihab-2021">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active">
                <NavLink to="/">
                  <i class="fas fa-home"></i>Home
                </NavLink>
              </li>
              <li>
                <a activeClassName="active" href={`#aboutMe`}>
                  <i class="far fa-user"></i>About
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i class="fab fa-steam-symbol"></i>Projects
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class="fas fa-phone"></i>Contact
                </a>
              </li>
            </ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <footer className="footer text-light text-center d-xl d-sm-none d-md-block">
          <small className="fw-bold">
            <span style={{ color: "#8babdb" }}>Shihab</span> &copy; 2021
          </small>
          <br />
          <small className="fw-bold">
            Designed by{" "}
            <span style={{ color: "#8babdb" }}>Shajibul Alam Shihab</span>
          </small>
        </footer>
      </header>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ boxShadow: "none", backgroundColor: "#ffffff00" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ boxShadow: "none" }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Banner />
        <About />
        <Resume />
        <Contact />
        <section className=" d-md-none">
          <footer className="p-3 bg-dark text-light text-center">
            <h5>Shihab &copy; 2021</h5>
            <h5>Designed by Shajibul Alam Shihab</h5>
          </footer>
        </section>
        {/* back to top  */}
        {/* <a href="#" className="back-to-top">
          <i class="fas fa-chevron-up"></i>
        </a> */}
      </Box>
    </Box>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
