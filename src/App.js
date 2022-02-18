import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import PunkList from "./components/PunkList/PunkList";
import Main from "./components/Main/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [masterPunkListData, setMasterPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x60a76446B65741305117b63192bcAb3Ad6cA2f4A&order_direction=asc"
      );
      setMasterPunkListData(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };

    return getMyNfts();
  }, []);

  useEffect(() => {
    function filterPunkList() {
      if (masterPunkListData) {
        const searchedPunkList = masterPunkListData.filter((data) =>
          data.name
            .toLowerCase()
            .trim()
            .includes(searchText.toLowerCase().trim())
        );
        setPunkListData(searchedPunkList);
      }
    }
    filterPunkList();
  }, [searchText]);

  return (
    <div className="app">
      <Header setSearchText={setSearchText} />
      {punkListData ? (
        <div>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
