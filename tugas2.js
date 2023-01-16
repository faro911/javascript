var nama="Pororo";
var umur=16;
var dewasa=false;
var skill=null;
var admds=[4,2,1,2]

if(umur>15)
dewasa=true;
else
dewasa=false;

if(admds[0]>admds[1])
skill='attacker';
else
skill='defender';


console.log("Hero", nama, "usia",umur,"tahun")
console.log("Apakah Hero dewasa? :", dewasa)
console.log("Tipe Hero :", skill)
console.log("All stat", admds,".Detail : Atk", admds[0],",Def",admds[1],",Spd",admds[2],",MDef",admds[3])