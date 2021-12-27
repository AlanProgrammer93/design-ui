import './App.css';
import CardHoverEffect from './components/CardHoverEffect/CardHoverEffect';
import ChatStyle from './components/ChatStyle/ChatStyle';
import Checkbox from './components/Checkbox/Checkbox';
import CircularNavigation from './components/CircularNavigation/CircularNavigation';
import CircularProgressBar from './components/CircularProgressBar/CircularProgressBar';
import Loading from './components/Loading/Loading';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import MagicNavigationMenu from './components/MagicNavigationMenu/MagicNavigationMenu';
import MagicNavigationMenu2 from './components/MagicNavigationMenu2/MagicNavigationMenu2';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
      <MagicNavigationMenu />
      <MagicNavigationMenu2 />
      </div>
      
      <CardHoverEffect />
      <CircularNavigation />
      <LoginSignUp />
      <Checkbox />
      <CircularProgressBar />
      <Loading />
    </div>
  );
}

export default App;
