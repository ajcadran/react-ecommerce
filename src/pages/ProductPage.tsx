import { Box, Button, ButtonBase, Grid, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";
import data from '../test-data.json';
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {

    const navigate = useNavigate();

    const [materialFilter, setMaterialFilter] = useState<string[]>([]);

    function selectProduct(id: number) {
        navigate(`/product/${id}`);
    }

    function handleMaterialFilterChange(event: SelectChangeEvent) {
        const value = event.target.value;
        setMaterialFilter(typeof value === 'string' ? value.split(',') : value);
    }

    return (
        <Box>
            <Typography variant="h4" color="white">Products</Typography>

            {/* <FilterBar allMaterialFilters={allMaterialFilters} materialFilter={materialFilter} handleMaterialFilterChange={handleMaterialFilterChange} /> */}

            <Grid id="container" container spacing={2} sx={{ padding: "0 8px" }}>
            {data.products.map(product => (
                <Grid id={product.name} item xs={4}>
                    <ButtonBase onClick={() => selectProduct(product.id)}>
                        <ProductCard product={product} />
                    </ButtonBase>
                </Grid>
            ))}
            </Grid>
        </Box>
    );
}
export default ProductPage;
