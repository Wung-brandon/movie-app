import { 
  Header,
  Footer,
} from "./components/allComponents";

// pages
import { Search,
         TrendingPage,
         MoviePage,
         Series,
         MovieDetails          
} from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TrendingPage />} exact />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/tv" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trending/:id" element={<MovieDetails />}></Route>

        </Routes>

        <Footer />

      </Router>




    </div>
  );
}

export default App;
