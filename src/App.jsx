import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import ItemsListContainer from "./components/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const instrumentos = [
    {
      id: 10,
      nombre: "Guitarra acustica",
      imagen: "",
      detalles:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      resumen: "Lorem Ipsum is simply dummy text",
      categoria: 0,
      precio: "100",
    },
    {
      id: 11,
      nombre: "Set bateria completo",
      imagen: "",
      detalles:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      resumen: "Lorem Ipsum is simply dummy text",
      categoria: 1,
      precio: "100",
    },
    {
      id: 12,
      nombre: "Bajo",
      imagen: "",
      detalles:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      resumen: "Lorem Ipsum is simply dummy text",
      categoria: 2,
      precio: "100",
    },
  ];

  const categorias = ["Guitarras", "Baterias", "Bajos"];

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          Component={(props) => (
            <ItemsListContainer
              instrumentos={instrumentos}
              categorias={categorias}
              {...props}
            />
          )}
        />
        <Route
          path="/category/:id"
          Component={(props) => (
            <ItemsListContainer
              instrumentos={instrumentos}
              categorias={categorias}
              {...props}
            />
          )}
        />
        <Route
          path="/item/:id"
          Component={(props) => (
            <ItemDetailContainer
              instrumentos={instrumentos}
              categorias={categorias}
              {...props}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
