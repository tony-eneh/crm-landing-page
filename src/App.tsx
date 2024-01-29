import './App.css';
import { Header, Footer, HeroSection, FeaturesSection } from './components';

function App() {
  return (
    <div>
      <Header />

      <HeroSection />

      <FeaturesSection />

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
