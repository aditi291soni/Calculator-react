import './App.css';
import Calculator from './Calculator';
import css from './calculator.module.css'

function App() {
  return (
    <div className={css.main}>
    <Calculator/>
    </div>
  );
}

export default App;
