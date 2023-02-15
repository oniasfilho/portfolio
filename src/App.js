import './App.scss';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
	return (
		<div className="general-wrapper">
			<div className="body-wrapper">
				<Introduction />
				<Technologies />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
