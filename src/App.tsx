import './App.css';
import { Header, Footer } from './components';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <div>
      <Header />

      <HeroSection />
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
