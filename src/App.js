import './App.css';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='title'>
            TODO
          </div>
          <div className='theme'>
            <img src='./images/icon-sun.svg' alt='theme'/>
          </div>
        </div>
        <TaskInput />
      </div>
    </div>
  );
}

export default App;
