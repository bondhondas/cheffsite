import React from 'react';
import Persons from '../Persons/Persons';

const Service = () => {
    return (
        <div>
            <h4 className="text-danger mt-5">Learn Cooking from the Best Cheff team? Then Hire Them......</h4>
            <h2 className="text-danger">
                Budget
                <span className="badge bg-danger ms-2">$80000</span>
            </h2>
            <Persons></Persons>
        </div>

    );
};

export default Service;