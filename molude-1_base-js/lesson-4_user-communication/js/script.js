/** ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ + ИНТЕРПОЛЯЦИЯ.
 * alert('hi browser') - косанда для вывода текста в виде модального окна
 alert(`hi browser I can calc    "${a} + ${b} = ${a * b}"`)
 * confirm("Вам нравится наш сайт?") - Для ответа ок или отмена
 * prompt('Write your message', 'message') - чтобы пользователь смог ввести свое сообщение
 * Данные от пользователя всегда приходят в виде строки.
 * console.log(typeof(userAge)); - typeof()
const answers = [];
// answers[0] = prompt('Your name?', '')
// answers[1] = prompt('Your second name?', '')
// answers[2] = +prompt('Your age old?', '18')
console.log( typeof(answers) );
console.log(null);

 * ИНТЕРПОЛЯЦИЯ и шаблонные строки
 * ИНТЕРПОЛЯЦИЯ - возможность помкстить переменные внутри строки
console.log(`https://amazon${category}`);
 * шаблонные строки - `` косые кавычки
 */
'use strict'


const category = '.com';

console.log(`https://amazon${category}`);

const user = 'Artem';
alert(`Hello, ${user}`)
