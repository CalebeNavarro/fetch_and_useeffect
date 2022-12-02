import "./style.css";

export function Card({ element }) {
  return (
    <div className="containerCard">
      <img src={element.image} />
      <p>Name: {element.name}</p>
      <p>Sexo: {element.gender}</p>
      <p>Origin {element.origin.name}</p>
    </div>
  );
}
