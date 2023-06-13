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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheets primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
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
