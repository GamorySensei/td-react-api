import React, { useEffect, useState } from "react";
import employeeFormData from "./EmployeeFormData";

export default function EmployeeForm({ onSubmit, data }) {
	const [employee, setEmployee] = useState(employeeFormData);

	useEffect(() => {
		if (data) {
			setEmployee(data);
		}
	}, [data]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const { firstName, lastName } = form;

		if (employee.id) {
			fetch("https://dummyjson.com/users/" + employee.id, {
				method: "PUT" /* or PATCH */,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(employee),
			})
				.then((res) => res.json())
				.then(data => {
					if(data.id)
					{
						onSubmit(employee);
						setEmployee(employeeFormData);
					}
				});

			
		} else {
			fetch("https://dummyjson.com/users/add", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName: firstName.value,
					lastName: lastName.value,
					image: "https://robohash.org/" + firstName.value + ".png",
				}),
			})
			.then((res) => res.json())
			.then((data) => {
				if (data.id) {
					onSubmit(data);
					setEmployee(employeeFormData);
				}
			});
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="form-group mb-4">
				<label htmlFor="firstName">Prénom</label>
				<input
					type="text"
					name="firstName"
					className="form-control"
					value={employee.firstName}
					onChange={(e) =>
						setEmployee({ ...employee, firstName: e.target.value })
					}
					id="firstName"
				/>
			</div>
			<div className="form-group mb-4">
				<label htmlFor="lastName">NOM</label>
				<input
					type="text"
					name="lastName"
					className="form-control"
					value={employee.lastName}
					onChange={(e) =>
						setEmployee({ ...employee, lastName: e.target.value })
					}
					id="lastName"
				/>
			</div>
			<div>
				<input
					type="submit"
					className="btn btn-primary w-100"
					value="Envoyer"
				/>
			</div>
		</form>
	);
}
