import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  const changePunk = punkId => {
    setSelectedPunk(punkId)
  }

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xb680B6495B32871309f63DB71F7378300c01b163&order_direction=asc'
      )
      setPunkListData(openseaData.data.assets);
    }
    return getMyNfts()
  }, [])

  return (
   <div className='app'>
      <Header />
      
      {/* Only when we have punks return from our api call */}
      {punkListData.length > 0 && 
      <>
        <Main selectedPunk={selectedPunk} punkListData={punkListData} />
        <PunkList punkListData={punkListData} changePunk={changePunk} />
      </>
      }
   </div>
  );
}

export default App;
