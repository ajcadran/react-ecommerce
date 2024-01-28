import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, Divider, Link, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import data from '../test-data.json';
import { ProductModel } from "../models/ProductModel";
import { ProductType } from "../models/ProductType";
import ProductCard from "../components/ProductCard";

const Product = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const product = data.products.find(x => x.id.toString() === id);

    useEffect(() => {
        if (id === undefined) navigate("/");
    }, []);

    return product && (
        <Box sx={{ padding: "20px" }}>
            <Box id="product-view" sx={{ display: "flex" }}>
                <ProductImageGallery product={product} />
                <ProductDetails product={product} />
            </Box>
        </Box>
    );
}
export default Product;

const ProductDetails = ({ product }) => {

    const [currentPrice, setCurrentPrice] = useState(0);
    const [currentSize, setCurrentSize] = useState(data.servicePrices[product.type].sizes[0]);

    useEffect(() => {
        setCurrentPrice(data.servicePrices[product.type].sizes[0].price);
    }, []);

    const RenderProductOptions = () => {
        switch(product.type) {
            case ProductType.BADGE:
                return <ProductDetailsBadge product={product} />;
        };
    }

    return (
        <Box sx={{ width: "40%", color: "white", padding: "30px" }}>
            <Typography variant="h4">{product.name}</Typography>
            <Breadcrumbs sx={{ color: "white" }}>
                <Link underline="hover" href="/">Products</Link>
                <Link underline="hover" href={`/product/${product.id}`}>{product.type}</Link>
            </Breadcrumbs>
            <Typography variant="h6">$ {currentPrice}</Typography>
            <Typography>{product.description}</Typography>
            <RenderProductOptions />
        </Box>
    );
}

const ProductDetailsBadge = ({ product }) => {

    const selectShape = (event: SelectChangeEvent) => {
        // Update price
    }

    return (
        <Box sx={{ width: "50%" }}>
            <Select id="select-shape" defaultValue={0} sx={{ color: "white", display: "block", my: "8px" }}>
                {data.servicePrices[product.type].shapes.map(shape => <MenuItem id={`shape-${shape.id}`} value={shape.price}>{shape.name}</MenuItem>)}
            </Select>
            <Select id="select-size" defaultValue={0} sx={{ color: "white", display: "block" }}>
                {data.servicePrices.Badge.sizes.map(size => <MenuItem id={`size-${size.id}`} value={size.id}>{size.name}</MenuItem>)}
            </Select>
        </Box>
    );
}

const ProductDetailsBusinessCard = ({ product }) => {

    return (
        <>
            <Select id="select-shape" defaultValue={0} sx={{ color: "white" }}>
                <MenuItem id="shape-standard" value={0}>Standard</MenuItem>
                {product.shapes.map(shape => <MenuItem id={`shape-${shape}`} value={shape}>{shape}</MenuItem>)}
            </Select>

            <Select id="select-quantity" sx={{ color: "white" }}>
                <MenuItem id="20"></MenuItem>
            </Select>
        </>
    );
}

const ProductImageGallery = ({ product }) => {

    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    return (
        <Box sx={{ width: "55%" }}>
            <img src={product.img[selectedImgIndex]} style={{ maxWidth: "100%", maxHeight: "60vh" }} />
            <Box sx={{ width: "100%" }}>
                {product.img.map((img, index) => <Button onClick={() => setSelectedImgIndex(index)} sx={{ maxWidth: "20%", height: "10vh" }}><img src={img} style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "5px", border: selectedImgIndex === index ? "2px solid gray" : "" }} /></Button>)}
            </Box>
        </Box>
    );
}
