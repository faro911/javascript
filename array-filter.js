let orang = [{
    jeneng : "andy",
    gender : "male"
},
{
    jeneng : "cindy",
    gender : "female"
},
{
    jeneng : "Hila",
    gender : "female"
}
];

let female = orang.filter(orangs => {
    return orangs.gender === "female";
});

console.log(female);

//fungsi filter untuk menemukan ada tidaknyaa nilai yang cocok dengan yang dicari