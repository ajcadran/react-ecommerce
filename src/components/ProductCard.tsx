import React from "react";
import { Box, Card, Typography } from "@mui/material";

const ProductCard = ({ product }) => {

    return (
        <Card>
                <Box id="card-img">
                    <img src={product.img[0]} style={{ width: "100%", height: "100%" }} />
                </Box>
                <Box id="card-content">
                    <Box sx={{ padding: "8px", textAlign: "center" }}>
                        <Typography>{product.name}</Typography>
                        <Typography>From ${product.price}</Typography>
                    </Box>
                </Box>
        </Card>
    );
}
export default ProductCard;
