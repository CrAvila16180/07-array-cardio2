const log = (content) => console.log(content);

const people = [
    { name: 'Wes', year: 1988},
    { name: 'Kait', year: 1986},
    { name: 'Irv', year: 1970},
    { name: 'Lux', year: 2015},
];

const comments = [
    { text: 'Love this!', id: 532423},
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  //some and every checks

log('1. Is at least one person 19 or older?');
log('Array.prototype.some()');
log('');
    //Array.prototype.some()
        //Is at least one person 19 or older?

        const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 18);

        log(isAdult);

log('')
log('2. Is everyone 18 or older?')
log('Array.prototype.every()')
log('')
    
    //Array.prototype.every()
        //Is everyone 18 or older

        const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 18);

        log(allAdults);



log('')
log('3. Find the comment with the ID of 3423')
log('Array.prototype.find()')
log('')

  //Array.prototype.find()
   //Find is like filter, but instead just returns the one you are looking for 
    //find the comment with the ID of 823423

    const comment = comments.find(comment => comment.id == 823423);

    log(comment);

  //Array.prototype.findIndex()
    //Find the comment with this ID
    //delete the comment with the ID of 823423

