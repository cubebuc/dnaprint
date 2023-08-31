import DetailLayout from '../layouts/DetailLayout';
import Title from '../components/Title';
import DetailList from '../components/DetailList';
import DetailParagraph from '../components/DetailParagraph';

function TiskovinyPage()
{
    return (
        <DetailLayout>
            <Title color='warning' text='specifikace tiskovin' scale={1.1} />
            <p className="lead text-light">
                Je mnoho variant, jak vyrobit a upravit tiskovinu. Svěřte doporučení a výrobu do našich rukou nebo si ji sami "nastavte" na míru. Sepsali jsme pro vás základ toho, jak a z čeho lze vybírat při výrobě tiskoviny:
            </p>

            <DetailList title='základní specifikace' subtitle=' - co tiskovinu tvoří' items={[
                'tisková technika',
                'materiál',
                'barevnost',
                'formát',
                'povrchová úprava',
                'finální zpracování'
            ]} />

            <DetailList title='tisková technika' subtitle=' - jaký druh tisku použít' items={[
                'digitální tisk',
                'ofsetový tisk - tisk z plochy',
                'Tyto nejpoužívanější technologie poskytují podobnou, i když v některých směrech odlišnou, výslednou kvalitu. Digitální se volí převážně při nižších počtech kusů a to hlavně z cenového důvodu.',
                'knihtisk - používá se převážně pro ražbu - vystouplý / zahloubený motiv',
                'termotisk nebo sítotisk - techniky, ktreré se využívají ve výjimečných případech pro zušlechtění tiskoviny.'
            ]} />

            <DetailParagraph title='materiál' subtitle='typ a gramáž papíru' text='V dnešní době je v nabídce papírenských firem k dostání široká škála papíru. V nabídce najdete obyčejný bezdřevý ofsetový papír (používaný do kopírek a na tisk dopisních papírů), křídový papír, natíraný papír lesklý či matný, luxusnější ofsetové papíry i rozsáhlý sortiment strukturovaných, recyklovatelných materiálů či papíry pro speciální použití jako jsou například samopropisovací papíry. Podle účelu tiskoviny se volí nejen vzhled materiálu, ale také plošná hmotnost papíru neboli gramáž (také tloušťka či síla papíru - uvádí se v gramech na m2). Ofsetovým a digitálním tiskem se potiskují materiály o gramáži 50g - 400g. Větší gramáže se dociluje kašírováním (potištění papíru nižší gramáže - cca 135g - a jeho nalepení na karton)' />
            <DetailParagraph title='barevnost' subtitle='přímé barvy, CMYK' text='Všechny druhy tiskovin mohou být tištěny přímými barvami (též doplňkové barvy - speciálně namíchaná barva, používá se převážně z důvodu důsledného dodržování barevnosti - pro stanovení specifikace barvy se používají vzorníky - např. Pantone). Přímá barva se používá také jako doplňková barva CMYKu. Nejčastěji jsou však tiskoviny tištěny samotným CMYKem nebo použitím některé z barev CMYKu (CMYK též soutisk - barevný prostor pomocí kterého se míchají všechny barvy tištěného barevného spektra - je však třeba předem počítat s tím, že nikdy není možné CMYKem dosáhnout dokonalosti přímé barvy).' />
            <DetailParagraph title='formát' subtitle='rozměr případně tvar' text='Tiskovina může mít téměř libovolný tvar. Jediným limitem je formát tiskového stroje. Můžete mít klasický formát tiskovin: A6 - standartní pohlednice (148x105), A5 (210x148), A4 - standartní dopisní papír (297x210), A3 (420x297), A2 (594x420), DL (210x105) nebo formáty dalších standardizovaných řad (řada B, řada C). Ojedinělého tvaru lze dosáhnout výsekem.' />
            <DetailParagraph title='povrchová úprava' subtitle='zušlechtění tiskoviny' text='Tiskovině může prospět povrchová úprava. Zakázku lze například potáhnout ofsetovým lakem pro jeho větší ochranu před otěrem, případně olaminovat. Laminace (potažení papíru folií) je nejen velmi dobrá ochrana před otěrem a zamezuje praskaní papíru při lomu, ale působí také velmi luxusně. Základní druhy laminace jsou lesklá a matná fólie, ale existují i lamina se strukturou. Dalším druhem povrchové úpravy, která je velmi působivá je UV lak, který může být buď jako celoplošný nebo lokální - lakem se zvýrazní pouze konkrétní místa na tiskovině. Kombinace UV laku s matnou laminací působí opravdu velmi dobře. Je ale více variant jak udělat svou tiskovinu ojedinělou. Např. slepotisk (ražba - vytlačení určitého místa na papíře) či termotisk (teplem nanesená folie na tiskovinu).' />
            <DetailParagraph title='finální zpracování' subtitle='knihařské práce' text='Výběrem papíru, barevností, tvarem a povrchovou úpravou výroba tiskovin často nekončí. Je velké množství finálních úprav tiskovin. Konečná úprava tiskovin, respektive knihařské zpracování může mít mnoho podob. Od jednodušších, jako jsou různé druhy falcování (též ohyby či lomy), bigování (příprava lomu pro tvrdší papír). Případně, již složitější, vázání publikací: V1 (šitá vazba - většinou 2 skoby či skoby s očkem), V2 (lepená vazba v měkkých deskách), V4 (lepená + šitá vazba v měkkých deskách - někdy také 2 skoby shora + zalepení obálky), V8 (šitá vazba s tvrdými, kašírovanými, deskami).' />
        </DetailLayout>
    );
}
export default TiskovinyPage;