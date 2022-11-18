import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { NameProvider } from "./context/NameContext";
import { OptionProvider } from "./context/OptionContext";
import { BirthdayProvider } from "./context/BirthdayContext";

function App() {
  return (
    <NameProvider>
      <OptionProvider>
        <BirthdayProvider>
          <Header />
          <Navigation />
        </BirthdayProvider>
      </OptionProvider>
    </NameProvider>
  );
}

export default App;
