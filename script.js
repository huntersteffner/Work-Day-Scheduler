'use strict'


const dateEl = $('#currentDay')
const am8 = $('#am8')
const am8text = $('.am8text')
const amOrPmEl = $('.amOrPmEl')


const date = moment().format('dddd: MMMM Do, YYYY @ h:mm:ss a')
const time = moment().format('h:mm:ss a')
const hourOfDay = moment().format('h')
const amOrPM = moment().format('a')
console.log(hourOfDay, amOrPM)

console.log()

dateEl.text(date + ' at ' + time)

// $(am8).each(()=> {
//     if($(this).children('.hour').html() === '<h2>test</h2>') {
//         console.log('It works')
//     }
// })

const amOrPmArr = amOrPmEl.split('')

const hourRow = $(am8).children('.hour')
const hourOfRow = hourRow.text().split('')
console.log(hourOfRow[0])

if(hourOfRow[0] === hourOfDay && amOrPmArr[0] === amOrPM) {
    console.log('It matches')
} else {
    console.log('it does not match')
}