// pair programmed by Josh and Kevin
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let verified = false;
    for (let l of horizontalJoin) {
        let verify = 0;    
        for (let i of word) {
            let index = l.indexOf(i)
            if (index !== -1) {
             // l = l.replace(i, '');
             l = l.slice(index);
             verify++;
            }
        }
        if (verify === word.length) {
            verified = true
            break
        }
    }
    return verified;
};

module.exports = wordSearch;

