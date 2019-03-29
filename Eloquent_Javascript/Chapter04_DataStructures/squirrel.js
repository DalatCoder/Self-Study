
let JOURNAL = require('./journal.js');

function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) *
              (n00 + n01) *
              (n01 + n11) *
              (n00 + n10));
}
console.log(phi([76, 9, 4, 1]));


function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
console.log(tableFor('pizza', JOURNAL));
console.log(phi(tableFor('pizza', JOURNAL)));

