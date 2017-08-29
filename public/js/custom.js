$(document).ready(function () {
  activateMorphText()
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