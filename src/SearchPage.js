import React, { useEffect, useState } from 'react';
import './styles/SearchPage.css';
import Menu from './Menu';
import { Button } from '@material-ui/core';
import db from './firebase';
import SearchResult from './SearchResult';
import { Link } from 'react-router-dom';

function SearchPage() {
    const [ properties, setProperties ] = useState([]);

    useEffect(() => {
        db.collection('properties').onSnapshot(snapshot => (
            setProperties(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                } 
            )))
        ));
    }, []);

    return (
        <>
        <Menu page="search"/>
        <div className="searchPage">
            <div className="searchPage__topSection">
                <p>300+ stays</p>
                <h1>Places to stay near you</h1>
                <Button variant="outlined">Cancellation flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            
            {
                properties.map(property => (
                    <Link to={"/property/"+property.id} style={{textDecoration:"none"}}>
                        <SearchResult 
                            key={property.id}
                            description={property.data.description}
                            displayImage={property.data.displayImage}
                            price={property.data.price}
                            stars={property.data.stars}
                            subTitle={property.data.subTitle}
                            title={property.data.title}
                        />
                    </Link>
                ))
            }
        </div>
        </>
    )
}

export default SearchPage;
