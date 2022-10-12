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
import LoginApp from './pages/Login/LoginApp';
import AuthContext from './components/store/authContext';
import ReduxCounter from './components/Redux/ReduxCounter';
import TodoList from './components/TodoList/TodoList';

function App() {
   return (
      <AuthContext.Provider value={'fake value'}>
         <main>
            <Header />
            <Routes>
               <Route path='/' element={<UsersList />} />
               <Route path='/selected' element={<Selected />} />
               <Route path='/inProcess' element={<InProcess />} />
               <Route path='/todoList' element={<TodoList />} />
               <Route path='/addUser' element={<AddUserMain />} />
               <Route path='/expenseTracker' element={<ExpenseTracker />} />
               <Route path='/addMessage' element={<UseRefs />} />
               <Route path='/loginApp' element={<LoginApp />} />
               <Route path='/reduxCounter' element={<ReduxCounter />} />
            </Routes>
            {/* <Footer /> */}
         </main>
      </AuthContext.Provider>
   );
}

export default App;
