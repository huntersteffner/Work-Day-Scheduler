'use strict'

// Time variables
const date = moment().format('dddd: MMMM Do, YYYY')
const time = moment().format('h:mm:ss a')
const hourOfDay = parseInt(moment().hour())
$('#currentDay').text(date + ' at ' + time)

// Function for list that changes hours with colors marked either past, present, or future.
$('.hour-marker').each(function() {
    const curHour = parseInt($(this).attr('id'))
    const curId = `#${curHour}text`
    if(hourOfDay < curHour) {
        $(curId).addClass('future')
    } else if (hourOfDay == curHour) {
        $(curId).addClass('present')
    } else {
        $(curId).addClass('past')
    }
})

// Save button to local storage
$('.saveBtn').on('click', function() {
    const localKey = $(this).parent().attr('id')
    const localText = $(this).siblings('textarea').val()
    localStorage.setItem(localKey, localText)
    // Send message indicating it successfully saved
    $(this).text('Saved')
})

// Pull from local storage when page loads
$('.textbox').each(function() {
    const curKey = $(this).parent().attr('id')
    const savedText = localStorage.getItem(curKey)
    $(this).text(savedText)
})
