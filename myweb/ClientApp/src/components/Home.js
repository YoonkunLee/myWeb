import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

export class Home extends React.Component {
    render() {
        const images = [
            { url: "myWeb\myweb\ClientApp\src\images\battlefield1.jpg" },
            { url: "src\components\images\battlefield2.jpg" },
            { url: "src\components\images\battlefield2.jpg" },
            { url: "src\components\images\battlefield2.jpg" },
            { url: "src\components\images\battlefield2.jpg" },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={400}
                    height={300}
                    images={images}
                />
            </div>
        );
    }
}  