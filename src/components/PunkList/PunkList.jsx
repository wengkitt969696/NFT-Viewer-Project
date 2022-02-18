import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./PunkList.css";

function PunkList({ punkListData, setSelectedPunk }) {
  return (
    <div className="punkList">
      {punkListData.map((punk, index) => (
        <div onClick={() => setSelectedPunk(index)} key={index}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
}

export default PunkList;
