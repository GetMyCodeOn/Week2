  $.ajax({
    url: "http://content.guardianapis.com/search?q=news&show-fields=all",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#news" ).append('<a href="' + this['webUrl'] + '"><h5>' + this['webTitle'] + '<h5></a>');
        $( "#news" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#news" ).append("<ul>" + this['fields'].trailText + "</ul>");

      });
    }});

  $.ajax({
    url: "http://content.guardianapis.com/search?section=football&show-fields=all",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#football" ).append('<a href="' + this['webUrl'] + '"><h5>' + this['webTitle'] + '<h5></a>');
        $( "#football" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#football" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});

  $.ajax({
    url: "http://content.guardianapis.com/search?section=travel&show-fields=all",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#travel" ).append('<a href="' + this['webUrl'] + '"><h5>' + this['webTitle'] + '<h5></a>');
        $( "#travel" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#travel" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});
