import Tabs from './components/tabs';
import Results from './components/results';
import './App.css';
import { useState } from 'react';

function App() {

  const tabsArray = [
    {
      label: "Tab 1", content: "Tab 1 is showing content here"
    },
    {
      label: "Tab 2", content: "Tab 2 is showing content here"
    },
    {
      label: "Tab 3", content: "Tab 3 is showing content here"
    },
  ];

  const [allTabs, setAllTabs] = useState(tabsArray);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="App">
      <div id="parent-container">
        <Tabs 
        allTabs = { allTabs }
        currentTabIndex = { currentTabIndex }
        setCurrentTabIndex = { setCurrentTabIndex } 
        />
        <Results 
        allTabs = { allTabs }
        currentTabIndex = { currentTabIndex }
        />
        </div>
    </div>
  );
}

export default App;
