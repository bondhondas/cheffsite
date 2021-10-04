import React, { useEffect, useState } from 'react';
import './Empolyee.css';

const Empolyee = () => {
    const [empolyee, setEmpolyee] = useState([])


    useEffect(() => { },
        fetch("./hotel.json")
            .then(res => res.json())
            .then(data => setEmpolyee(data))
        , [])
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        {
                            empolyee.map(employee => (
                                <div className="col">
                                    <div className="card h-100 bg-danger border-danger">
                                        <img src={employee?.image} className="card-img-top person-img img-fluid img-responsive " alt={employee?.name} />
                                        <div className="card-body">
                                            <h5 className="card-title text-danger">
                                                {employee?.name}
                                            </h5>

                                            <p className="card-text text-white mb-2">
                                                ID:
                                                <span className="fw-bold"> {employee?.id}</span>
                                            </p>
                                            <p className="card-text text-white mb-2">
                                                Gender:
                                                <span className="fw-bold"> {employee?.gender}</span>
                                            </p>


                                            <p className="card-text text-white mb-2">
                                                Teach:
                                                <span className="fw-bold"> {employee?.rank}</span>
                                            </p>



                                            <p className="card-text text-white mb-2">
                                                Experience:
                                                <span className="fw-bold"> {employee?.experience}</span>
                                            </p>
                                            <p className="card-text text-white mb-2">
                                                Description:
                                                <span className="fw-bold"> {employee?.Description}</span>
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
    );
};

export default Empolyee;