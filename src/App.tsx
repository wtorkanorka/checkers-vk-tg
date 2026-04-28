import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { LobbyList } from "./pages/LobbyList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={LobbyList} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
