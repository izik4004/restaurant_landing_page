import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Favorite from './components/Favorite/Favorite';
import Cakes from './components/Cakes/Cakes';
import Chefs from './components/Chefs/Chefs';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<Hero></Hero>
			<Cakes id="menu"></Cakes>
			<Favorite></Favorite>
			<Chefs id="staff"></Chefs>
			<Footer></Footer>
		</Router>
	);
}

export default App;