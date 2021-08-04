import React,{ useEffect, useState } from 'react';
import Menu from './Menu';
import { useParams } from 'react-router-dom';
import './styles/PropertyBook.css';
import db from './firebase';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function PropertyBook() {
    const pID = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        if(pID){
             db.collection('properties').doc(pID.propId).onSnapshot(snapshot => (
                setDetails(snapshot.data())
            ));
        }
    });

    return (
        <>
            <Menu />
            <div className="propertyBook">
                <div className="propertyBook__left">
                    <h2>{details.title}</h2>
                    <div className="propertyBook__leftTop">
                        <div className="searchResult__stars">
                            <StarIcon className="searchResult__star" />
                            <p style={{marginRight:"5px"}}>
                                <strong>{details.stars}</strong>
                            </p>·
                            <p className="propertyBook__location">{details.location}</p>
                        </div>
                        <div className="propertyBook__leftIcons">
                            <ShareIcon /><p>Share</p>
                            <FavoriteBorderIcon /><p>Save</p>
                        </div>
                    </div>
                    <img src={details.displayImage} alt="property-page"/>
                    <h4>{details.subTitle}</h4>
                    <p>{details.description}</p>
                </div>
                <div className="propertyBook__right">
                    <div>
                        <div className="propertyBook__right__top">
                            <p><span style={{fontWeight:"600",fontSize:"25px"}}>₹{details.price}</span> / night</p>
                            <div className="searchResult__stars">
                                <StarIcon className="searchResult__star" />
                                <p>
                                    <strong>{details.stars}</strong>
                                </p>
                            </div>
                        </div>
                        <div className="propertyBook__right__bottom">
                            <div className="propertyBook__right__bottomFields" style={{width:"50%",float:"right"}}>
                                <p>CHECKOUT</p>
                                <input type="text" placeholder="Add date" />
                            </div>
                            <div className="propertyBook__right__bottomFields" style={{width:"50%",borderRight:"1px solid rgb(175, 175, 175)"}}>
                                <p>CHECK-IN</p>
                                <input type="text" placeholder="Add date" />
                            </div>
                            <div className="propertyBook__right__bottomFields" style={{borderTop:"1px solid rgb(175, 175, 175)"}}>
                                <p>GUESTS</p>
                                <input type="number" placeholder="Add guests"  min={0} style={{width:"100%"}}/>
                            </div>
                        </div>
                        <Button className="propertyBook__btn">Book Now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyBook;
