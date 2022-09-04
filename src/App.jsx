import React from 'react';
import './App.css';
import NavBar from './components/Nav_Bar';
import Section from './components/Section';
import Categories from './components/Categories';

function App() {
    
    const [SearchTerm, setSearchTerm] = React.useState('');

    return (
        <div>
            <NavBar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
            <Section SearchTerm={SearchTerm}/>
            <Categories />
        </div>
    );
}

export default App;