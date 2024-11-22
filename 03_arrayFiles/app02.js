const fs = require('fs')

const text =
    'Справжнiй художник - це завжди особистiсть. А особистiсть ще нiкому не вдавалося затиснути в\r\n рамки звичних уявлень про творчi можливостi людини, як би широко ми цi рамки не розсували.\r\n Мабуть, саме цим i цiкаве для нас мистецтво, лiтература - новими вiдкриттями,\r\n непередбаченiстю зустрiчi.'

//write to file
const pathToFile = './files/n1.txt'
fs.writeFileSync(pathToFile, text, { encoding: 'utf-8', flag: 'a' })

//write file from arr
const arr1 = [
    'Справжнiй художник - це завжди особистiсть.',
    'А особистiсть ще нiкому не вдавалося затиснути',
    'непередбаченiстю зустрiчi.',
]

fs.writeFileSync('./files/n2.txt', arr1.join('\r\n'), {
    encoding: 'utf8',
    flag: 'w',
})
