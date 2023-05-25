let nums = [1,2,3,4,5,6,7,8,9,0];
let nums2 = [1,2,3]

function verificarElementos(array){
    if(array.lenght >= 5){
        console.log("Muitos Elementos.");
    }else {
        console.log("Poucos Elementos.");
    }
}

verificarElementos(nums);
verificarElementos(nums2);

