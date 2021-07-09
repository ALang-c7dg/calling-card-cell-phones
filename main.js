const CallingCard = require('./CallingCard.js');
const CellPhone = require('./CellPhone.js');

// let card1 = new CallingCard(10); // card1 costs 10 cents / minute to use
// let card2 = new CallingCard(15); // card2 costs 15 cents / minute to use

// ***next section 
// let card = new CallingCard(20); // this card costs 20 cents / minute to use

// card.addDollars(1);           // add $1 (100 cents).  100 cents / 20 cents/minute = 5 minutes added

// console.log(card.getRemainingMinutes());   // returns 5  (5 minutes left)

// card.useMinutes(3);
// console.log(card.getRemainingMinutes());   // return 2

// card.useMinutes(1);
// console.log(card.getRemainingMinutes());   // returns 1

// ***next section 
// let card = new CallingCard(5); // this card costs 5 cents / minute to use

// card.addDollars(2);           // 200 cents / 5 cents/minute = 40 minutes added
// console.log(card.getRemainingMinutes());   // returns 40

// card.useMinutes(43);
// console.log(card.getRemainingMinutes());   // return 0

// ***next section 
// let card1 = new CallingCard(11);
// card1.addDollars(3);         // 300 cents / 11 = 27.2727272... = 27 minutes added
// console.log(card1.getRemainingMinutes()); // => returns 27

// let card2 = new CallingCard(17);
// card2.addDollars(3);         // 300 cents / 17 = 17.647... = 17 minutes added
// console.log(card2.getRemainingMinutes()); // => returns 17

// ***next section 
// let card = new CallingCard(10);
// card.addDollars(1);

// let phone = new CellPhone(card);

// ***next section 
// let card = new CallingCard(10);
// card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added

// let phone = new CellPhone(card);
// console.log(phone.isTalking());  // => returns false

// phone.call("555-1212");
// console.log(phone.isTalking());  // => returns true

// phone.tick();       // simulate a minute going by
// phone.tick();       // simulate another minute going by

// phone.endCall();
// console.log(phone.isTalking());  // => returns false (because the call is over)
// console.log(phone.getHistory()); // => returns "555-1212 (2 minutes)"

// console.log(card.getRemainingMinutes()); // => return 8, because the call lasted 2 minutes;

// ***next section 
// let card = new CallingCard(10);
// card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added

// let phone = new CellPhone(card);
// phone.call("555-1111");
// phone.tick();       // simulate a minute going by
// phone.endCall();

// phone.call("555-2222");
// phone.tick();       // simulate a minute going by
// phone.tick();       // simulate a minute going by
// phone.endCall();

// console.log(phone.getHistory()); // => returns "555-1111 (1 minute), 555-2222 (2 minutes)"

// console.log(card.getRemainingMinutes()); // => return 7, because the phone used 3 minutes

// ***next section 
// let card = new CallingCard(20);
// card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added

// let phone = new CellPhone(card);
// phone.call("555-1111");
// phone.tick();       // 1 minute elapsed
// phone.tick();       // 2 minutes elapsed
// phone.endCall();

// phone.call("555-3333");
// phone.tick();       // 3 minutes elapsed
// phone.tick();       // 4 minutes elapsed
// phone.tick();       // this is the end of the 5th minute, so the call is ended

// console.log(phone.getHistory()); // => returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"

// console.log(card.getRemainingMinutes()) // => returns 0, because all 5 minutes have been used up

//  *** check cut off at 1 minute
let card = new CallingCard(20);
card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added

let phone = new CellPhone(card);
phone.call("555-1111");
phone.tick();       // 1 minute elapsed
phone.tick();       // 2 minutes elapsed
phone.tick();       // 3 minutes elapsed
phone.tick();       // 4 minutes elapsed
phone.endCall();

phone.call("555-3333");
phone.tick();       // this is the end of the 5th minute, so the call is ended

console.log(phone.getHistory()); // => returns "555-1111 (4 minutes), 555-3333 (cut of at 1 minute)"

console.log(card.getRemainingMinutes()) // => returns 0, because all 5 minutes have been used up
