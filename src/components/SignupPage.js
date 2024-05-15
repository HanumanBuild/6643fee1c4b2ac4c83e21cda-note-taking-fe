import api from '../api';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await api.post('/signup', { username, password });
      console.log('Signup successful', response.data);
    } catch (error) {
      console.error('Signup failed', error.response.data);
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default SignupPage;