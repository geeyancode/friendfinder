// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      name: "Gian",
      photo: "https://pixel.nymag.com/imgs/fashion/daily/2019/04/12/12-brad-pitt-meeting.w330.h330.jpg",
      scores:[
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5
        ]
      },
      

      ];
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;