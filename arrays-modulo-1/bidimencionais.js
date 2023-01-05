
// Arrays Bidimencionais 

var avgTempWeek = []
var avgTempWeek1 = [1,2,3,4,5]
var avgTempWeek2 = [6,7,8,9,0]

avgTempWeek = [avgTempWeek1, avgTempWeek2]

for (let i = 0; i < avgTempWeek.length; i++) {
    // saida na tela para i => (5) [1, 2, 3, 4, 5]
    // saida na tela para i => (5) [6, 7, 8, 9, 0]
    for (let j = 0; j < avgTempWeek[i].length; j++) {
       console.log(avgTempWeek[i][j]); // ira varrer todo array dentro do I e J
       // log => 1234567890 Ou seja varreu todos os arrays
    }
}

