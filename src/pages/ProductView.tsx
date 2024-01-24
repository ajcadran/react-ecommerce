import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import data from '../test-data.json';

const Product = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id === undefined) navigate("/");
    }, []);

    return (
        <Box>
           {id}
        </Box>
    );
}
export default Product;
