import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material";
import { theme } from "./Theme";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "#f3f5fb",
    padding: "0 2px",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    position: "relative",
    "&:hover": {
        backgroundColor: theme.palette.common.blue,
    },
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing.unit * 3,
        width: "auto",
    },
}));

const styles = {
    root: {
        width: "100%",
        marginBottom: "10px",
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    tabContainer: {
        marginLeft: "auto",
    },
    desktopContainer: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    mobileContainer: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
};

const pages = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Resume", url: "/resume" },
];

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const renderMenu = () => {
        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        );
    };

    const renderMobileMenu = () => {
        return (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <MenuItem>
                    <Box sx={styles.mobileContainer}>
                        {pages.map((page, index) => (
                            <Link
                                key={index}
                                to={page.url}
                                style={{
                                    padding: "6px 4px",
                                    color: "black",
                                    textDecoration: "none",

                                }}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </Box>
                </MenuItem>
            </Menu>
        );
    };

    return (

        <Box sx={styles.root}>
            <AppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                   <Box></Box>
                    <Box sx={styles.desktopContainer}>
                        {pages.map((page, index) => (
                            <Link
                                key={index}
                                to={page.url}
                                style={{
                                    padding: "6px 4px",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </Box>
                    <Typography sx={styles.title} variant="h6" color="inherit" noWrap>
                        Mark Brown
                    </Typography>



                    <Box sx={styles.mobileContainer}>
                        <IconButton
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu()}
            {renderMobileMenu()}
        </Box>
    );
};

export default Navbar;