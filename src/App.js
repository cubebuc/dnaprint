import Header from "./components/Header";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

function App()
{
    return (
        <div className="App bg-black bg-gradient">
            <Header />
            <div className="container-fluid my-4 text-center">
                <Title color='warning' text='tiskárna' />
                <p className="lead text-light m-0">
                    Profesionální přístup, vybavení, skvělé termíny i ceny. Je mnoho variant,<br />
                    jak vyrobit a upravit tiskovinu. Svěřte doporučení a výrobu do našich rukou<br />
                    nebo si ji "nastavte" na míru.
                </p>
                <Title color='warning' text='specifikace tiskovin' scale={.5} />
            </div>
            <Navbar />
        </div>
    );
}

export default App;
