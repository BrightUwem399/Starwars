import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const getPeople = async () => {
            const response = await fetch("https://swapi.dev/api/people");
            const responseJson = await response.json();

            setPeople(responseJson.results);
        };

        getPeople();
    }, []);
    return (
        <div className='container-fluid tc'>
            <div className="container">
                <h3 className="display-3">People</h3>
                <p className="lead">A list of Starwars people</p>
                <hr />
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Height</th>
                                <th scope="col">Hair color</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((person, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{person.name}</td>
                                    <td>{person.height}</td>
                                    <td>{person.hair_color}</td>
                                    <td>
                                        <Link to={`/person?id=${index + 1}`}>Details</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default People;