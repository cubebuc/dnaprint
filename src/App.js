import Header from './components/Header';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

const fotoText = <>
    Firemní fotografie, rodinná<br />
    fotografie, produktová<br />
    fotografie, příroda a město,<br />
    portréty, akty a rodina,<br />
    sportovní akce. Fotografie jsou<br />
    po nafocení počítačově<br />
    upraveny a dodány v papírové<br />
    či digitální podobě.</>;

const grafikaText = <>
    Navrhneme vše od loga, přes<br />
    kompletni firemní tiskový<br />
    design až po návrhy<br />
    jednotlivých tiskovin včetně<br />
    jejich připravy pro tisk nebo<br />
    jiné užití.</>;

const redakceText = <>
    Specializujeme se na korektury<br />
    českého jazyka. Blízce<br />
    spolupracujeme s<br />
    renomovanými čtenáři. Dále<br />
    spolupracujeme s překladateli<br />
    a korektory daného jazyka.</>;

const tiskText = <>
    Vyrobíme jakýkoliv druh<br />
    tiskoviny - vizitky, letáky,<br />
    dopisní papíry, plakáty,<br />
    prospekty, PF, pohledy, inzeráty,<br />
    pozvánky, desky s výsekem,<br />
    brožury, knihy, samopropisovací<br />
    formuláře, kalendáře, katalogy,<br />
    firemní profily, výroční zprávy,<br />
    firemní časopisy, bloky, obálky<br />
    a mnohem více.</>;

const reklamaText = <>
    Vytvoříme vše, co si vůbec lze<br />
    pod slovem reklama představit.<br />
    - od výroby reklamních<br />
    předmětů až po billboardy.</>;

function App()
{
    return (
        <div className='App bg-black bg-gradient'>
            <Header />
            <div className='container-fluid my-4 text-center'>
                <Title color='warning' text='tiskárna' />
                <p className='lead text-light m-0'>
                    Profesionální přístup, vybavení, skvělé termíny i ceny. Je mnoho variant,<br />
                    jak vyrobit a upravit tiskovinu. Svěřte doporučení a výrobu do našich rukou<br />
                    nebo si ji 'nastavte' na míru.
                </p>
                <Title color='warning' text='specifikace tiskovin' scale={.5} />
            </div>
            <Navbar />
            <Section color='success' image={require('./resources/sec_foto.webp')} title='foto' subtitle='Nabízíme práce forografa' text={fotoText} />
            <Section color='primary' image={require('./resources/sec_grafika.webp')} title='grafika' subtitle='Nabízíme práce grafika' text={grafikaText} />
            <Section color='danger' image={require('./resources/sec_redakce.webp')} title='redakce' subtitle='Nabízíme práce korektora' text={redakceText} />
            <Section color='warning' image={require('./resources/sec_tisk.webp')} title='tisk' subtitle='Nabízíme tiskové služby' text={tiskText} />
            <Section color='secondary' image={require('./resources/sec_reklama.webp')} title='reklama' subtitle='Nabízíme reklamní služby' text={reklamaText} />
            <Footer />
        </div>
    );
}

export default App;
