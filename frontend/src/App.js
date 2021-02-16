import { BrowserRouter as Router, Route } from "react-router-dom";
import BookingScreen from "./screens/BookingScreen";
import Footer from "./app/Footer";
import Header from "./app/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={BookingScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
