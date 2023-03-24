import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/edit/:postid" element={<Edit></Edit>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
