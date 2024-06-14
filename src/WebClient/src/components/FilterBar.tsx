import React from "react";
import { Box, MenuItem, Select } from "@mui/material";

const FilterBar = ({ allMaterialFilters, materialFilter, handleMaterialFilterChange }) => {

    return (
        <Box>
            <Select 
            value={materialFilter}
            onChange={handleMaterialFilterChange}
            >
                {allMaterialFilters && allMaterialFilters.map(material => <MenuItem id={material}>{material}</MenuItem>)}
            </Select>
        </Box>
    );
}
export default FilterBar;
