import { Box, ButtonBase, Grid, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

import data from '../test-data.json';

const ProductList = ({ imgDir }) => {

    const navigate = useNavigate();

    const [materialFilter, setMaterialFilter] = useState<string[]>([]);

    function selectProduct(id: string) {
        navigate(`/products/${id}`);
    }

    function handleMaterialFilterChange(event: SelectChangeEvent) {
        const value = event.target.value;
        setMaterialFilter(typeof value === 'string' ? value.split(',') : value);
    }

    return (
        <Box>
            <Typography variant="h4" color="white" sx={{ m: "20px 0 0 20px" }}>Products</Typography>

            {/* <FilterBar allMaterialFilters={allMaterialFilters} materialFilter={materialFilter} handleMaterialFilterChange={handleMaterialFilterChange} /> */}

            <Grid id="container" container spacing={2} sx={{ p: "20px" }}>
            {data.products.map(product => (
                <Grid id={product.name} item xs={6} sm={4}>
                    <ButtonBase onClick={() => selectProduct(product.id)} sx={{ margin: "auto", width: "100%" }}>
                        <ProductCard product={product} imgDir={imgDir} />
                    </ButtonBase>
                </Grid>
            ))}
            </Grid>
        </Box>
    );
}
export default ProductList;
