'use strict'

// config accesses base_URI for dev or production environment
const config = require('../config')
// store accesses the client global store object
const store = require('../store')

const createLocation = (data) => {
  console.log('look', data)
  return $.ajax({
    url: config.apiOrigin + '/create-place',
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
    url: config.apiOrigin + '/places/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteLocation = (data) => {
  console.log('delete is here', data)
  return $.ajax({
    url: config.apiOrigin + '/destroy-place/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateLocation = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/update-place/' + data.place.id,
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
