module.exports = function getZerosCount(number, base) {
  let getMainMultipliers = num => {

     let isPrime = num => {
       for (var i = 2; i < num; i++) if (num % i == 0) return false;
       return num >= 2;
     };

     let multiplyObj = {};
     for (let i = 2, end = num, helpNum = num; i <= end; i++) {
       if (isPrime(i)){
         while(helpNum % i === 0){
           helpNum = helpNum / i;
           (multiplyObj[i]) ? multiplyObj[i]++ : multiplyObj[i] = 1 ;
         };
       };
     };
     return multiplyObj;
   };

   let getMaxPrimePow = (number, prime) => {
     let ourNumber = number, ourPrime = prime, powCounter = 0;
     while( ourNumber > 0){
       ourNumber = ~~(ourNumber/ourPrime);
       powCounter += ourNumber;
     };
     return powCounter;
   };

   let baseMultipliers = getMainMultipliers(base);
   let result = [];


   for (i in baseMultipliers) {
     let numberMultipliers = {};
     numberMultipliers[i] = getMaxPrimePow(number,i);

     result.push( numberMultipliers[i] / baseMultipliers[i] );
   };

   return ~~Math.min.apply(null, result);
}
