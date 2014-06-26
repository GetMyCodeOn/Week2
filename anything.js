var topics = {'1':"news",'2':"football",'3':"travel"};
  


  $ .each( topics, function( i, val ){

    

    $.ajax({

      url: "http://content.guardianapis.com/search?q="+ val +"&page-size=5&show-fields=thumbnail%2CtrailText%2CshortUrl",


      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function () {
                 $( "#" + val ).append("<br clear=all>" + '<a href="' + this['fields'].shortUrl + '"><li>' + this['webTitle'] + '</li></a>' + "</br>");
                 $( "#" + val ).append('<a href="' + this['fields'].shortUrl + '"><img src="' + this['fields'].thumbnail + '" /></a>');
                 $( "#" + val ).append("<ul>" + this['fields'].trailText + "</ul>");
        });

      }});
  });
