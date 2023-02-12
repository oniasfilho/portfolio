import './App.scss';
import Introduction from './components/Introduction';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="general-wrapper">
			<div className="body-wrapper">
				<Introduction />
				<Technologies />
			</div>
		</div>
  );
}

export default App;
