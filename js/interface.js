$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#thermostatCurrentTemperature').text(thermostat.currentTemperature);
  }

  updateTemperature();

  $('#thermostatIncrease').on('click', (function() {
    thermostat.increase();
    updateTemperature();
  }))

  $('#thermostatDecrease').on('click', (function() {
    thermostat.decrease();
    updateTemperature();
  }))

  $('#thermostatReset').on('click', (function() {
    thermostat.reset();
    updateTemperature();
  }))

  $('#thermostatTogglePowerSave').on('click', (function() {
    thermostat.togglePowerSave();
    updateTemperature();
  }))
})
