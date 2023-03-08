<script>
let text="Tesztadat"; 
document.write(`A szöveg hossza: ${text.length} <hr>` ); 

//1. feladat
function  hosszEllenor(szoveg){ 
    let i=8;
    	if(i>szoveg.length)
        {
            document.write(`<br> A szöveg hossza: ${szoveg.length} karakter, kevesebb, mint 8 <hr>` ); 
            document.write(`A szöveg: ${szoveg}`);
        }
        else {
            document.write(`<br>A szöveg hossza: ${szoveg.length} karakter, több, mint 8  <hr>`);
            document.write(`A szöveg: ${szoveg}`);
        }
    }

hosszEllenor("teszt"); 
hosszEllenor("tesztfefladat"); 

//2.feladat
//Ezen gondolkodtam, de valahogy nem jött össze. 

//3.feladat- visszafeléről mentem és közben probáltam megérteni az órai anyagokat. 


function tombTerjedelem(){
let tomb=[3,5,10,16,9]; 
document.write(tomb+"  <hr>");

let minErtek=tomb[0];
for(let i=1;i<tomb.length;i++)
{
	if(tomb[i]<minErtek)
    {
    	minErtek=tomb[i];        
    }
}
document.write("<br>A tömb legkisebb elemének értéke: "+minErtek);


let maxErtek=tomb[0];
for(let i=1;i<tomb.length;i++)
{
	if(tomb[i]>maxErtek)
    {
    	maxErtek=tomb[i];        
    }
}
document.write("<br>A tömb legnagyobb elemének értéke: "+maxErtek);
let kulonbseg=(maxErtek-minErtek); 
document.write("<hr> A tömb legkisebb és legnagyobb eleme közötti különbség: " +kulonbseg);
}

tombTerjedelem();

//4.feladat 

<script>
const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]





function   legidosebbDolgozo() {
let maxErtek=Dolgozok[0].kor;
let minIndex=0;
for(let i=1;i<Dolgozok.length;i++)
{
	if(Dolgozok[i].kor>maxErtek)
    {
    	maxErtek=Dolgozok[i].kor; 
      	 minIndex=i; 
    }
}
document.write("<br>A legidősebb munkavállalató életkora: "+maxErtek);
document.write("<br>A legidősebb munkavállalató tömb indexe: "+ minIndex);
}

legidosebbDolgozo(); 
</script>



</script>