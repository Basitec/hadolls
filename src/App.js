import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Future from './Future';

function App() {
  return (
<Routes>
  <Route path='/future' element={<Future />}/>
</Routes>
  );
}

export default App;
