import './App.css';
import Users from './components/Users';
import NewUsers from './components/NewUsers';
import { UsersContext, UsersProvider } from './context/UsersContext';

function App() {
  return (
    <UsersProvider>
      <div className="bg-gradient-to-tr from-cyan-200 to-slate-50 w-full h-screen flex justify-center">
        <div className="w-5/6">
          <NewUsers />
          <Users />
        </div>
      </div>
    </UsersProvider>
  );
}

export default App;
