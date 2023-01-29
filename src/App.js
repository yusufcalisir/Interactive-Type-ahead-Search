import SearchBar from './Components/SearchBar.js'
import Users from './db.json'
import './App.scss'

function App() {

	
	return (
		<div>
			<SearchBar data={Users} />
		</div>
  	);
}


export default App;
