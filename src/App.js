import './App.css';
import Video from './components/Video';
function App() {
  return (
    <div className="App">
      <Video title='Education Channel' views='12k' like='1m'/>
      <Video title='Learning Channel' views='1102k' like='11m'/>
      <Video title='Reading Channel' views='104k' like='18m'/>

    </div>
  );
}

export default App;
