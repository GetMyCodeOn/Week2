  $.ajax({
    url: "http://content.guardianapis.com/search?q=uknews&show-fields=all",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#news" ).append('<a href="' + this['webUrl'] + '"><li>' + this['webTitle'] + '</li></a>');
        $( "#news" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#news" ).append("<ul>" + this['fields'].trailText + "</ul>");

      });
    }});

  $.ajax({
    url: "http://content.guardianapis.com/search?section=football&show-fields=all",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#football" ).append('<a href="' + this['webUrl'] + '"><li>' + this['webTitle'] + '</li></a>');
        $( "#football" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#football" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});

  $.ajax({
    url: "http://content.guardianapis.com/search?section=travel&show-fields=all",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#travel" ).append('<a href="' + this['webUrl'] + '"><li>' + this['webTitle'] + '</li></a>');
        $( "#travel" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#travel" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});
