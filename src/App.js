import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Future from './Future';
import Payment from './Payment';
import FutureLogged from './FutureLogged';

function App() {
  return (
<Routes>
  {/* <Route path='/' element={<Future />}/> */}
  <Route path='/' element={<FutureLogged />}/>
  <Route path='/futureLogged' element={<FutureLogged />} />
  <Route path='/payment' element={<Payment />}/>
</Routes>
  );
}

export default App;
