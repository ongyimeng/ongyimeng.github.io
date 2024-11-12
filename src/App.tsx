import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import WorkExperience from './components/WorkExperience';
import Interests from './components/Interests';

function App() {
  return (
		<div className="App">
			<HashRouter>
				<Topbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/work-experience" element={<WorkExperience />} />
					<Route path="/interests" element={<Interests />} />
				</Routes>
			</HashRouter>
		</div>
  );
}

export default App;