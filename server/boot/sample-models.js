module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;


  User.create([
    {username: 'Sakthi', email: 'sakthi@gmail.com', password: 'admin123', firstname 'sakthi', lastname: 'vel'},
    {username: 'suresh', email: 'john@doe.com', password: 'opensesame', firstname 'sakthi', lastname: 'vel'},
    {username: 'sudhan', email: 'john@doe.com', password: 'opensesame', firstname 'sakthi', lastname: 'vel'}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);


    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[2].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });
  });
};
