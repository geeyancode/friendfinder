// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friendData");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  app.post("/api/friends", function(req, res) {
    // res.json(req.body.scores);
    
 
    var user = req.body;
    for (var i = 0; i < user.scores.length; i++){
      user.scores[i] = parseInt (user.scores[i]);
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
        
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }
   

    // after finding match, add user to friend array
  
    friends.push(user);
   
    // send back to browser the best friend match
 res.json(friends[bestFriendIndex]);
  });
};
