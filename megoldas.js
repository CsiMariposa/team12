<script>
//1.feladat
/*1. keszito() – Bemeneti paraméterek száma: 0
Készíts egy függvényt mely kiírja az adott file készítőjének 
• Nevét
• Csoportjának típusát (Junior Frontend vagy Webfejlesztő) 
• Csoportjának azonosítóját (melyik #Team tagja)
Visszatérési érték: nincs
*/
function keszito() {
	document.write("A készítő neve: Kárpáti Csilla <br>"); 
    	document.write("A csoport típusa: Junior FrontEnd és Webfejlesztő <br>"); 
	document.write("A csoport azonosítója: team12 <br>"); 
}
keszito(); 

//2.feladat
/*
2. feladat: hatvanyozo() – Bemeneti paraméterek száma: 2 (szam és hatvány)
Készíts egy függvényt, mely paraméterként bekér egy számot és a hatványozás mértékét, és 
visszaadja annak hatványát.
Kipróbálásra: hatvanyozo(2,3) esetleg hatvanyozo(5,3)
Visszatérési érték: 8, illetve a második esetében 125
*/
/*//prompt bekérésnél nem íródik ki- ezt nem tudom, hogyan kellene 
function hatvanyozo(szam,hatvany) {
    let eredmeny=Math.pow(szam,hatvany);
    document.write("A hatvány értéke: "+eredmeny+"<br>"); 
    return eredmeny; 
}
let szam=prompt("Adj meg egy számot:" );
let hatvany=prompt("Add meg a szám hatványát:");
hatvanyozo(); */

//Ha nem kell bekérni akkor: 
function hatvanyozo(szam1,hatvany1) {
    let eredmeny1=Math.pow(szam1,hatvany1);
    document.write("A hatvány értéke: "+eredmeny1+"<br>"); 
    return eredmeny1; 
}
hatvanyozo(2,3); 
hatvanyozo(5,3); 

/*3.feladat
3. feladat: parosLetrehoz() – Bemeneti paraméterek száma: 2 (alsó és felső határ)
Készíts egy függvényt, ami egy adott intervallumban generál ki páros számot, és ad vissza 
értéknek. 
Kipróbálásra: parosLetrehoz(1,100);
Visszatérési érték: 2-100-ig bármely páros szám
*/


function parosLetrehoz(also, felso) {
let ParosSzam=Math.round(Math.random()*(felso-also))+also;
if(ParosSzam%2==0){
	document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${ParosSzam}<br>`);
}
else if(ParosSzam!=felso)
{
	document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${ParosSzam+1}<br>`);
}
else{
	document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${ParosSzam-1} <br>`);
}
}

parosLetrehoz(1,100); 

/*4.feladat 
4. feladat: testTomegIndex() – Bemeneti paraméterek száma: 2 (suly és magasság)
Készíts el egy függvényt, amelynek meg kell adnod a magasságodat méterben és a súlyodat 
kilogrammban, és ezek után visszaadja a jelenlegi testtömeg indexed rövid szöveges 
értékelését.
A testtömeg index kiszámítására, a mellékelt linken találhatsz forrást:
Forrás: https://hu.wikipedia.org/wiki/Testt%C3%B6megindex
Visszatérési értékek lehetőségei (ügyelj a kis-nagybetű érzékenységre!):
• sulyosSovanysag
• mersekeltSovanysag
• enyheSovanysag
• normalisTestsuly
• tulsulyos
• IfokuElhizas
• IIfokuElhizas
• IIIfokuSulyosElhizas
Kipróbálásra: testTomegIndex(200,2) esetleg testTomegIndex(45,1.5), 
testTomegIndex(25,1.2)
Visszatérési érték: IIIfokuSulyosElhizas illetve normalisTestsuly valamint enyheSovanysag
*/

function testTomegIndex(testtomeg, magassag) {
	let TTI=testtomeg/(magassag*magassag);
	if(TTI<16){
	document.write("Magasságod: "+magassag+", súlyod: "+testtomeg+"<br> Súlyos soványság <br>");
	}
else if(TTI<17){
	document.write(" Magasságod: "+magassag+", súlyod: "+testtomeg+"<br> Mérsékelt soványság <br>");
	}
else if(TTI<18.5){
	document.write(" Magasságod: "+magassag+", súlyod: "+testtomeg+"<br>Enyhe soványság <br>");
	}
else if(TTI<25){
	document.write( "Magasságod: "+magassag+", súlyod: "+testtomeg+" <br>Normális testsúly <br>");
	}
else if(TTI<30){
	document.write("Magasságod: "+magassag+", súlyod: "+testtomeg+" <br>Túlsúlyosság <br>");
	}
else if(TTI<35){
	document.write("Magasságod: "+magassag+", súlyod: "+testtomeg+"<br>I. fokú elhízás <br>");
	}
else if(TTI<40){
	document.write("Magasságod: "+magassag+", súlyod: "+testtomeg+"<br>II. fokú elhízás <br>");
	}
else {
	document.write("Magasságod: "+magassag+", súlyod: "+testtomeg+"<br>III. fokú (súlyos) elhízás <br>");
	}
    return TTI; 
}

testTomegIndex(200,2);  
testTomegIndex(45,1.5); 
testTomegIndex(25,1.2); 

/*5.feladat 
5. feladat: egeszOsztoE() – Bemeneti paraméterek száma: 2 (szam és osztó)
Készíts egy függvényt, mely paraméterként bekér egy számot és egy osztót és vissza adja(true 
vagy false), hogy az adott osztó, osztja-e az egész számot, úgy, hogy a maradék nulla.
Kipróbálásra: egeszOsztoE(25,5) esetleg egeszOsztoE(1050,7) valamint egeszOsztoE(2048,3)
Visszatérési érték: true, illetve a második esetében szintén true, harmadik esetén pedig false*/

function egeszOsztoE(szam, oszto) {
if(szam%oszto==0){
	document.write(`A ${oszto} osztója ${szam} értéknek <br>`);
    return true; 
}
else{
	document.write(`A ${oszto} NEM osztója ${szam} értéknek <br>`);
    return false; 
}

}
//let szam=Number(prompt("Adj meg egy számot:"));
//let oszto=Number(prompt("Adj meg egy osztót:"));
egeszOsztoE(25,5); 
egeszOsztoE(1050,7); 
egeszOsztoE(2048,3); 
</script>
