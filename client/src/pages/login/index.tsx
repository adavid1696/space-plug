import { useState } from "react"

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	// const [loading, setLoading] = useState('')


	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const res = await fetch('http://localhost:3001/auth/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		})

		const resJSON = await res.json()
		
		setMessage(resJSON)

		// if(res.status === 200){

		// }
	}


	return (
		<div className="loginContainer">
			<form onSubmit={handleSubmit}>
				<label className="email">
					<input 
					type="text" 
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label className="password">
					<input 
					type="password" 
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					/>
				</label>

				<input type="submit" />
			</form>
			{message}
		</div>
	)
}