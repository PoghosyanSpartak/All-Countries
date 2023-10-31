import './App.css';
import { Store } from 'redux';
import { useSelector } from 'react-redux';
import Header from './component/Header/Header';
import Section from './component/Section/Section';

function App() {
  const s = useSelector((state) => console.log(state))
  return (
    <div className="App">
      <Header/>
      <Section/>
    </div>
  );
}

export default App;
