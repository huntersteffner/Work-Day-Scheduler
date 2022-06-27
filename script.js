'use strict'
const dateEl = $('#currentDay')




const time = moment().format('dddd: MMMM Do, YYYY')
console.log(time)

dateEl.text(time)