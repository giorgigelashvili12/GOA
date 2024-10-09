// 1) შექმენით მთავარი  app.js package.json რომეშლიც რესურესებში მოცემლ ინოფრმაციას ჩავწეთ 
import { addition } from './data/algorithms.js';

console.log(addition(5, 6));

// 2) შექმნით ფოლდერი modules დაარქვით რომელში export -ს გაუკეთებთ თქვენს arr --რომელიც 3 ლემენტიანი იქნება 
import { demoArr } from './data/modules.js';

console.log(demoArr);