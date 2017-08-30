$(document).ready(function () {
  activateMorphText()
  setCurrentYear()
})

function activateMorphText () {
  const $morphTextContainer = $('#morphtext')
  $morphTextContainer
    .find('span')
    .Morphext({
      animation: "rubberBand",
      separator: ",",
      speed: 3000,
      complete: function () {
      },
    })

  // unhide the text
  $morphTextContainer.removeClass('hidden')
}

function setCurrentYear () {
  // <span class="logic-current-year">2018</span>
  // needs to be updated to current year
  const el = document.querySelector('.logic-current-year')

  el.innerHTML = new Date().getFullYear()
}