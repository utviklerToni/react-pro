import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import UsersList from './pages/UsersList';
import Selected from './pages/Selected';
import InProcess from './pages/InProcess';

function App() {
	return (
		<main>
			<Header />
			<Routes>
				<Route path='/' element={<UsersList />} />
				<Route path='/selected' element={<Selected />} />
				<Route path='/in-process' element={<InProcess />} />
			</Routes>
			{/* <Footer /> */}
		</main>
	);
}

export default App;
