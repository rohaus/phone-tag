define(['handlebars'], function(Handlebars){
  var content =
    "<div data-role='page' id='home'>"+
      "<div data-role='header'>"+
        "<h1>Home</h1>"+
        "<a class='logout' href='/logout'>Logout</a>"+
      "</div>"+
      "<div data-role='content'>"+
        "<h3>Welcome!</h3>"+
        "<p><a class='game' href='#'>Join</a></p>"+
        "<p><a class='leaderboard' href='#leaderboard'>Leaderboard</a></p>"+
      "</div>"+
    "</div>"+

    "<div data-role='page' id='leaderboard'>"+
      "<div data-role='header'>"+
        "<h1>Leaderboard</h1>"+
        "<a class='home' href='#'>Back</a>"+
        "<a class='logout' href='/logout'>Logout</a>"+
      "</div>"+
      "<div data-role='content'>"+
        "<p>Some data should be here</p>"+
      "</div>"+
    "</div>";

  return Handlebars.compile(content);
});
