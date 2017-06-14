'use strict'

// config accesses base_URI for dev or production environment
const config = require('../config')
// store accesses the client global store object
const store = require('../store')

// signUp(data)
//  POST to base_URI + '/sign-up'

const createLocation = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/create-location',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getLocation = (data) => {
  // debugger
  console.log('api.data', data)
  console.log('api.data.id', data.id)
  return $.ajax({
    url: config.apiOrigin + '/locations/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteLocation = (data) => {
  console.log('data', data)
  return $.ajax({
    url: config.apiOrigin + '/destroy-location/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateLocation = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/update-location/' + data.location.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createLocation,
  getLocation,
  deleteLocation,
  updateLocation
}
