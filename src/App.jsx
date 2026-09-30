import { useState } from 'react'
import './App.css'
import CartItem from './CartItem'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import ToDoList from './ToDoList/ToDoList'

function App() {
  return (
    <>
      {/* <Navbar />
  <About />
  <Footer /> */}

      {/* <CartItem
   productName="Desk"
   price={5000}
   /> */}

      {/* <CartItem
   productName="Chair"
   price={9500}
   /> */}
      {/* <UserList />
      <Welcome />
      <SimpleForm /> */}
<ToDoList />
    </>)
}

function UserList() {
  const users = [
    { id: 1, name: 'sara' },
    { id: 2, name: 'yahya' },
    { id: 3, name: 'ahmed' },
  ]
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

function Welcome({ isLoggedIn }) {
  const hasNotifications = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>مرحبًا بك</h1>
      ) : (
        <button>تسجيل الدخول</button>
      )}

      {hasNotifications && <p>لديك رسالة جديدة</p>}
    </div>
  );
}

function SimpleForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSumbit = (e) => { //function
    e.preventDefault();
    alert(`message was sent, ${inputValue}`);
    setInputValue(''); //clear input after sending
  }

  return (
    //preform function when form is set
    <form onSubmit={handleSumbit}>
      <input type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='write something' />
      <button type='sumbit'>send</button>
    </form>
  );
}

export default App