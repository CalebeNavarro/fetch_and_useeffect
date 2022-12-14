import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    console.log("useffect");
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, [page]);

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  return data ? (
    <div className="app">
      <h2>APi rick and morty</h2>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <main className="containerDosCards">
        {data.results.map((element) => (
          <Card key={element.name} element={element} />
        ))}
      </main>
    </div>
  ) : null;
}

export default App;
