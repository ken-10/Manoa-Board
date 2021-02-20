var require = meteorInstall({"imports":{"api":{"rate":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/rate/index.js                                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("./rate.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rate.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/rate/rate.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Rates: () => Rates,
  RateSchema: () => RateSchema
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);

/** Create a Meteor collection. */
const Rates = new Mongo.Collection('Rates');
/** Create a schema to constrain the structure of documents associated with this collection. */

const RateSchema = new SimpleSchema({
  tutor: {
    type: String,
    allowedValues: ['-Select Tutor-', 'jim', 'don', 'weedle', 'nein']
  },
  rateYourTutor: {
    type: String,
    allowedValues: ['-Select level-', '1-very poor', '2-poor', '3-average', '4-good', '5-excellent']
  },
  wouldSelectThisTutorAgain: {
    type: String,
    allowedValues: ['-Select-', 'Yes', 'No']
  },
  owner: String,
  comment: String
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Rates.attachSchema(RateSchema);
/** Make the collection and schema available to other code. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"stuff":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/stuff/index.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("./stuff.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stuff.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/stuff/stuff.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Stuffs: () => Stuffs,
  StuffSchema: () => StuffSchema
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);

/** Create a Meteor collection. */
const Stuffs = new Mongo.Collection('Stuffs');
/** Create a schema to constrain the structure of documents associated with this collection. */

const StuffSchema = new SimpleSchema({
  tutee: String,
  courseName: String,
  month: {
    type: String,
    allowedValues: ['-Select Month-', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  day: {
    type: Number,
    allowedValues: ['-Select Day-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  },
  time: {
    type: String,
    allowedValues: ['-Select Time-', '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am', '12:00pm', '12:30pm']
  },
  owner: String,
  tutor: {
    type: String,
    allowedValues: ['-Select Tutor-', 'jim', 'don', 'weedle', 'nein']
  },
  style: {
    type: String,
    allowedValues: ['-Select Tutor Style-', 'One on One', 'Online', 'Group Session']
  }
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Stuffs.attachSchema(StuffSchema);
/** Make the collection and schema available to other code. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/stuff/user.js                                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Users: () => Users,
  UserSchema: () => UserSchema
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);

/** Create a Meteor collection. */
const Users = new Mongo.Collection('Users');
/** Create a schema to constrain the structure of documents associated with this collection. */

const UserSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  bio: String,
  position: {
    type: String,
    allowedValues: ['-Select Position-', 'Tutee', 'Tutor']
  },
  interest: {
    type: String,
    allowedValues: ['-Select Interest-', 'Civil Engineering', 'Game Design', 'Data Base']
  },
  course: {
    type: String,
    allowedValues: ['-Select Course-', 'ICS 111', 'ICS 211', 'ICS 311']
  },
  instagram: {
    type: String,
    optional: true
  },
  facebook: {
    type: String,
    optional: true
  }
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Users.attachSchema(UserSchema);
/** Make the collection and schema available to other code. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"both":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/both/index.js                                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("/imports/api/stuff");
module.link("/imports/api/rate");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"accounts.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/accounts.js                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 2);

/* eslint-disable no-console */
function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password
  });

  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
}
/** When running app for first time, pass a settings file to set up a default user account. */


if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({
      email,
      password,
      role
    }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/index.js                                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("./accounts.js");
module.link("./stuff.js");
module.link("./user.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stuff.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/stuff.js                                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 1);
let Stuffs;
module.link("../../api/stuff/stuff.js", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 2);

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}
/** Initialize the collection if empty. */


if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
/** This subscription publishes only the documents associated with the logged in user */


Meteor.publish('Stuff', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({
      owner: username
    });
  }

  return this.ready();
});
/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */

Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.find();
  }

  return this.ready();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/user.js                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 1);
let Users;
module.link("../../api/stuff/user.js", {
  Users(v) {
    Users = v;
  }

}, 2);

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Users.insert(data);
}
/** Initialize the collection if empty. */


if (Users.find().count() === 0) {
  if (Meteor.settings.defaultUser) {
    console.log('Creating default user.');
    Meteor.settings.defaultUser.map(data => addData(data));
  }
}
/** This subscription publishes only the documents associated with the logged in user */


Meteor.publish('User', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Users.find({
      owner: username
    });
  }

  return this.ready();
});
/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */

Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Users.find();
  }

  return this.ready();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"server":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/main.js                                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("/imports/startup/both");
module.link("/imports/startup/server");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvcmF0ZS9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvcmF0ZS9yYXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9zdHVmZi9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3R1ZmYvc3R1ZmYuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N0dWZmL3VzZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9ib3RoL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2FjY291bnRzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3N0dWZmLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3VzZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImxpbmsiLCJleHBvcnQiLCJSYXRlcyIsIlJhdGVTY2hlbWEiLCJNb25nbyIsInYiLCJTaW1wbGVTY2hlbWEiLCJkZWZhdWx0IiwiVHJhY2tlciIsIkNvbGxlY3Rpb24iLCJ0dXRvciIsInR5cGUiLCJTdHJpbmciLCJhbGxvd2VkVmFsdWVzIiwicmF0ZVlvdXJUdXRvciIsIndvdWxkU2VsZWN0VGhpc1R1dG9yQWdhaW4iLCJvd25lciIsImNvbW1lbnQiLCJ0cmFja2VyIiwiYXR0YWNoU2NoZW1hIiwiU3R1ZmZzIiwiU3R1ZmZTY2hlbWEiLCJ0dXRlZSIsImNvdXJzZU5hbWUiLCJtb250aCIsImRheSIsIk51bWJlciIsInRpbWUiLCJzdHlsZSIsIlVzZXJzIiwiVXNlclNjaGVtYSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwicG9zaXRpb24iLCJpbnRlcmVzdCIsImNvdXJzZSIsImluc3RhZ3JhbSIsIm9wdGlvbmFsIiwiZmFjZWJvb2siLCJNZXRlb3IiLCJBY2NvdW50cyIsIlJvbGVzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiY29uc29sZSIsImxvZyIsInVzZXJJRCIsInVzZXJuYW1lIiwiYWRkVXNlcnNUb1JvbGVzIiwidXNlcnMiLCJmaW5kIiwiY291bnQiLCJzZXR0aW5ncyIsImRlZmF1bHRBY2NvdW50cyIsIm1hcCIsImFkZERhdGEiLCJkYXRhIiwibmFtZSIsImluc2VydCIsImRlZmF1bHREYXRhIiwicHVibGlzaCIsInVzZXJJZCIsImZpbmRPbmUiLCJyZWFkeSIsInVzZXJJc0luUm9sZSIsImRlZmF1bHRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxXQUFaLEU7Ozs7Ozs7Ozs7O0FDQUFELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjO0FBQUNDLE9BQUssRUFBQyxNQUFJQSxLQUFYO0FBQWlCQyxZQUFVLEVBQUMsTUFBSUE7QUFBaEMsQ0FBZDtBQUEyRCxJQUFJQyxLQUFKO0FBQVVMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0ksT0FBSyxDQUFDQyxDQUFELEVBQUc7QUFBQ0QsU0FBSyxHQUFDQyxDQUFOO0FBQVE7O0FBQWxCLENBQTNCLEVBQStDLENBQS9DO0FBQWtELElBQUlDLFlBQUo7QUFBaUJQLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ08sU0FBTyxDQUFDRixDQUFELEVBQUc7QUFBQ0MsZ0JBQVksR0FBQ0QsQ0FBYjtBQUFlOztBQUEzQixDQUEzQixFQUF3RCxDQUF4RDtBQUEyRCxJQUFJRyxPQUFKO0FBQVlULE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGdCQUFaLEVBQTZCO0FBQUNRLFNBQU8sQ0FBQ0gsQ0FBRCxFQUFHO0FBQUNHLFdBQU8sR0FBQ0gsQ0FBUjtB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LFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0FSLFVBQU0sQ0FBQ2UsUUFBUCxDQUFnQmEsV0FBaEIsQ0FBNEJYLEdBQTVCLENBQWdDRSxJQUFJLElBQUlELE9BQU8sQ0FBQ0MsSUFBRCxDQUEvQztBQUNEO0FBQ0Y7QUFFRDs7O0FBQ0FuQixNQUFNLENBQUN1QixPQUFQLENBQWUsTUFBZixFQUF1QixTQUFTQSxPQUFULEdBQW1CO0FBQ3hDLE1BQUksS0FBS0MsTUFBVCxFQUFpQjtBQUNmLFVBQU1kLFFBQVEsR0FBR1YsTUFBTSxDQUFDWSxLQUFQLENBQWFhLE9BQWIsQ0FBcUIsS0FBS0QsTUFBMUIsRUFBa0NkLFFBQW5EO0FBQ0EsV0FBT3JCLEtBQUssQ0FBQ3dCLElBQU4sQ0FBVztBQUFFckMsV0FBSyxFQUFFa0M7QUFBVCxLQUFYLENBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQUtnQixLQUFMLEVBQVA7QUFDRCxDQU5EO0FBUUE7O0FBQ0ExQixNQUFNLENBQUN1QixPQUFQLENBQWUsWUFBZixFQUE2QixTQUFTQSxPQUFULEdBQW1CO0FBQzlDLE1BQUksS0FBS0MsTUFBTCxJQUFldEIsS0FBSyxDQUFDeUIsWUFBTixDQUFtQixLQUFLSCxNQUF4QixFQUFnQyxPQUFoQyxDQUFuQixFQUE2RDtBQUMzRCxXQUFPbkMsS0FBSyxDQUFDd0IsSUFBTixFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLYSxLQUFMLEVBQVA7QUFDRCxDQUxELEU7Ozs7Ozs7Ozs7O0FDNUJBbkUsTUFBTSxDQUFDQyxJQUFQLENBQVksdUJBQVo7QUFBcUNELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHlCQUFaLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9yYXRlLmpzJztcbiIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFJhdGVzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1JhdGVzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBSYXRlU2NoZW1hID0gbmV3IFNpbXBsZVNjaGVtYSh7XG4gIHR1dG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGFsbG93ZWRWYWx1ZXM6IFsnLVNlbGVjdCBUdXRvci0nLCAnamltJywgJ2RvbicsICd3ZWVkbGUnLCAnbmVpbiddLFxuICB9LFxuICByYXRlWW91clR1dG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGFsbG93ZWRWYWx1ZXM6IFsnLVNlbGVjdCBsZXZlbC0nLCAnMS12ZXJ5IHBvb3InLCAnMi1wb29yJywgJzMtYXZlcmFnZScsICc0LWdvb2QnLCAnNS1leGNlbGxlbnQnXSxcbiAgfSxcbiAgd291bGRTZWxlY3RUaGlzVHV0b3JBZ2Fpbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBhbGxvd2VkVmFsdWVzOiBbJy1TZWxlY3QtJywgJ1llcycsICdObyddLFxuICB9LFxuICBvd25lcjogU3RyaW5nLFxuICBjb21tZW50OiBTdHJpbmcsXG59LCB7IHRyYWNrZXI6IFRyYWNrZXIgfSk7XG5cbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXG5SYXRlcy5hdHRhY2hTY2hlbWEoUmF0ZVNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBSYXRlcywgUmF0ZVNjaGVtYSB9O1xuIiwiaW1wb3J0ICcuL3N0dWZmLmpzJztcbiIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFN0dWZmcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdTdHVmZnMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFN0dWZmU2NoZW1hID0gbmV3IFNpbXBsZVNjaGVtYSh7XG4gIHR1dGVlOiBTdHJpbmcsXG4gIGNvdXJzZU5hbWU6IFN0cmluZyxcbiAgbW9udGg6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgYWxsb3dlZFZhbHVlczogWyctU2VsZWN0IE1vbnRoLScsICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJyxcbiAgICAgICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICB9LFxuICBkYXk6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgYWxsb3dlZFZhbHVlczogWyctU2VsZWN0IERheS0nLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LFxuICAgICAgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLFxuICAgICAgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxXSxcbiAgfSxcbiAgdGltZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBhbGxvd2VkVmFsdWVzOiBbJy1TZWxlY3QgVGltZS0nLCAnOTowMGFtJywgJzk6MzBhbScsICcxMDowMGFtJyxcbiAgICAgICcxMDozMGFtJywgJzExOjAwYW0nLCAnMTE6MzBhbScsICcxMjowMHBtJywgJzEyOjMwcG0nXSxcbn0sXG4gIG93bmVyOiBTdHJpbmcsXG4gIHR1dG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGFsbG93ZWRWYWx1ZXM6IFsnLVNlbGVjdCBUdXRvci0nLCAnamltJywgJ2RvbicsICd3ZWVkbGUnLCAnbmVpbiddLFxuICB9LFxuICBzdHlsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBhbGxvd2VkVmFsdWVzOiBbJy1TZWxlY3QgVHV0b3IgU3R5bGUtJywgJ09uZSBvbiBPbmUnLCAnT25saW5lJywgJ0dyb3VwIFNlc3Npb24nXSxcbiAgfSxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cblN0dWZmcy5hdHRhY2hTY2hlbWEoU3R1ZmZTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgU3R1ZmZzLCBTdHVmZlNjaGVtYSB9O1xuIiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IFNpbXBsZVNjaGVtYSBmcm9tICdzaW1wbC1zY2hlbWEnO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcblxuLyoqIENyZWF0ZSBhIE1ldGVvciBjb2xsZWN0aW9uLiAqL1xuY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignVXNlcnMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgZmlyc3ROYW1lOiBTdHJpbmcsXG4gIGxhc3ROYW1lOiBTdHJpbmcsXG4gIGJpbzogU3RyaW5nLFxuICBwb3NpdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBhbGxvd2VkVmFsdWVzOiBbJy1TZWxlY3QgUG9zaXRpb24tJywgJ1R1dGVlJywgJ1R1dG9yJ10sXG4gIH0sXG4gIGludGVyZXN0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGFsbG93ZWRWYWx1ZXM6IFsnLVNlbGVjdCBJbnRlcmVzdC0nLCAnQ2l2aWwgRW5naW5lZXJpbmcnLCAnR2FtZSBEZXNpZ24nLCAnRGF0YSBCYXNlJ10sXG4gIH0sXG4gIGNvdXJzZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBhbGxvd2VkVmFsdWVzOiBbJy1TZWxlY3QgQ291cnNlLScsICdJQ1MgMTExJywgJ0lDUyAyMTEnLCAnSUNTIDMxMSddLFxuICB9LFxuICBpbnN0YWdyYW06IHsgdHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZSB9LFxuICBmYWNlYm9vazogeyB0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlIH0sXG59LCB7IHRyYWNrZXI6IFRyYWNrZXIgfSk7XG5cbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXG5Vc2Vycy5hdHRhY2hTY2hlbWEoVXNlclNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBVc2VycywgVXNlclNjaGVtYSB9O1xuIiwiaW1wb3J0ICcvaW1wb3J0cy9hcGkvc3R1ZmYnO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvcmF0ZSc7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IEFjY291bnRzIH0gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSB7XG4gIGNvbnNvbGUubG9nKGAgIENyZWF0aW5nIHVzZXIgJHtlbWFpbH0uYCk7XG4gIGNvbnN0IHVzZXJJRCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICBlbWFpbDogZW1haWwsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICB9KTtcbiAgaWYgKHJvbGUgPT09ICdhZG1pbicpIHtcbiAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklELCAnYWRtaW4nKTtcbiAgfVxufVxuXG4vKiogV2hlbiBydW5uaW5nIGFwcCBmb3IgZmlyc3QgdGltZSwgcGFzcyBhIHNldHRpbmdzIGZpbGUgdG8gc2V0IHVwIGEgZGVmYXVsdCB1c2VyIGFjY291bnQuICovXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRoZSBkZWZhdWx0IHVzZXIocyknKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzLm1hcCgoeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGUgfSkgPT4gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIHJvbGUpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnQ2Fubm90IGluaXRpYWxpemUgdGhlIGRhdGFiYXNlISAgUGxlYXNlIGludm9rZSBtZXRlb3Igd2l0aCBhIHNldHRpbmdzIGZpbGUuJyk7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9hY2NvdW50cy5qcyc7XG5pbXBvcnQgJy4vc3R1ZmYuanMnO1xuaW1wb3J0ICcuL3VzZXIuanMnO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBTdHVmZnMgfSBmcm9tICcuLi8uLi9hcGkvc3R1ZmYvc3R1ZmYuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcbiAgU3R1ZmZzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoU3R1ZmZzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBkYXRhLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YS5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnU3R1ZmYnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IE1ldGVvci51c2Vycy5maW5kT25lKHRoaXMudXNlcklkKS51c2VybmFtZTtcbiAgICByZXR1cm4gU3R1ZmZzLmZpbmQoeyBvd25lcjogdXNlcm5hbWUgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1N0dWZmQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBTdHVmZnMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi8uLi9hcGkvc3R1ZmYvdXNlci5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xuICBVc2Vycy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKFVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFVzZXIpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCB1c2VyLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0VXNlci5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnVXNlcicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lO1xuICAgIHJldHVybiBVc2Vycy5maW5kKHsgb3duZXI6IHVzZXJuYW1lIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdTdHVmZkFkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcbiAgICByZXR1cm4gVXNlcnMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9ib3RoJztcbmltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXInO1xuIl19
