import React from "react";

export default function Login() {
	const handleSubmit = (e) => {
		e.preventDefault();
        const form = e.target;
        const { username, password } = form;

		fetch("https://dummyjson.com/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username.value,
				password: password.value,
				// expiresInMins: 60, // optional
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.token) {
					sessionStorage.setItem("accessToken", data.token);
					window.location.href = "/";
				}
			});

	};

	return (
		<>
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-4">
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className="form-group mb-4">
								<label>Email</label>
								<input
									type="text"
									className="form-control"
									name="username"
								/>
							</div>
							<div className="form-group mb-4">
								<label>Mot de passe</label>
								<input
									type="password"
									className="form-control"
									name="password"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Login !
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
