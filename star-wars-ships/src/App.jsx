import { useEffect, useState } from 'react';
import './App.css'
import StarshipCard from './components/StarshipCard';

const App = () => {
	let [starships, setStarships] = useState([]);

	useEffect(() => {
		async function getTheStarships() {
	
			try {
				let response = await fetch("https://swapi.dev/api/starships/?page=1");
				let data = await response.json();
				setStarships(data.results);
			} catch (error) {
				console.error(error);
			}
		}

		getTheStarships();
	}, [])
  
  return (
		<section className='App'>
			<h1 id='page-title'>Star Wars Ships</h1>
			<StarshipCard starships={starships} />
		</section>
  );
}

export default App;