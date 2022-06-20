import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='container-fluid tc'>
            <h1 className='display-1 mb-3'>REACT WORKSHOP</h1>
            <hr />
            <div className=''>
                <Link to="/people" className="display-4">
                StarWars People
                </Link>
            </div>
            <hr />
        </div>
    )
}

export default Home;