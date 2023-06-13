import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name='Dan' heroName='Batman'>
        <p>This is children paragraph.</p>
      </Greet>
      <Greet name='Mike'heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='John' heroName='Spiderman'/>

      <Welcome name='Dan' heroName='Batman'/>
      <Welcome name='Mike'heroName='Superman'/>
      <Welcome name='John' heroName='Spiderman'/> */}
      {/*<Hello />*/}
    </div>
  );
}

export default App;
