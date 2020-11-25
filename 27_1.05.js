//  Простые числа
let i = 1000;
let j;
let contr;
begining:for (;i>=1;i--){
    for (j = Math.round (i/2);j>=1;j--){
        contr = i/j;
        switch (true){
            case (Number.isInteger(i/2)):
                continue begining;
            case (Number.isInteger(contr)&&contr!=i):
               continue begining;
            case (contr===i):
                console.log(i);
                continue begining;;
            default:
                continue;
        }
    }
}
