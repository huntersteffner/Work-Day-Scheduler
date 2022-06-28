'use strict'



const dateEl = $('#currentDay')
const am8 = $('#am8')
const am8text = $('.am8text')
const amOrPmEl = $('.amOrPmEl')

const nine = $('#nine')


const date = moment().format('dddd: MMMM Do, YYYY')
const time = moment().format('h:mm:ss a')
const hourOfDay = parseInt(moment().hour())

console.log()

dateEl.text(date + ' at ' + time)


console.log(moment().hour())

$('.hour-marker').each(function() {
    const curHour = parseInt($(this).attr('id'))
    console.log(curHour)
    const curId = `#${curHour}text`
    console.log(curId)

    if(hourOfDay < curHour) {
        $(curId).addClass('future')
    } else if (hourOfDay == curHour) {
        $(curId).addClass('present')
    } else {
        $(curId).addClass('past')
    }
})

// $('.save').each(function(e) {
//     e.target.on('click', function() {
//         const curSave = $(this).attr('id')
//         console.log(curSave)

//     })
// })

$('.save').on('click', function(e) {
    const curSave = $(this).attr('id')

    const localKey = $(this).parent().attr('id')
    const localText = $(this).siblings('textarea').val()
    
    console.log(`${localKey}: ${localText}`)
    localStorage.setItem(localKey, localText)

    $(this).text('Saved')
})

$('.textbox').each(function() {
    const curKey = $(this).parent().attr('id')
    // console.log(curKey)
    const savedText = localStorage.getItem(curKey)
    console.log(savedText)
    $(this).text(savedText)
})
