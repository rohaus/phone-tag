define(['backbone'], function(Backbone){
  var App = Backbone.Model.extend({
    initialize: function(){
      var that = this;
      this.socket = io.connect();
      // this.socket = io.connect('http://hadooken.herokuapp.com');
      this.on('setUser', this.setUser, this);
      this.socket.on('renderGameViews', function(data){
        that.renderGameViews(data, that);
      });
    },

    setUser: function(){
      this.set('user', $('input').val());
      this.trigger('loggedIn');
    },

    renderGameViews: function(data, that){
      that.set('currentGameRoomID', data.gameID);
      var currentGame = that.get('currentGame');
      var currentPlayer = currentGame.get('currentPlayer');
      currentGame.set('timeLimit', data.timeLimit);
      currentGame.set('gameID', data.gameID);
      currentPlayer.set('gameID', data.gameID);
      setTimeout(function(){
        that.trigger('renderGameViews');
      }, 5000);
    }
  });
  return App;
});
