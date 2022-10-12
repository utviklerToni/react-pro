import './App.css';

import Header from './components/UI/Header.jsx';
// import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import UsersList from './pages/UserOverview/UsersList';
import Selected from './pages/UserOverview/Selected';
import InProcess from './pages/UserOverview/InProcess';
import AddUserMain from './components/Users/AddUserMain';
import UseRefs from './components/UseRefs/UserRefs';
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
