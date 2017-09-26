function cssLoaded() {
  display_css_properties_of('.page_container', '#show_css', ["display","grid-template-columns", "grid-template-rows", "grid-template-areas"]);
  let path = $('#grid_sheet').attr('href');
  let filename = path.replace('cssgrid_files/','');
  $('#show_name').html("Stylesheet " + filename );
}


function display_css_properties_of(to_inspect, display, list_of_props) {
  var s1 = "";
  list_of_props.forEach(function(key) {
    s1 += "<b>" + key + "</b>: " +  ($(to_inspect).css(key) || 0) + ";<br>\n";
  })
  $(display).html(s1);
}      


function set_css(name, callback, display) {
  let filename =  name + '.css';
  let path = 'cssgrid_files/' + filename;
  $('#grid_sheet').attr({'href': path});

  let img = document.createElement('img');
  img.onerror = function(){  
    console.log(`stylesheet ${filename} was loaded !`);
    $(display).html("Stylesheet " + filename);
    callback();
  };
  img.src = filename;
}