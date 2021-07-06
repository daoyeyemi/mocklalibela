import React from 'react'
import { FeatureContainer, FeatureButton } from "./FeatureElements" 

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Meal of the Day</h1>
            {/* Special Kitfo */}
            <p>Finely chopped prime lean beef seasoned with herbed butter sauce and spices served with cottage cheese and collard greens. Prepared rare, medium, or well done.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
