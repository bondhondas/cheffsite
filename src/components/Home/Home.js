import React, { useEffect, useState } from 'react';
import Header from '../Header/header';


const Home = () => {
    const [home, setHome] = useState([])
    const homee = home.slice(0, 6);


    useEffect(() => { },
        fetch("./hotel.json")
            .then(res => res.json())
            .then(data => setHome(data))
        , [])
    return (
        <div>
            <Header> </Header >

            <div className="container my-5">

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <div className="row row-cols-1 row-cols-md-3 g-4">

                            {
                                homee.map(home => (
                                    <div className="col">
                                        <div className="card h-100 bg-priary border-danger">
                                            <img src={home?.image} className="card-img-top person-img img-fluid img-responsive " alt={home?.name} />
                                            <div className="card-body">
                                                <h5 className="card-title text-danger">
                                                    {home?.name}
                                                </h5>





                                                <p className="card-text text-dark mb-2">
                                                    Teach:
                                                    <span className="fw-bold"> {home?.rank}</span>
                                                </p>



                                            </div>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;