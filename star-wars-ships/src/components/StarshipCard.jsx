import "../styles/StarshipCard.css";
const StarshipCard = ({starships}) => {

    return (
        <section id="all-ships">
            {starships.map((starship, index) => (
                <section className="ship-container" key={index}>
                    <h2 className="ship-name">{starship.name}</h2>
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Max Compacity: <span>{starship.passengers}</span></p>
                    <p>Cost in Credits: <strong>{starship.cost_in_credits}</strong></p>
                    <p>Ship Class: {starship.starship_class}</p>
                </section>
            ))}
        </section>
    );
}

export default StarshipCard;