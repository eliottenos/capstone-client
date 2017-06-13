// const store = require('./store')

//
// VIEW INITIALIZERS
//

// initView()
// initializes view containers and event handlers

const initView = () => {
  console.log('hit render view')

  // render private view to navbar-div
  renderView('.navbar-div', 'nav-public')
  // console.log('hit render view')
  // user sign up / sign in forms
  renderView('.content-div', 'form-auth')
  // add event handlers for view contoller elements
  addHandlers()
}

//
// VIEW RENDERING FUNCTIONS
//

// renderView(element, hbsFile, params)
// renders the template and replaces the element

const renderView = (element, hbsFile, params) => {
  const template = require(`./templates/${hbsFile}.handlebars`)
  const content = template(params)
  $(element).html(content)
}

// replaceView(element, hbsFile, params)
// renders the template and replaces the element

const replaceView = (element, hbsFile, params) => {
  const template = require(`./templates/${hbsFile}.handlebars`)
  const content = template(params)
  $(element).replaceWith(content)
}

// appendView(element, filepath, params)
// renders the template and appends it to the element

const appendView = (element, hbsFile, params) => {
  const template = require(`./templates/${hbsFile}.handlebars`)
  const content = template(params)
  $(element).append(content)
}

// prependView(element, filepath, params)
// renders the template and appends it to the element

const prependView = (element, hbsFile, params) => {
  const template = require(`./templates/${hbsFile}.handlebars`)
  const content = template(params)
  $(element).prepend(content)
}

// clearView(element)
// clears the html from the specified element

const clearView = (element) => {
  $(element).html('')
}

//
// PUBLIC AND PRIVATE MODES
//

// setPublicMode()
// set public mode for navbar and content area

const setPublicMode = () => {
  // closeAlert()
  renderView('.navbar-div', 'nav-public')
  renderView('.content-div', 'form-auth')
  clearView('.temp-div')
}

const setPrivateMode = () => {
  // closeAlert()
  renderView('.navbar-div', 'nav-private')
  // initTempView()
}

//
// VALIDATION & ALERT METHODS
//

// formAlert(form, field)
// triggers form input validation alert

const formAlert = (form, field) => {
  clearFormAlerts(form)
  // apply alert classes to specfic input
  $(field).closest('.form-group').addClass('has-warning has-feedback')
  // add alert icon to specific input
  $(field).closest('.input-group').find('.form-control').after(`<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>`)
  // show help text for specific input
  $(field).closest('.form-group').find('.help-block').show()
}

// clearFormFields(form)
// clear all values from form fields

const clearForm = (form) => {
  // clear form field alerts
  clearFormAlerts(form)
  // clear field values
  $(form).find('.form-control').val('')
}

// clearFormAlerts(form)
// clear all feedback classes and icons from form fields

const clearFormAlerts = (form) => {
  // clear all alert classes from inputs
  $(form).find('.form-group').removeClass('has-warning has-feedback')
  // remove all alert class icons from inputs
  $(form).find('.form-group .form-control-feedback').remove()
  // hide any visible help text
  $(form).find('.help-block').hide()
}

// showAlert(mode, message)
// displays global alert box for info or warning

const showAlert = (mode, message) => {
  // convert mode label to bootstrap class
  mode = (mode === 'error') ? 'danger' : 'info'
  // if there's already an alert
  if ($('.alert').length) {
    // replace the existing alert
    replaceView('.alert', 'alert', { mode: mode, message: message })
  } else {
    // insert a new alert
    prependView('.content-div', 'alert', { mode: mode, message: message })
  }
}

// closeError()
// close global error box but not info alerts

const closeError = () => {
  $('.alert-danger').alert('close')
}

// closeAlert()
//  close all global alert boxes

const closeAlert = () => {
  $('.alert').alert('close')
}

// showChangePasswordSuccess()
// password changed successfully

const showChangePasswordSuccess = () => {
  // collapse change password dropdown
  $('#change-password-nav').dropdown('toggle')
  $('.navbar-collapse').collapse('hide')
  // clear change password form fields
  $('#change-password input').val('')
  // display successful alert message
  showAlert('info', 'Your password is changed. Hope you remember it.')
}

// showChangePasswordFailure()
// password change failed

const showChangePasswordFailure = () => {
  // collapse change password dropdown
  $('#change-password-nav').dropdown('toggle')
  $('.navbar-collapse').collapse('hide')
  // clear change password form fields
  $('#change-password input').val('')
  // display successful alert message
  showAlert(`error`, `For highly complex reasons, your password couldn't be changed.`)
}

const addHandlers = () => {
  // DROPDOWN MENU EVENTS
  // add animation to dropdown expand
  $('.navbar-div').on('show.bs.dropdown', '.dropdown', (event) => {
    $(event.target).find('.dropdown-menu').first().stop(true, true).slideDown(250)
  })

  // add animation to dropdown collapse
  $('.navbar-div').on('hide.bs.dropdown', '.dropdown', (event) => {
    event.preventDefault()
    $(event.target).find('.dropdown-menu').first().stop(true, true).slideUp(
      250, () => {
        // close dropdown menu
        $('.dropdown').removeClass('open')
        $('.dropdown').find('.dropdown-toggle').attr('aria-expanded', 'false')
        // clear fields
        clearForm($(event.target).find('.form').val('id'))
      })
  })
}

module.exports = {
  initView,
  setPublicMode,
  setPrivateMode,
  showAlert,
  formAlert,
  clearForm,
  clearFormAlerts,
  closeError,
  closeAlert,
  showChangePasswordSuccess,
  showChangePasswordFailure,
  appendView
}
