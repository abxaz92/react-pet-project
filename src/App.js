import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello World!!!</h2>;
}

const Field = () => {
  return <input type="text" placeholder='Type here' />
}

const Btn = () => {
  return <button>Ok</button>
}

function App() {
  return (
    <div className='App'>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
