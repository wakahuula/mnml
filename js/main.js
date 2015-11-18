(function() {
  backgroundColorPicker = $('#backgroundColorPicker');
  submitButton = $('#submitButton');
  loadOptions();
  submitHandler();
})();

var backgroundColorPicker, submitButton;

function submitHandler() {
  submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });
}

function loadOptions() {
  if (localStorage.backgroundColor) {
    backgroundColorPicker[0].value = localStorage.backgroundColor;
  }
}

function getAndStoreConfigData() {
  var options = {
    backgroundColor: backgroundColorPicker.val(),
  };

  localStorage.backgroundColor = options.backgroundColor;

  console.log('Got options: ' + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
