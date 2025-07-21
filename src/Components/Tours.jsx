import Card from "./Card";

function Tours({ tour, bthandler }) {
  return (
    <div className="container">
      <div className="heading">
        <h1>PLAN YOUR DESTINATION</h1>
      </div>
      <div className="cards">
        {tour.map((tour) => {
          return <Card key={tour.id} {...tour} bthandler={bthandler}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
