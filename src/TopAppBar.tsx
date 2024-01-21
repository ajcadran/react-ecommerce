import React from "react";
import { Divider, Menu, MenuItem, AppBar, Box, Toolbar, Typography } from '@mui/material';

const TopAppBar = () => {

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
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Studio Name
					</Typography>
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
