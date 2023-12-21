import React from "react";

export default function NewEmployeeForm({ onSubmit }) {
	const handleSubmit = (e) => {
        e.preventDefault();

		const form = e.target;
		const { firstName, lastName } = form;

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
        .then(data => {
            if(data.id)
            {
                onSubmit(data);
            }
        });
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group mb-4">
                <label for="firstName">Prénom</label>
			    <input type="text" name="firstName" className="form-control" id="firstName"/>
            </div>
            <div className="form-group mb-4">
                <label for="lastName">NOM</label>
                <input type="text" name="lastName" className="form-control" id="lastName"/>
            </div>
            <div>
                <input type="submit" className="btn btn-primary w-100" value="Envoyer" />
            </div>
		</form>
	);
}
