import './App.css';

import Header from './components/UI/Header.jsx';
// import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import UsersList from './pages/UsersList';
import Selected from './pages/Selected';
import InProcess from './pages/InProcess';
import AddUserMain from './components/Users/AddUserMain';
import Test from './components/Test/Test';
import ExpenseTracker from './pages/ExpenseTracker/pages/ExpenseTracker';
import SimpleInput from './components/FormHandling/SimpleInput';

function App() {
	return (
		<main>
			<Header />
			<Routes>
				<Route path='/' element={<UsersList />} />
				<Route path='/selected' element={<Selected />} />
				<Route path='/in-process' element={<InProcess />} />
				<Route path='/add-user' element={<AddUserMain />} />
				<Route path='/expense-tracker' element={<ExpenseTracker />} />
				<Route path='/form-handling' element={<SimpleInput />} />

				<Route path='/test' element={<Test />} />
			</Routes>
			{/* <Footer /> */}
		</main>
	);
}

export default App;
