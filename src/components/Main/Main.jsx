import React, { useEffect, useState } from "react";
import "./Main.css";

function Main({ selectedPunk, punkListData }) {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return activePunk ? (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img src={activePunk.image_url} className="selectedPunk" alt="" />
          </div>
        </div>
        <div className="punkDetailsContainer">
          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="title">
              {activePunk.name}
              <span className="itemNumber">#{activePunk.token_id}</span>
            </div>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerNameAndHandle" style={{ color: "white" }}>
              <div className="ownerAddress">{activePunk.owner.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ color: "white" }}>
      <h2>Please Select An NFT To View It's Detail</h2>
    </div>
  );
}

export default Main;
