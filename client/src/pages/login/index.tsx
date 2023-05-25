import { useState } from "react"
import { useRouter } from "next/router";

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	// const [loading, setLoading] = useState('')
	const router = useRouter();


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
		
		if(res.status === 200){
			router.push('/dashboard')
		}

		setMessage(resJSON)
	}


	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
      </div>
    </div>
	)
}