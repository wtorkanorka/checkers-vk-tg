import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

import { ProfilePage } from "./pages/ProfilePage";
import { LobbyListPage } from "./pages/LobbyListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" Component={LobbyListPage} />
            <Route path="/profile/:profileId" Component={ProfilePage} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
