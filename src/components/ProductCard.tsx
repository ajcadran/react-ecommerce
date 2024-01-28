import React from "react";
import { Box, Card, Typography } from "@mui/material";

const ProductCard = ({ product }) => {

    return (
        <Card id={`product-card-${product.id}`} sx={{ color: "white", backgroundColor: "rgba(255, 255, 255, 0.25)" }}>
                <Box id="card-img">
                    <img src={product.img[0]} style={{ width: "100%", height: "100%" }} />
                </Box>
                <Box id="card-content">
                    <Box sx={{ padding: "8px", textAlign: "center", backgroundColor: "transparent" }}>
                        <Typography>{product.name}</Typography>
                    </Box>
                </Box>
        </Card>
    );
}
export default ProductCard;
