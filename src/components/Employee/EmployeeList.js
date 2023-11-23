import React, { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
    // On crée une variable d'état pour stocker la liste des employés pour pouvoir agir dynamiquement dessus
    const [employees, setEmployees] = useState([]);
    const [pagesCount, setPagesCount] = useState();

    // On recupère la liste des employés via l'API au "montage" du composant
    useEffect(() => {
        fetch('https://dummyjson.com/users') // Renvoie une Promesse
        .then(response => response.json()) // On parse la réponse en Json
        .then(data => { // On traîte les données
            setEmployees(data.users);
            setPagesCount(Math.ceil(data.total/data.limit));
        });
    }, []);

    const handlePageChange = (page) =>  {
        let skip = (parseInt(page) * 30)-30;
        fetch('https://dummyjson.com/users?skip=' + skip) // Renvoie une Promesse
        .then(response => response.json()) // On parse la réponse en Json
        .then(data => {
            setEmployees(data.users);
        });
    }

    const renderPagination = () => {
        const pagination = [];
        for (let i = 1; i <= pagesCount; i++) {
            pagination.push(
                <button key={i} onClick={ e => handlePageChange(i) }>
                    {i}
                </button>
            );
        }
        return pagination;
    };



	return <>
        { employees.map(employee => <Employee key={ employee.id } data={employee} />) }

        { renderPagination() }
    </>;
}

export default EmployeeList;
