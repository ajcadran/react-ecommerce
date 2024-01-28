import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, Link, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import data from '../test-data.json';
import { ProductType } from "../models/ProductType";

const ProductPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const product = data.products.find(x => x.id.toString() === id);

    useEffect(() => {
        if (id === undefined) navigate("/");
    }, []);

    return product && (
        <Box sx={{ padding: "20px" }}>
            <Breadcrumbs sx={{ color: "white", pb: "14px" }}>
                <Link underline="hover" href="/">Products</Link>
                <Link underline="hover" href={`/products/${product.id}`}>{product.type}</Link>
            </Breadcrumbs>
            <Box id="product-view" sx={{ display: "flex" }}>
                <ProductImageGallery product={product} />
                <ProductDetails product={product} />
            </Box>
        </Box>
    );
}
export default ProductPage;

const ProductDetails = ({ product }) => {

    const [currentPrice, setCurrentPrice] = useState(0);
    const [selectedSize, setSelectedSize] = useState(data.servicePrices[product.type]?.sizes ? data.servicePrices[product.type].sizes[0] : {price: 0});
    const [selectedShape, setSelectedShape] = useState(data.servicePrices[product.type]?.shapes ? data.servicePrices[product.type]?.shapes[0] : {price: 0});
    const [selectedPaper, setSelectedPaper] = useState(data.servicePrices[product.type]?.papers ? data.servicePrices[product.type].papers[0] : {price: 0});
    const [selectedBorder, setSelectedBorder] = useState(data.servicePrices[product.type]?.borders ? data.servicePrices[product.type].borders[0] : {price: 0});

    useEffect(() => {
        setCurrentPrice(selectedSize.price + selectedShape.price + selectedPaper.price + selectedBorder.price);
    }, [selectedSize, selectedShape, selectedPaper, selectedBorder]);

    const RenderProductOptions = () => {
        switch(product.type) {
            case ProductType.BADGE:
                return <ProductDetailsBadge product={product} selectedSize={selectedSize} selectedShape={selectedShape} setSelectedSize={setSelectedSize} setSelectedShape={setSelectedShape} />;
            case ProductType.PRINT:
                return <ProductDetailsPrint product={product} selectedSize={selectedSize} selectedPaper={selectedPaper} selectedBorder={selectedBorder} setSelectedSize={setSelectedSize} setSelectedPaper={setSelectedPaper} setSelectedBorder={setSelectedBorder} />
        };
    }

    return (
        <Box sx={{ width: "40%", color: "white", padding: "30px" }}>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="h6">$ {currentPrice.toFixed(2)}</Typography>
            <Typography>{product.description}</Typography>
            <RenderProductOptions />
        </Box>
    );
}

const ProductDetailsBadge = ({ product, selectedSize, selectedShape, setSelectedSize, setSelectedShape }) => {

    // useEffect(() => {
    //     setSelectedSize(data.servicePrices[product.type].sizes[0]);
    //     setSelectedShape(data.servicePrices[product.type].shapes[0]);
    // }, []);

    const selectSize = (event: SelectChangeEvent) => {
        setSelectedSize(data.servicePrices[product.type].sizes[event.target.value]);
    }

    const selectShape = (event: SelectChangeEvent) => {
        setSelectedShape(data.servicePrices[product.type].shapes[event.target.value]);
    }

    return (
        <Box sx={{ width: "50%" }}>
            <Select id="select-size" value={selectedSize.id} onChange={selectSize} sx={{ color: "white", display: "block", my: "8px", border: "1px solid white" }}>
                {data.servicePrices.Badge.sizes.map(size => <MenuItem id={`size-${size.id}`} value={size.id}>{size.name}</MenuItem>)}
            </Select>
            <Select id="select-shape" value={selectedShape.id} onChange={selectShape} sx={{ color: "white", display: "block", my: "8px", border: "1px solid white" }}>
                {data.servicePrices[product.type].shapes.map(shape => <MenuItem id={`shape-${shape.id}`} value={shape.id}>{shape.name}</MenuItem>)}
            </Select>
        </Box>
    );
}

const ProductDetailsPrint = ({ product, selectedSize, selectedPaper, selectedBorder, setSelectedSize, setSelectedPaper, setSelectedBorder }) => {

    // useEffect(() => {
    //     setSelectedSize(data.servicePrices[product.type].sizes[0]);
    //     setSelectedPaper(data.servicePrices[product.type].papers[0]);
    //     setSelectedBorder(data.servicePrices[product.type].borders[0]);
    // }, []);

    const selectSize = (event: SelectChangeEvent) => {
        setSelectedSize(data.servicePrices[product.type].sizes[event.target.value]);
    }

    const selectPaper = (event: SelectChangeEvent) => {
        setSelectedPaper(data.servicePrices[product.type].papers[event.target.value]);
    }

    const selectBorder = (event: SelectChangeEvent) => {
        setSelectedBorder(data.servicePrices[product.type].borders[event.target.value]);
    }

    return (
        <Box sx={{ width: "50%" }}>
            <Select id="select-size" value={selectedSize.id} onChange={selectSize} sx={{ color: "white", display: "block", my: "8px", border: "1px solid white" }}>
                {data.servicePrices[product.type].sizes.map(size => <MenuItem id={`size-${size.id}`} value={size.id}>{size.name}</MenuItem>)}
            </Select>
            <Select id="select-paper" value={selectedPaper.id} onChange={selectPaper} sx={{ color: "white", display: "block", my: "8px", border: "1px solid white" }}>
                {data.servicePrices[product.type].papers.map(paper => <MenuItem id={`paper-${paper.id}`} value={paper.id}>{paper.name}</MenuItem>)}
            </Select>
            <Select id="select-border" value={selectedBorder.id} onChange={selectBorder} sx={{ color: "white", display: "block", my: "8px", border: "1px solid white" }}>
                {data.servicePrices[product.type].borders.map(border => <MenuItem id={`border-${border.id}`} value={border.id}>{border.name}</MenuItem>)}
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
        <Box id="product-img-gallery" sx={{ width: "55%" }}>
            <img src={product.img[selectedImgIndex]} style={{ maxWidth: "100%", maxHeight: "75vh" }} />
            <Box id="product-img-list" sx={{ width: "100%" }}>
                {product.img.map((img, index) => <Button id={`img-btn-${index}`} onClick={() => setSelectedImgIndex(index)} sx={{ maxWidth: "20%", height: "10vh" }}><img src={img} style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "5px", border: selectedImgIndex === index ? "2px solid orange" : "" }} /></Button>)}
            </Box>
        </Box>
    );
}
