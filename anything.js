  $.ajax({
    url: "http://content.guardianapis.com/search?q=uknews&page-size=5&show-fields=trailText%2Cthumbnail",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#news" ).append('<a href="' + this['webUrl'] + '"><li>' + this['webTitle'] + '</li></a>');
        $( "#news" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#news" ).append("<ul>" + this['fields'].trailText + "</ul>");

      });
    }});

  $.ajax({
    url: "http://content.guardianapis.com/search?q=football&page-size=5&show-fields=trailText%2Cthumbnail",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#football" ).append('<a href="' + this['webUrl'] + '"><li>' + this['webTitle'] + '</li></a>');
        $( "#football" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#football" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});

  $.ajax({
    url: "http://content.guardianapis.com/search?q=travel&page-size=5&show-fields=trailText%2Cthumbnail",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#travel" ).append('<a href="' + this['webUrl'] + '"><li>' + this['webTitle'] + '</li></a>');
        $( "#travel" ).append('<img src="' + this['fields'].thumbnail + '" />');
        $( "#travel" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});
