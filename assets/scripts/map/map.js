'use strict'

const map = require('cssmap-europe/cssmap-europe.css')
// <script type="text/javascript" src="https://cssmapsplugin.com/5/jquery.cssmap.min.js"></script>


const loadMap = () => {
  $(document).ready(function(){

  // CSSMap
  $("#map-europe").CSSMap({
    "size": 1450,
    "tooltips": "floating-top-center",
    "responsive": "auto",
    "multipleClick": {
      "enable": true,
      "searchUrl": "search.php",
      "searchLink": "Search",
      "searchLinkVar": "region",
      "separator": "+",
      "hideSearchLink": false,
      "clicksLimit": 0
    }
  })
}

module.exports = map
