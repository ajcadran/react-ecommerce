import React from "react";
import { Box, Card, Typography } from "@mui/material";

const ProductCard = ({ product }) => {

    return (
        <Card id={`product-card-${product.id}`} sx={{ height: "max-content", color: "white", backgroundColor: "rgba(255, 255, 255, 0.25)" }}>
                <Box id="card-img" sx={{ maxHeight: "40vh", overflow: "hidden" }}>
                    <img src={product.img[0]} style={{ width: "100%", maxHeight: "40vh" }} />
                </Box>
                <Typography variant="h5" sx={{ padding: "10px" }}>{product.name}</Typography>
                {/* <Box id="card-content">
                    <Box sx={{ padding: "8px", textAlign: "center", backgroundColor: "transparent" }}>
                        <Typography>{product.name}</Typography>
                    </Box>
                </Box> */}
        </Card>
    );
}
export default ProductCard;
