import { useState } from "react";

function Card({ id, name, info, image, price, bthandler }) {
  const [rdmore, setRdmore] = useState(false);
  function rdhandler() {
    setRdmore(!rdmore);
  }
  const discription = rdmore ? info : `${info.substring(0, 10)}...`;
  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="tour-info">
        <div>
          <h4 className="">{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <div>
          {discription}
          <span
            onClick={rdhandler}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {rdmore ? `     show less` : `read more`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => bthandler(id)}>
        Not Intrested
      </button>
    </div>
  );
}

export default Card;
