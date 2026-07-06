import { createContext, useState, useEffect } from "react";
import axios from "axios";

import helmetImg from '../assets/images/safety_helmet.png';
import bootsImg from '../assets/images/safety_boots.png';
import vestImg from '../assets/images/reflective_vest.png';
import harnessImg from '../assets/images/safety_harness.png';
import gogglesImg from '../assets/images/safety_goggles.png';
import glovesImg from '../assets/images/safety_gloves.png';


export const ProductContext = createContext();


export function ProductProvider({ children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.post('https://iss.site.je/Database/fetch_product.php');
                if (response.data && Array.isArray(response.data)) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.error("Error fetching products from database:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
