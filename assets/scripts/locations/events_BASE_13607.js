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

const onGetAllLocations = function () {
  api.getLocation('')
      .then(ui.getLocationSuccess)
      .catch(ui.getLocationError)
  // } else {
  //   console.log('Please provide a location id!')
}

// const onUpdateLocation = function (event) {
//   event.preventDefault()
//   // console.log('inside of onUpdateLocation')
//   const data = getFormFields(event.target)
//   api.updateLocation(data)
//   .then(ui.updateLocationSuccess)
//   .catch(ui.updateLocationFailure)
//   // }
// }

const onUpdateLocation = function (event) {
  event.preventDefault()
  // const place = event.target
  const data = getFormFields(event.target)
  const index = event.target.id.indexOf('-')
  const updateLocation = event.target.id.slice(index + 1)
  console.log('id here', updateLocation)
  api.updateLocation(updateLocation, data)
    .then(ui.updateLocationSuccess)
    .catch(ui.updateLocationFailure)
  // } else {
  //   console.log('Please provide a location id!')
}

const onDeleteLocation = function (event) {
  // event.preventDefault()
  // const place = event.target
  const index = event.target.id.indexOf('-')
  const deleteLocation = event.target.id.slice(index + 1)
  console.log('id here', deleteLocation)
  api.deleteLocation(deleteLocation)
    .then(ui.deleteLocationSuccess)
    .catch(ui.deleteLocationFailure)
  // } else {
  //   console.log('Please provide a location id!')
}

const addHandlers = () => {
  $('.content-div2').on('submit', '#location-create', onCreateLocation)
  $('.content-div2').on('submit', '.location-update', onUpdateLocation)
  // $('.content-div2').on('click', '#location-country-delete', onDeleteLocation)
  $('.content-div2').on('click', '.delete-location', onDeleteLocation)
  $('.content-div2').on('click', '#location-get', onGetAllLocations)
}

module.exports = {
  addHandlers
}
