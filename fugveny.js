export function fugvenyem2(szam){
    let i= 2;
    if(szam<=0){
        return("Hibás szám");
    }
    else if (!Number.isInteger(szam)){
        return("Nem egész szám");
    }
    while (i<=Math.sqrt(szam)&& szam % i !==0){
        i++;
    }
    return i> Math.sqrt(szam);
    
}