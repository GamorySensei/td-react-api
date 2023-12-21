import React, { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
	// On crée une variable d'état pour stocker la liste des employés pour pouvoir agir dynamiquement dessus
	const [employees, setEmployees] = useState([]);
	const [pagesCount, setPagesCount] = useState();
	const [pageLimit, setPageLimit] = useState(5);

	// On recupère la liste des employés via l'API au "montage" du composant
	useEffect(() => {
		fetch("https://dummyjson.com/users?limit=" + pageLimit) // Renvoie une Promesse
			.then((response) => response.json()) // On parse la réponse en Json
			.then((data) => {
				// On traîte les données
				setEmployees(data.users);
				setPagesCount(Math.ceil(data.total / data.limit));
			});
	}, [pageLimit]);

	const handlePageChange = (page) => {
		let skip = parseInt(page) * pageLimit - pageLimit;
		fetch(
			"https://dummyjson.com/users?skip=" + skip + "&limit=" + pageLimit
		) // Renvoie une Promesse
			.then((response) => response.json()) // On parse la réponse en Json
			.then((data) => {
				setEmployees(data.users);
			});
	};

	const renderPagination = () => {
		const pagination = [];
		if (pagesCount > 1) {
			for (let i = 1; i <= pagesCount; i++) {
				pagination.push(
					<li key={i} className="page-item">
						<a
							className="page-link"
							onClick={(e) => handlePageChange(i)}
                            href="#"
						>
							{i}
						</a>
					</li>
				);
			}
			return (
				<tr>
					<td colSpan={3}>
						<nav aria-label="Page navigation example">
							<ul class="pagination">{pagination}</ul>
						</nav>
					</td>
				</tr>
			);
		} else {
			return null;
		}
	};

	const handlePageLimitChange = (value) => {
		setPageLimit(value);
	};

	const renderPageLimitSelector = () => {
		let options = [5, 10, 20, 30, 50, 100];
		return (
			<tr>
				<td colSpan={3}>
					<select
						onChange={(e) => handlePageLimitChange(e.target.value)}
					>
						{options.map((limit) => (
							<option value={limit}>{limit}</option>
						))}
					</select>
				</td>
			</tr>
		);
	};

	const renderEmployees = () => {
		return employees.map((employee) => (
			<Employee key={employee.id} data={employee} />
		));
	};

	return (
		<>
			<div className="container py-5">
				<table className="table table-striped table-bordered">
					<thead>
						{renderPageLimitSelector()}
						<tr>
							<th></th>
							<th>Nom</th>
							<th>Prénom</th>
						</tr>
					</thead>

					<tbody>{renderEmployees()}</tbody>

					<tfoot>{renderPagination()}</tfoot>
				</table>
			</div>
		</>
	);
}

export default EmployeeList;
