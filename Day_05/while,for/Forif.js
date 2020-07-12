var jmlangkot=10;
var angkotberoprasi=6;
var angkotlembur=8;

for (var noangkot =1;noangkot<=jmlangkot;noangkot++){
    
   if ( noangkot <= angkotberoprasi && noangkot !== 5){
       console.log ("angkot No. " + noangkot + " Beroprasi Dengan Baik")
   } else if (noangkot === 8 || noangkot === 10 || noangkot === 5  ) {
       console.log ("Angkot No. " + noangkot + " lembur")
   }
    else {
        console.log("angkot No. "+ noangkot + " tidak beroperasi")
    }
}