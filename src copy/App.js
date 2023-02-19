import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './components/Main';
import Main2 from './components/Main2';

function App() {
  return (
    <div className="App container-fluid bg-black p-5">
      <main className='main container bg-light-subtle row mx-auto p-0'>
        <Main />
        <Main2 /> 
      </main>
    </div>
  );
}

export default App;
