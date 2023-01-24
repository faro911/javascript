function panggilFilterParameters(value) {
    let arr = [
      {negara: 'Indonesia', benua: 'Asia'},
      {negara: 'Jerman', benua: 'Eropa'},
      {negara: 'Spanyol', benua: 'Eropa'},
      {negara: 'Korea', benua: 'Asia'},
      {negara: 'Portugal', benua: 'Eropa'},
      {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];
   
    let benuaEropa = arr.filter(function(itemE) {
         return itemE.benua === 'Eropa'
    });

    let benuaAsia = arr.filter(function(itemA) {
        return itemA.benua === 'Asia'
   });


   
    console.log(benuaEropa);
    console.log(benuaAsia);
   }

   panggilFilterParameters()
   //TUGAS PARAMETER FILTER untuk mencari negara di benua eropa dan asia