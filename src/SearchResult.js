import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import './styles/SearchResult.css';

function SearchResult({ description, displayImage, price, stars, subTitle, title }) {
    return (
        <div className='searchResult'>
            <img src={displayImage} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{subTitle}</p>
                    <h4>{title}</h4>
                    <p className="line"></p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{stars}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>₹{price} / <span style={{fontSize:"25px"}}>night</span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
