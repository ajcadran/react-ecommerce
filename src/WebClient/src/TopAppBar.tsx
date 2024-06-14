import React from "react";
import { Divider, Menu, MenuItem, AppBar, Box, Toolbar, Typography, ButtonBase, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const TopAppBar = () => {

	const navigate = useNavigate();
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const goToPage = (loc: string) => () => {
		setOpen(false);
		navigate(loc);
	}

	// Return --------------------------------------------------------------

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: '#222' }}>
				<Toolbar>
					<Box sx={{ flexGrow: 1, justifyContent: 'start' }}>
						<IconButton onClick={toggleDrawer(!open)} sx={{ color: "white" }}><MenuIcon /></IconButton>
						<ButtonBase onClick={() => navigate("/")} sx={{ p: "8px 15px", borderRadius: "5px" }}>
							<Typography variant="h6" component="div">
							</Typography>
						</ButtonBase>
					</Box>
					
					<Typography sx={{ float: 'right' }}>
						Placeholder
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				open={open}
				onClose={toggleDrawer(false)}
				sx={{ width: '100vw', height: '100vh', background: '#00000080' }}
				PaperProps={{ sx: {  pt: "15px", width: "250px", background: "#222", color: "white" } }}
			>
				<Divider sx={{ borderColor: "white", mx: "5px" }} />
				<MenuItem onClick={goToPage("/")}>
					<Typography variant="h5" sx={{ fontWeight: 'bold' }}>Home</Typography>
				</MenuItem>
				<MenuItem onClick={goToPage("/products")}>
					<Typography variant="h5" sx={{ fontWeight: 'bold' }}>Products</Typography>
				</MenuItem>
				<MenuItem onClick={goToPage("/about")}>
					<Typography variant="h5"  sx={{ fontWeight: 'bold' }}>About Us</Typography>
				</MenuItem>
			</Drawer>
		</Box>
	);
}
export default TopAppBar;
