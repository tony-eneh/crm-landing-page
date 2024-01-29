import './App.css';
import { Header, Footer } from './components';

function App() {
  return (
    <div>
      <Header />
      {Array(100)
        .fill(null)
        .map((_, i) => (
          <div key={i}>
            <Footer />
          </div>
        ))}
    </div>
  );
}

export default App;
