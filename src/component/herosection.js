import React, { useState } from 'react';
import food_img from './images/food-icon.png';
import adventure_img from './images/adventure-icon.png';
import pet_img from './images/pet-icon.png';
import nature_img from './images/nature-icon.png';
import product_img from './images/product-icon.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function HeroSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const term = event.target.value.trim();
        setSearchTerm(term);

        // For demonstration, let's assume suggestions are hardcoded
        const hardcodedSuggestions = ['Nature Photography', 'Landscape Phototgraphy', 'Wildlife Photography', 'Mountains Photography', 'Product photography', 'Adventure Photography', 'Food Photography'];
        const filteredSuggestions = hardcodedSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(term.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    };

    return (
        <>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-text header-text">
                                <h1 className='hero-text'>Let's bring in<br /><span className='nature-text'>Expert Photographers</span></h1>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg align-self-center">
                                    <section className="hero-section">
                                        <div className="content">
                                            <form action="#" className="search-form">
                                                <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search..." required />
                                                {searchTerm && (
                                                    <div className="suggestions">
                                                        {suggestions.map((suggestion, index) => (
                                                            <div key={index} className="suggestion" onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</div>
                                                        ))}
                                                    </div>
                                                )}
                                                <button className="material-symbols-outlined" type="submit" >
                                                    <Link to="/gigpage">
                                                        Search
                                                    </Link>
                                                </button>
                                            </form>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <ul className="categories">
                                <li><a href="/"><span className="icon"><img src={food_img} alt="Home" className='categories-icon mt-3' /></span>Food Photography</a></li>
                                <li><a href="/"><span className="icon"><img src={adventure_img} alt="Food" className='categories-icon' /></span>Adventure Photography</a></li>
                                <li><a href="/"><span className="icon"><img src={pet_img} alt="Vehicle" className='categories-icon' /></span>Pet photography</a></li>
                                <li><a href="/"><span className="icon"><img src={nature_img} alt="Shopping" className='categories-icon' /></span>Nature photography</a></li>
                                <li><a href="/"><span className="icon"><img src={product_img} alt="Travel" className='categories-icon' /></span>Product photography</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
