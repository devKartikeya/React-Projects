import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

function App() {
  const schema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long'),
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
  })

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema), shouldFocusError: true });

  const onSubmit = async data => {
    let response = await fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    let result = await response.json();
    console.log(result);
    reset();
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <form 
        className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold text-center text-white">Sign Up</h1>

        {/* Username */}
        <div className="flex flex-col gap-2">
          <input 
            type="text" 
            placeholder="Username" 
            className="p-3 h-12 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            {...register('username', { required: true })} 
          />
          {errors.username && <p className="text-red-400 text-sm">{errors.username.message}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <input 
            type="email" 
            placeholder="Email" 
            className="p-3 h-12 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            {...register('email', { required: true })} 
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 h-12 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            {...register('password', { required: true })} 
          />
          {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button disabled={isSubmitting} type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App