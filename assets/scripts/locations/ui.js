'use strict'

const store = require('../store.js')
// const showLocationTemplate = require('../templates/locations.handlebars')

const createLocationSuccess = (data) => {
  // console.log(data)
  $('.createSuccess').empty()
  $('.createBlank1').empty()
  $('.createBlank2').empty()
  $('.createSuccess').text('You successully created a location!')
  $('.createBlank1').text('Country: ')
  $('.createBlank1').append($(data)[0].place.country)
  $('.createBlank2').text('Notes: ')
  $('.createBlank2').append($(data)[0].place.notes)
  $('.form-reset').trigger('reset')
}

const createLocationFailure = (error) => {
  console.log('error on create location in ', error)
}

const getLocationSuccess = (data) => {
  console.log('this one', data)
  console.log($(data)[0].location)
  $('.getSuccess').empty()
  $('.getBlank1').empty()
  $('.getBlank2').empty()
  $('.getSuccess').text('You successully retreived a location!')
  $('.getBlank1').append($(data)[0].location.country)
  $('.getBlank2').append($(data)[0].location.notes)
  $('.form-reset').trigger('reset')
}

const getLocationFailure = (error) => {
  console.log('error on get location in ', error)
  $('.getSuccess').empty()
  $('.getBlank1').empty()
  $('.getBlank2').empty()
  $('.getSuccess').text('Cannot find location!')
}

const updateLocationSuccess = (data) => {
  console.log(data)
  $('.updateSuccess').empty()
  $('.updateBlank1').empty()
  $('.updateBlank2').empty()
  $('.updateSuccess').text('You updated a location!')
  $('.updateBlank1').append($(data)[0].location.country)
  $('.updateBlank2').append($(data)[0].location.notes)
  $('.form-reset').trigger('reset')
}

const updateLocationFailure = (error) => {
  console.log('error on update location in ', error)
}

const deleteLocationSuccess = (data) => {
  console.log('success delete location')
  $('.deleteLocation').text('You deleted a location!')
  $('.form-reset').trigger('reset')
}

const deleteLocationFailure = (error) => {
  console.log('error on delete location in ', error)
}

module.exports = {
  createLocationSuccess,
  createLocationFailure,
  getLocationSuccess,
  getLocationFailure,
  updateLocationSuccess,
  updateLocationFailure,
  deleteLocationSuccess,
  deleteLocationFailure
}
