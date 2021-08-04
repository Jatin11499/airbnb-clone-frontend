import React, { useState } from 'react';
import './styles/Home.css';
import Menu from './Menu';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Datepicker from './Datepicker';
import { Link } from 'react-router-dom';

function Home() {
    const [showDP, setShowDP] = useState(false);
    function showDatepicker(){
        setShowDP(!showDP);
    }

    return (
        <>
        <Menu page="home"/>
        <div className="home">
            <div className="home__welcomeSec">
                <form className="home__searchBar">
                    <div className="home__searchBar__fields">
                        <p>Location</p>
                        <input type="text" placeholder="Where are you going?" style={{width:"250px"}}/>
                    </div>
                    <div className="home__searchBar__fields" onClick={showDatepicker}>
                        <p>Check in</p>
                        <input type="text" placeholder="Add dates"/>
                    </div>
                    <div className="home__searchBar__fields" onClick={showDatepicker}>
                        <p>Check out</p>
                        <input type="text" placeholder="Add dates"/>
                    </div>
                    <div className="home__searchBar__fields">
                        <p>Guests</p>
                        <input type="number" placeholder="Add guests" min={0} />
                    </div>
                    <Button className="home__searchBar__searchBtn"><Link to="/search" className="home__searchBar__link"><SearchIcon /> Search</Link></Button>
                </form>

                <div className="home__heading">
                    <h1>Go<br/>Near</h1>
                    <Button className="home__exploreBtn"><Link to="/search" className="explore__link">Explore nearby stays</Link></Button>
                </div>

                {showDP && <Datepicker />}
            </div>
            <div className="home__optionsList">
                <div className="home__options">
                    <img src="https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240"  alt="homeImages"/>
                    <div>
                        <h4>Jaipur</h4>
                        <p>15-min drive</p>
                    </div>
                </div>
                <div className="home__options">
                    <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"  alt="homeImages"/>
                    <div>
                        <h4>Kasauli</h4>
                        <p>7-hour drive</p>
                    </div>
                </div>
                <div className="home__options">
                    <img src="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240"  alt="homeImages"/>
                    <div>
                        <h4>New Dehli</h4>
                        <p>4-hour drive</p>
                    </div>
                </div>
                <div className="home__options">
                    <img src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240"  alt="homeImages"/>
                    <div>
                        <h4>Massoorie</h4>
                        <p>8-hour drive</p>
                    </div>
                </div>
                <div className="home__options">
                    <img src="https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240"  alt="homeImages"/>
                    <div>
                        <h4>Udaipur</h4>
                        <p>5-hour drive</p>
                    </div>
                </div>
                <div className="home__options">
                    <img src="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240"  alt="homeImages"/>
                    <div>
                        <h4>Chandigarh</h4>
                        <p>6.5-hour drive</p>
                    </div>
                </div>
                <div className="home__options">
                    <img src="https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=240"  alt="homeImages"/>
                    <div>
                        <h4>Pushkar</h4>
                        <p>2-hour drive</p>
                    </div>
                </div>
                <div className="home__options">
                    <img src="https://a0.muscache.com/im/pictures/8340bd19-ee32-4669-8b10-a8ac7e7735d4.jpg?im_q=medq&im_w=240" alt="homeImages"/>
                    <div>
                        <h4>Bhopal</h4>
                        <p>7.5-hour drive</p>
                    </div>
                </div>
            </div>

            <div className="home__live">
                <h2>Live anywhere</h2>
                <div className="home__liveOptions">
                    <div className="home__live__element">
                        <img src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"  alt="homeImages"/>
                        <p>Entire homes</p>
                    </div>
                    <div className="home__live__element">
                        <img src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"  alt="homeImages"/>
                        <p>Cabins and cottages</p>
                    </div>
                    <div className="home__live__element">
                        <img src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"  alt="homeImages"/>
                        <p>Unique stays</p>
                    </div>
                    <div className="home__live__element">
                        <img src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"  alt="homeImages"/>
                        <p>Pets welcome</p>
                    </div>
                </div>
            </div>

            <div className="home__host">
                <h2>Join millions of hosts on Airbnb</h2>
                <div className="home__hostOptions">
                    <div className="home__host__element">
                        <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=320"  alt="homeImages"/>
                        <p>Host your home</p>
                    </div>
                    <div className="home__host__element">
                        <img src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=320"  alt="homeImages"/>
                        <p>Host an Online Experience</p>
                    </div>
                    <div className="home__host__element">
                        <img src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=320"  alt="homeImages"/>
                        <p>Host an Experience</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
