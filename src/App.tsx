import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/pages/home/HomePage";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import FeaturesPage from "./components/pages/features/FeaturesPage";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <HomePage />
        <ProjectsPage />
        <FeaturesPage />
      </main>
    </div>
  );
}

export default App;
