import Grid from "./component/Grid";
import Landing from "./component/Landing";
import Main from "./component/Main"
import Card from "./component/Card"
import Philosophy from "./component/Philosophy";
import Footer from "./component/footer";
function App() {
  return (
    <div className="App">
    <Landing/>
    <Main/>
    <Card/>
    <Philosophy/>
    <Footer/>
    <Grid/>
    </div>
  );
}

export default App;
