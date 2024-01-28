import React from "react";
import { Divider, Menu, MenuItem, AppBar, Box, Toolbar, Typography, ButtonBase } from '@mui/material';
import { useNavigate } from "react-router-dom";

const TopAppBar = () => {

	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
	};

	// Return --------------------------------------------------------------

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: '#222' }}>
				<Toolbar>
					<Box sx={{ flexGrow: 1, justifyContent: 'start' }}>
						<ButtonBase onClick={() => navigate("/")} sx={{ p: "8px 15px", borderRadius: "5px" }}>
							<Typography variant="h6" component="div">
								Studio
							</Typography>
						</ButtonBase>
					</Box>
					
					
					<Typography sx={{ float: 'right' }}>
						Placeholder
					</Typography>
				</Toolbar>
			</AppBar>
			<Menu
				open={open}
				onClose={handleClose}
				sx={{ width: '100vw', height: '100vh', background: '#00000080' }}
				anchorEl={anchorEl}
			>
				<MenuItem>
					<Typography sx={{ fontWeight: 'bold' }}>Add Timeline Item</Typography>
				</MenuItem>
				<Divider />
			</Menu>
		</Box>
	);
}
export default TopAppBar;

//setNewItem({...newItem, date: newValue.target.value})
