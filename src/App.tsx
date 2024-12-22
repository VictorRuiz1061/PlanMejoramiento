import { useState } from 'react';
import Login from './components/templates/Login';
import Dashboard from './components/templates/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = async (values: { username: string; password: string }) => {
    try { 
      console.log('Datos del formulario:', values);
       
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsLoggedIn(true);
      setUser(values.username);
    } catch (error) {
      console.error('Error durante el login:', error);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onSubmit={handleLogin} />
      ) : (
        <Dashboard username={user || ''} />
      )}
    </div>
  );
}

export default App;
