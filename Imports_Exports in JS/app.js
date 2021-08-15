// Default Export
import prsn from "./person.js"; // You can name it whatever you want
//OR
//import person from './person.js'

// Named Export
import { baseData } from "./utility.js"; // Name is defined
import { clean } from "./utility.js";
// OR
// import { baseData, clean } from './utility.js'
//import { baseData as data } from './utility.js'

// To import all exports
import * as utit from "./utility.js";
// can be accessed as
// util.clean OR util.baseData
