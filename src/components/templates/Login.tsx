import React, { useState } from "react";

interface LoginProps {
  onSubmit: (values: { username: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.username || !formData.password) {
      setError("Por favor, complete todos los campos");
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Iniciar Sesión</h2>

        {error && <div className="bg-red-500 text-white p-2 mb-4 rounded">{error}</div>}

        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium text-gray-600">
            Usuario:
          </label>
          <input type="text" id="username" name="username"
            value={formData.username} onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium text-gray-600">
            Contraseña:
          </label>
          <input type="password" id="password" name="password"
            value={formData.password} onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required/>
        </div>

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
            hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
