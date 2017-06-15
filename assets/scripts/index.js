'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const view = require('./view')
const authEvents = require('./auth/events')
const locationEvents = require('./locations/events')
// const CSSMap = require('cssmap-europe/cssmap-europe.css')

$(() => {
  setAPIOrigin(location, config)
  view.initView()
  authEvents.addHandlers()
  locationEvents.addHandlers()
  // const loadMap = () => {
    // // $(document).ready(function () {
    // // CSSMap
    // $('#map-europe').CSSMap({
    //     'size': 1450,
    //     'tooltips': 'floating-top-center',
    //     'responsive': 'auto',
    //     'multipleClick': {
    //       'enable': true,
    //       'searchUrl': 'search.php',
    //       'searchLink': 'Search',
    //       'searchLinkVar': 'region',
    //       'separator': '' + '',
    //       'hideSearchLink': false,
    //       'clicksLimit': 0
    //     }
    //   })
}
)

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
