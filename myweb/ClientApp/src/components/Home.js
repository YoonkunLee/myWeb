import React from 'react';
import { Slide } from "react-slideshow-image";

export class Home {
    render() {
        const slideImages = [
            'images/battlefield1.jpg',
            'images/battlefield2.jpg',
            'images/battlefield3.jpg',
            'images/battlefield4.jpg',
            'images/battlefield5.jpg'
        ];

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            onChage: (oldIndex, newIndex) => {
                console.log('slide transition from ${oldIndex} to ${newIndex}');
            }
        }
        const Slideshow = () => {
            return (
                <div className="slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{
                                'backgroundImage': `url(${slideImages[0]}` }}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]}` }}>
                                <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]}` }}>
                                <span>Slide 3</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[3]}` }}>
                                <span>Slide 4</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[4]}` }}>
                                <span>Slide 5</span>
                            </div>
                        </div>
                    </Slide>
                </div>
            )
        }        
    }
}  