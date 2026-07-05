import { createContext, useState } from "react";

import helmetImg from '../assets/images/safety_helmet.png';
import bootsImg from '../assets/images/safety_boots.png';
import vestImg from '../assets/images/reflective_vest.png';
import harnessImg from '../assets/images/safety_harness.png';
import gogglesImg from '../assets/images/safety_goggles.png';
import glovesImg from '../assets/images/safety_gloves.png';


export const ProductContext = createContext();


export function ProductProvider({ children }) {

    const [products, setProducts] = useState([
        { id: 1, name: "Industrial Safety Helmet", category: "Head Protection", price: "Rs. 2,500", stock: 150, img: helmetImg },
        { id: 2, name: "Steel Toe Safety Boots", category: "Foot Protection", price: "Rs. 8,500", stock: 85, img: bootsImg },
        { id: 3, name: "High-Vis Reflective Vest", category: "Body Protection", price: "Rs. 1,200", stock: 300, img: vestImg },
        { id: 4, name: "Full Body Harness", category: "Fall Protection", price: "Rs. 12,000", stock: 40, img: harnessImg },
        { id: 5, name: "Safety Goggles", category: "Eye Protection", price: "Rs. 800", stock: 200, img: gogglesImg },
        { id: 6, name: "Cut Resistant Gloves", category: "Hand Protection", price: "Rs. 1,500", stock: 500, img: glovesImg },
        { id: 7, name: "Test Protection Item", category: "Other Protection", price: "Rs. 999", stock: 10, img: helmetImg }
    ]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
