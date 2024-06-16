import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";


import MyMuisc from "./pages/MyMusic";
import Home from "./pages/Home";
import MelonPage from "./pages/MelonPage";
import BugsPage from "./pages/BugsPage";
import ApplePage from "./pages/ApplePage";
import GeniePage from "./pages/GeniePage";
import BillBoard from "./pages/BillBoard";
import Favorites from "./pages/Favorites";
import Recent from "./pages/Recent";
import Search from "./components/Search";
import MusicPlayerProvider from "./context/MusicPlayerProvider";

function App() {
  return (
    <MusicPlayerProvider>
      <BrowserRouter>
        <Header />
        <Main>
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/melon" element={<MelonPage />} />
            <Route path="/bugs" element={<BugsPage />} />
            <Route path="/apple" element={<ApplePage />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/genie" element={<GeniePage />} />
            <Route path="/bill" element={<BillBoard />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/mymusic" element={<MyMuisc />} />
          </Routes>
        </Main>
        <Aside />
      </BrowserRouter>
    </MusicPlayerProvider>
  );
}

export default App;
