import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

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

function HomePage()
{
    return (
        <MainLayout>
            <div className='overview container-fluid my-4 text-center'>
                <Link to='./tiskarna'>
                    <Title color='warning' text='tiskárna' />
                </Link>
                <p className='lead text-light m-0 mb-4'>
                    Profesionální přístup, vybavení, skvělé termíny i ceny. Je mnoho variant,<br />
                    jak vyrobit a upravit tiskovinu. Svěřte doporučení a výrobu do našich rukou<br />
                    nebo si ji 'nastavte' na míru.
                </p>
                <Link to='./tiskoviny'>
                    <Title color='warning' text='specifikace tiskovin' scale={.5} />
                </Link>
                <div />
                <Link to='./tiskarna'>
                    <Title color='warning' text='vybavení tiskárny' scale={.5} />
                </Link>
            </div>
            <Navbar />
            <Section color='success' title='foto' subtitle='Nabízíme práce forografa' text={fotoText} />
            <Section color='primary' title='grafika' subtitle='Nabízíme práce grafika' text={grafikaText} />
            <Section color='danger' title='redakce' subtitle='Nabízíme práce korektora' text={redakceText} />
            <Section color='warning' title='tisk' subtitle='Nabízíme tiskové služby' text={tiskText} />
            <Section color='secondary' title='reklama' subtitle='Nabízíme reklamní služby' text={reklamaText} />
        </MainLayout>
    );
}
export default HomePage;