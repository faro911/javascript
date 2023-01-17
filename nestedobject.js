function nestesobj() {
    var hero = {
        nama : 'Yuu Go',
        class: '1 handl sword and shield',
        tittleh : 'God slayer',
        skille : {
            no1 :'Absolut Streak',
            no2 :'Summoning Bahamut',
        },
        Hp   : 10890,
        Mp   : 400,

    }
    console.log(hero)
    console.log('skill hero ke1:', hero.skille.no1)
    console.log('skill hero ke2:', hero.skille.no2)
}
nestesobj()
