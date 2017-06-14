const getFormFields = require(`../../../lib/get-form-fields`)
// const locationListing = require('../templates/locations.handlebars')

const api = require('./api')
const ui = require('./ui')

const onCreateLocation = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createLocation(data)
    .then(ui.createLocationSuccess)
    .catch(ui.createLocationFailure)
}

const onGetLocation = function (event) {
  console.log(event)
  // debugger
  event.preventDefault()
  const location = getFormFields(event.target).location
  // debugger
  console.log('location', location)
  if (location.id.length !== 0) {
    api.getLocation(location)
      .then(ui.getLocationSuccess)
      .catch(ui.getLocationError)
  // } else {
  //   console.log('Please provide a location id!')
  }
}

const onUpdateLocation = function (event) {
  event.preventDefault()
  // console.log('inside of onUpdateLocation')
  const data = getFormFields(event.target)
  api.updateLocation(data)
  .then(ui.updateLocationSuccess)
  .catch(ui.updateLocationFailure)
  // }
}

const onDeleteLocation = function (event) {
  event.preventDefault()
  const location = getFormFields(event.target).location
  console.log('location', location)
  if (location.id.length !== 0) {
    api.deleteLocation(location)
    .then(ui.updateLocationSuccess)
    .catch(ui.updateLocationFailure)
  // } else {
  //   console.log('Please provide a location id!')
  }
}

const addHandlers = () => {
  $('#location-create').on('submit', onCreateLocation)
  $('#location-update').on('submit', onUpdateLocation)
  $('#location-delete').on('submit', onDeleteLocation)

  $('#location-get').on('submit', onGetLocation)
}

module.exports = {
  addHandlers
}
