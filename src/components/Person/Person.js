import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Person = props => {
    const { name, rank, experience, salary, image, Description } = props.person;
    const { handleSelectPerson } = props;

    return (
        <div className="col">
            <div className="card h-100 bg-dark border-danger">
                <img src={image} className="card-img-top person-img img-fluid" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-danger">
                        {name}
                    </h5>



                    <p className="card-text text-white mb-2">
                        Teach:
                        <span className="fw-bold"> {rank}</span>
                    </p>



                    <p className="card-text text-white mb-2">
                        Experience:
                        <span className="fw-bold"> {experience}</span>
                    </p>

                    <p className="card-text text-white mb-2">
                        Course Cost:
                        <span className="fw-bold"> ${salary}</span>
                    </p>

                    <p className="card-text text-white mb-2">
                        Description:
                        <span className="fw-bold"> {Description}</span>
                    </p>

                    <div className="card-footer">
                        <button
                            className="btn btn-danger w-100"
                            onClick={() => { handleSelectPerson(props.person) }}>

                            <FontAwesomeIcon icon={faPlane} className="me-2" />
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;