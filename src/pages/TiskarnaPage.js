import DetailLayout from '../layouts/DetailLayout';
import Title from '../components/Title';
import DetailList from '../components/DetailList';

function TiskarnaPage()
{
    return (
        <DetailLayout>
            <Title color='warning' text='vybavení tiskárny' scale={1.1} />
            <p className="lead text-light">
                K realizaci vašich zakázek používáme profesionální vybavení, které umožňuje zhotovení všech tiskovin v té nejvyšší kvalitě za příznivé ceny a v krátkých termínech.
            </p>

            <DetailList title='dtp studio a předtisková příprava' items={[
                'grafické pracovní stanice s programovým vybavením Adobe Creative Suite',
                'zkušení grafici a DTP operátoři',
                'standardní kontrola přijatých tiskových PDF v modulu PitStop',
                'digitální archová montáž v moderním workflow Fujifilm XMF',
                'osvit ekologických tiskových desek Fujifilm PRO - V na CTP Fujifilm Luxel V6',
                'možnost zripovaného náhledu tiskových dat',
                'nátiskové zařízení Epson 7880 do formátu B2'
            ]} />

            <DetailList title='tisk' subtitle=' - Sakurai Oliver 475 SDw' items={[
                'maximální formát tisku 600 x 750 mm',
                'zvětšený formát B2 umožňuje tisk brožur ve formátu B6 (125 x 176 mm, 32 stran na TA) a B5 (176 x 250 mm, 16 stran na TA)',
                'lakujeme tiskovým, ale i disperzním lakem - lesklým i matným',
                'rozsah potiskovaných gramáží sahá od přímopropisu 60g a LWC 65g až po lepenku GD2 500g',
                'stroj je vybaven vkladačem pásků do stohu ve vykladači',
                'tiskneme zcela bez použití isopropylalkoholu'
            ]} />

            <DetailList title='tisk' subtitle=' - Polly 266' items={[
                'maximální formát tisku 480 x 650 mm',
                'umožnuje tisk 1/1 nebo 2/0',
                'jednobarvový tiskový stroj Adast Romayor 314 určený především pro jedno a dvoubarvový potisk dopisních obálek'
            ]} />

            <DetailList title='tisk' subtitle=' - Adast Grafopress GPE' items={[
                'maximální formát 250 x 360 mm',
                'výsek, násek, odtrhová perforace, číslování'
            ]} />

            <DetailList title='knihařské zpracování' items={[
                'řezačka Perfecta 92 HTVC',
                'skládací stroj GUK 49/6 - šest příčných a jeden křížový lom',
                'linka V1 Horizon Stitchliner 5 500 s trojřezem',
                'snášecí linka Horizon VAC 100, 40 stanic, vhodné pro snášení volných listů, stolních a nástěnných kalendářů',
                'bigovací a perforovací automat Introma CP 500 (vhodný mimo jiné pro výrobu kalendářových stojánků)',
                'perforovací automat Rilecart FAR 5/55 pro vazbu TW - 3:1, 3:1 s háčkem, 2:1, maximální formát 550 x 550 mm',
                'zařízení pro kalendářovou vazbu twin wire Count + Cut a Press 720',
                'lepička bloků (poznámkové bloky, formuláře)',
                'dvouvřetenová vrtačka papíru'
            ]} />

            <DetailList title='logistika a doprava' items={[
                'vlastní doprava neoznačenými dodávkovými vozy MB Sprinter a MB Vito',
                'možnost bezplatného skladování tiskovin po dobu 3 - 6 měsíců',
                'zajištění adresné i neadresné distribuce tiskovin',
            ]} />

            <DetailList title='kooperace' items={[
                'laminace (lesklá, matná, strukturovaná, sametová)',
                'slepotisk, horká ražba',
                'UV lak (celoplošný, parciální, reliéfní)',
                'vazby V2 PUR, V4, V8',
                'výsek hmatníků',
                'šanony, psací podložky'
            ]} />
        </DetailLayout>
    );
}
export default TiskarnaPage;