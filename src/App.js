//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greetfunc';
import Welcome from './components/Greetclass';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComp from './components/ParentComp';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './Day2/Form';
import FragmentDemo from './Day2/FragmentDemo';
import Table from './Day2/Table';
import PureComp  from './Day2/pureComp';
import RefsDemo from './Day2/RefsDemo';
import Focusinput from './Day2/Focusinput';
import Hero from './Day2/Hero';
import ErrorBoundary from './Day2/ErrorBoundary';
import HoverCounter from './Day2/HoverCounter';
import ClickCounter from './Day2/ClickCounter';
import ContextA from './Day2/ContextA';
import { UserProvider } from './Day2/UserContext';
import PostList from './Day2/HTTP/PostList';
import PostForm from './Day2/HTTP/PostForm';
import ClassCounter from './Hooks/ClassCounter';
import HookCounter from './Hooks/HookCounter';
import HookCount2 from './Hooks/HookCount2';
import Hookcounter3 from './Hooks/Hookcounter3';
import HookCounter4 from './Hooks/HookCounter4';
import UseEffects from './Hooks/UseEffects';
import HookMouse from './Hooks/HookMouse';
import Timer from './Hooks/Timer';
import DataFetch from './Hooks/DataFetch';
import Reducers from './Hooks/Reducers';
import Reducers2 from './Hooks/Reducers2';
import DataFetchReducers from './Hooks/DataFetchReducers';
import CakeContainer from './Redux/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Cakes/CakeStore';

// function App() {
//   return (
//     <div className="App">
//        <Greet name="Jai" role="Manager">
//         <p>Want to know more?</p>
//       <button>Open</button>
//       </Greet>
//       <Greet name="Vijay"/>
//       <Greet name="Ajay"/>
//       <Welcome name="Jai" role="Manager" /> 
//       <Welcome  name="Vijai" role="TL"> 
//       <button>Open</button>
//         </Welcome> 
//       <Hello name="Ajai" role="HR"/>  
//      <Message />    
//      <Counter />  
//      <FunctionClick />  
//      <ClassClick />   
//      <EventBind />  
//      <ParentComp />
//      <UserGreeting />  
//      <NameList />      
//      <Stylesheet />
//      <Inline />  

//      <Form /> 
//      <FragmentDemo />
//      <Table />
//      <PureComp />
//      <RefsDemo />   
//      <Focusinput />
//      <ErrorBoundary> <Hero heroName="Iron man"></Hero></ErrorBoundary>
//      <ErrorBoundary>  <Hero heroName="Ant man"></Hero> </ErrorBoundary>
//      <ErrorBoundary>  <Hero heroName="Jocker"></Hero></ErrorBoundary>
//       <HoverCounter />
//       <ClickCounter />    
//       <UserProvider value="Context Passing from Native class">
//            <ContextA />
//       </UserProvider>    
//       <PostList />  
//       <PostForm />      
 
//       <ClassCounter />
//       <HookCounter />
//       <HookCount2 /> 
//       <Hookcounter3 /> 
//      <HookCounter4 /> 
//      <UseEffects /> 
//      <HookMouse />
//      <Timer />  
//      <DataFetch />  
//      <Reducers />  
//      <Reducers2 />     
//      <DataFetchReducers />  
  
//     </div>
//   );
// }
function App() {
  return (
    <Provider store ={store}>
      <div className="App">
          <CakeContainer />
      </div> 
    </Provider>
    
  );
}

export default App;
