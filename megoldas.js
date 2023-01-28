
//1.feladat file készítőjének nevét írja ki
document.write(" Kárpáti Csilla, #TEAM tagja <br>"); 
document.write(" HTML-t 90 ig érti <br>"); 
document.write(" CSS-t 80 ig érti <br>"); 
document.write(" Javascripttel még küzd. leginkább a matek miatt, sorry: 30 <br>")
document.write("<hr>");

//2. feladatBekérünk egy számmot és hatványozzuk
let x=Number(prompt("Adj meg egy számot:"));
let y=Number(prompt("Adja meg a hatvány értéket:"));
let z=(x**y); 
 document.write(`A szám hatványa: ${z}`);
 document.write("<hr>");
 
//3.feladat - adott értékben generálás
let a=Number(prompt("Adj meg egy kezdőértéket:"));
let b=Number(prompt("Adja meg egy végső értéket:"));
let randomSzam=(Math.round(Math.random()*a))+b; 
 document.write(randomSzam);
if(randomSzam%2==0){
	document.write(`A 3.feladat: A ${randomSzam}`);
}
else{
	document.write(" ");
}
document.write("<hr>");

//4.feladat Élekor program, ami bekér 1-120 ig. 
let eletkor=Number(prompt("Add meg az életkorát: "));

if(eletkor<6){
	document.write(`A megadott életkor alapján Ön életkora: ${eletkor}, kisgyermekkorban van`);
}
else if(eletkor<12){
	document.write(`A megadott életkor alapján Ön életkora: ${eletkor}, gyermekkorban van`);
}
else if(eletkor<16){
	document.write(`A megadott életkor alapján Ön életkora: ${eletkor}, serdülőkorban van`);
}
else if(eletkor<20){
	document.write(`A megadott életkor alapján Ön életkora: ${eletkor}, ifjúkorban`);
}
else if(eletkor<30){
	document.write(`A megadott életkor alapján Ön életkora: ${eletkor}, fiatal felnőtt kor`);
}
else if(eletkor<60){
	document.write(`A megadott életkor alapján Ön életkora: ${eletkor}, felnőtt korban van`);
}
else if(eletkor<120){
	document.write(`A megadott életkor alapján Ön életkora: ${eletkor}, aggkorban van`);
}
else {
	document.write("Kérem adja meg az életkorát 0-120 között");
}
document.write("<hr>");



//5.feladat: Készíts egy olyan kódot, mely paraméterként bekér egy számot és egy osztót és
//kiírjaszövegesen,hogy az adott osztó, osztja-e az egész számot, úgy, hogy a maradék nulla
let c=prompt("Adj meg egy számot:");
let e=prompt("Adj meg egy osztót:");
let f=c%e; 
document.write("5.feladat");
if (f==0){
	document.write(`Az adott osztó osztja az egész számot, úgy, hogy a maradék nulla ${f} <br>` );
}
else{
	document.write(`Az adott osztó nem osztja az egész számot, úgy, hogy a maradék nulla legyen ${f} <br>`);
}

//6. feladat: Készíts egy programot,ami kiírja az első 10 négyzetszámot!
document.write("<hr>");
let n=10; 
let k=1;
for(let i=1; i<=n; i++){
    k=i*i; 
	document.write(k+",");
    
}
