import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, Link, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../models/ProductType";
import { ProductModel } from "../models/ProductModel";

import data from '../test-data.json';

const ProductPage = ({ imgDir }) => {

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

    const servicePrices = data.servicePrices[product.type];

    const [currentPrice, setCurrentPrice] = useState(0);
    const [selectedSize, setSelectedSize] = useState(servicePrices?.sizes ? servicePrices.sizes[0] : new ProductModel({}));
    const [selectedShape, setSelectedShape] = useState(servicePrices?.shapes ? servicePrices.shapes[0] : new ProductModel({}));

    // Prints
    const [selectedPaper, setSelectedPaper] = useState(servicePrices?.papers ? servicePrices.papers[0] : new ProductModel({}));
    const [selectedBorder, setSelectedBorder] = useState(servicePrices?.borders ? servicePrices.borders[0] : new ProductModel({}));

    // Stickers
    const [selectedQuantity, setSelectedQuantity] = useState(servicePrices.sizes[selectedSize.id]?.quantities ? servicePrices.sizes[selectedSize.id].quantities[0] : new ProductModel({}));

    useEffect(() => {
        setCurrentPrice(selectedSize.price + selectedShape.price + selectedPaper.price + selectedBorder.price + selectedQuantity.price);
    }, [selectedSize, selectedShape, selectedPaper, selectedBorder, selectedQuantity]);

    const RenderProductOptions = () => {
        switch(product.type) {
            case ProductType.BADGE:
                return <ProductDetailsBadge product={product} selectedSize={selectedSize} selectedShape={selectedShape} setSelectedSize={setSelectedSize} setSelectedShape={setSelectedShape} />;
            case ProductType.PRINT:
                return <ProductDetailsPrint product={product} selectedSize={selectedSize} selectedPaper={selectedPaper} selectedBorder={selectedBorder} setSelectedSize={setSelectedSize} setSelectedPaper={setSelectedPaper} setSelectedBorder={setSelectedBorder} />
            case ProductType.DIE_STICKER:
                return <ProductDetailsSticker product={product} selectedSize={selectedSize} selectedQuantity={selectedQuantity} selectedPaper={selectedPaper} setSelectedSize={setSelectedSize} setSelectedQuantity={setSelectedQuantity} setSelectedPaper={setSelectedPaper} />
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

const ProductDetailsSticker = ({ product, selectedSize, selectedQuantity, setSelectedSize, setSelectedQuantity, selectedPaper, setSelectedPaper }) => {

    const selectSize = (event: SelectChangeEvent) => {
        setSelectedSize(data.servicePrices[product.type].sizes[event.target.value]);
    }

    const selectQuantity = (event: SelectChangeEvent) => {
        setSelectedQuantity(data.servicePrices[product.type].sizes[selectedSize.id].quantities[event.target.value]);
    }

    const selectPaper = (event: SelectChangeEvent) => {
        setSelectedPaper(data.servicePrices[product.type].papers[event.target.value]);
    }

    return (
        <Box sx={{ width: "50%" }}>
            <Select id="select-size" value={selectedSize.id} onChange={selectSize} sx={{ color: "white", display: "block", my: "8px", border: "1px solid white" }}>
                {data.servicePrices[product.type].sizes.map(size => <MenuItem id={`size-${size.id}`} value={size.id}>{size.name}</MenuItem>)}
            </Select>
            <Select id="select-quantity" value={selectedQuantity.id} onChange={selectQuantity}sx={{ color: "white", display: "block", my: "8px", border: "1px solid white" }}>
                {data.servicePrices[product.type].sizes[selectedSize.id].quantities.map(quantity => <MenuItem id={`quantity-${quantity.id}`} value={quantity.id}>{quantity.name}</MenuItem>)}
            </Select>
            <Select id="select-paper" value={selectedPaper.id} onChange={selectPaper} sx={{ color: "white", display: "block", my: "8px", border: "1px solid white" }}>
                {data.servicePrices[product.type].papers.map(paper => <MenuItem id={`shape-${paper.id}`} value={paper.id}>{paper.name}</MenuItem>)}
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
            <img src={product.img[selectedImgIndex]} style={{ maxWidth: "100%", maxHeight: "72vh" }} />
            <Box id="product-img-list" sx={{ width: "100%" }}>
                {product.img.map((img, index) => <Button id={`img-btn-${index}`} onClick={() => setSelectedImgIndex(index)} sx={{ maxWidth: "20%", height: "10vh" }}><img src={img} style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "5px", border: selectedImgIndex === index ? "2px solid orange" : "" }} /></Button>)}
            </Box>
        </Box>
    );
}
