var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function() {
  var attrs = {"style":"background-color: white"};
  for (var prop in attrs) {
    document.body.setAttribute(prop, attrs[prop]);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"style.css":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/style.css                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// These styles have already been applied to the document.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("/imports/startup/both");
module.link("../imports/startup/client");
module.link("./style.css");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"rate":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/rate/index.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./rate.js");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rate.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/rate/rate.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Rates: function () {
    return Rates;
  },
  RateSchema: function () {
    return RateSchema;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var SimpleSchema;
module.link("simpl-schema", {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 1);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);

/** Create a Meteor collection. */
var Rates = new Mongo.Collection('Rates');
/** Create a schema to constrain the structure of documents associated with this collection. */

var RateSchema = new SimpleSchema({
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"stuff":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/stuff/index.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./stuff.js");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stuff.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/stuff/stuff.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Stuffs: function () {
    return Stuffs;
  },
  StuffSchema: function () {
    return StuffSchema;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var SimpleSchema;
module.link("simpl-schema", {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 1);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);

/** Create a Meteor collection. */
var Stuffs = new Mongo.Collection('Stuffs');
/** Create a schema to constrain the structure of documents associated with this collection. */

var StuffSchema = new SimpleSchema({
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/stuff/user.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Users: function () {
    return Users;
  },
  UserSchema: function () {
    return UserSchema;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var SimpleSchema;
module.link("simpl-schema", {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 1);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);

/** Create a Meteor collection. */
var Users = new Mongo.Collection('Users');
/** Create a schema to constrain the structure of documents associated with this collection. */

var UserSchema = new SimpleSchema({
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"both":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/both/index.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("/imports/api/stuff");
module.link("/imports/api/rate");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/index.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./startup.jsx");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/startup.jsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var render;
module.link("react-dom", {
  render: function (v) {
    render = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var App;
module.link("../../ui/layouts/App.jsx", {
  "default": function (v) {
    App = v;
  }
}, 3);

/** Startup the application by rendering the App layout component. */
Meteor.startup(function () {
  render(React.createElement(App, null), document.getElementById('root')); // eslint-disable-line
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"ui":{"components":{"AdminFooter.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AdminFooter.jsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Container, Grid, Header, List, Segment;
module.link("semantic-ui-react", {
  Container: function (v) {
    Container = v;
  },
  Grid: function (v) {
    Grid = v;
  },
  Header: function (v) {
    Header = v;
  },
  List: function (v) {
    List = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 1);

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
var Footer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Footer, _React$Component);

  function Footer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function () {
    function render() {
      var menuStyle = {
        fontSize: 15
      };
      var menuStyle1 = {
        fontSize: 20,
        paddingBottom: 5
      };
      return React.createElement("footer", null, React.createElement("div", {
        className: "footer-background"
      }, React.createElement(Segment, {
        inverted: true,
        vertical: true,
        style: {
          padding: '2em 0em',
          marginTop: 20,
          marginBottom: 10
        }
      }, React.createElement(Container, null, React.createElement(Grid, {
        divided: true,
        inverted: true,
        stackable: true
      }, React.createElement(Grid.Row, null, React.createElement(Grid.Column, {
        width: 3
      }, React.createElement(Header, {
        inverted: true,
        as: "h4",
        content: " NAVIGATION",
        style: menuStyle1
      }), React.createElement(List, {
        link: true,
        inverted: true
      }, React.createElement(List.Item, {
        style: menuStyle,
        as: "a"
      }, "Contact Us"), React.createElement(List.List, null, React.createElement(List.Item, {
        as: "li",
        icon: "mail"
      }, "jiayingf@hawaii.edu"), React.createElement(List.Item, {
        as: "li",
        icon: "mail"
      }, "qiqingl@hawaii.edu"), React.createElement(List.Item, {
        as: "li",
        icon: "mail"
      }, "cl33@hawaii.edu")), React.createElement(List.Item, {
        style: menuStyle,
        as: "a"
      }, "About Us"))), React.createElement(Grid.Column, {
        width: 3
      }, React.createElement(Header, {
        inverted: true,
        as: "h4",
        content: "DESCRIPTION",
        style: menuStyle1
      }), React.createElement(List, {
        link: true,
        inverted: true
      }, React.createElement(List.Item, {
        style: menuStyle,
        as: "a"
      }, "How To Access"), React.createElement(List.Item, {
        style: menuStyle,
        as: "a"
      }, "Available Course"))), React.createElement(Grid.Column, {
        width: 7
      }, React.createElement(Header, {
        as: "h4",
        inverted: true,
        style: menuStyle1
      }, "CONNECT"), React.createElement(List, {
        link: true,
        inverted: true,
        style: menuStyle
      }, React.createElement(List.Item, null, React.createElement("a", {
        href: "http://courses.ics.hawaii.edu/ics314f18/morea/final-project/ experience-final-project-m1.html"
      }, "Final Project")), React.createElement(List.Item, null, React.createElement("a", {
        href: "https://studyclub2018.github.io/"
      }, "View on Github"))))))))));
    }

    return render;
  }();

  return Footer;
}(React.Component);

module.exportDefault(Footer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Footer.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Footer.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Container, Grid, Header, List, Segment;
module.link("semantic-ui-react", {
  Container: function (v) {
    Container = v;
  },
  Grid: function (v) {
    Grid = v;
  },
  Header: function (v) {
    Header = v;
  },
  List: function (v) {
    List = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 1);

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
var Footer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Footer, _React$Component);

  function Footer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function () {
    function render() {
      var menuStyle = {
        fontSize: 17
      };
      var menuStyle1 = {
        fontSize: 22,
        paddingBottom: 10
      };
      return React.createElement("footer", null, React.createElement("div", {
        className: "footer-background"
      }, React.createElement(Segment, {
        inverted: true,
        vertical: true,
        style: {
          padding: '5em 0em'
        }
      }, React.createElement(Container, null, React.createElement(Grid, {
        divided: true,
        inverted: true,
        stackable: true
      }, React.createElement(Grid.Row, null, React.createElement(Grid.Column, {
        width: 3
      }, React.createElement(Header, {
        inverted: true,
        as: "h4",
        content: " NAVIGATION",
        style: menuStyle1
      }), React.createElement(List, {
        link: true,
        inverted: true
      }, React.createElement(List.Item, {
        style: menuStyle,
        as: "a"
      }, "Contact Us"), React.createElement(List.List, null, React.createElement(List.Item, {
        as: "li",
        icon: "mail"
      }, "jiayingf@hawaii.edu"), React.createElement(List.Item, {
        as: "li",
        icon: "mail"
      }, "qiqingl@hawaii.edu"), React.createElement(List.Item, {
        as: "li",
        icon: "mail"
      }, "cl33@hawaii.edu")), React.createElement(List.Item, {
        style: menuStyle,
        as: "a"
      }, "About Us"))), React.createElement(Grid.Column, {
        width: 3
      }, React.createElement(Header, {
        inverted: true,
        as: "h4",
        content: "DESCRIPTION",
        style: menuStyle1
      }), React.createElement(List, {
        link: true,
        inverted: true
      }, React.createElement(List.Item, {
        style: menuStyle,
        as: "a"
      }, "How To Access"), React.createElement(List.Item, {
        style: menuStyle,
        as: "a"
      }, "Available Course"))), React.createElement(Grid.Column, {
        width: 7
      }, React.createElement(Header, {
        as: "h4",
        inverted: true,
        style: menuStyle1
      }, "CONNECT"), React.createElement(List, {
        link: true,
        inverted: true,
        style: menuStyle
      }, React.createElement(List.Item, null, React.createElement("a", {
        href: "http://courses.ics.hawaii.edu/ics314f18/morea/final-project/ experience-final-project-m1.html"
      }, "Final Project")), React.createElement(List.Item, null, React.createElement("a", {
        href: "https://studyclub2018.github.io/"
      }, "View on Github"))))))))));
    }

    return render;
  }();

  return Footer;
}(React.Component);

module.exportDefault(Footer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NavBar.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/NavBar.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 3);
var withRouter, NavLink;
module.link("react-router-dom", {
  withRouter: function (v) {
    withRouter = v;
  },
  NavLink: function (v) {
    NavLink = v;
  }
}, 4);
var Roles;
module.link("meteor/alanning:roles", {
  Roles: function (v) {
    Roles = v;
  }
}, 5);
var Menu, Dropdown, Image, Visibility, Segment, Container, fixed;
module.link("semantic-ui-react", {
  Menu: function (v) {
    Menu = v;
  },
  Dropdown: function (v) {
    Dropdown = v;
  },
  Image: function (v) {
    Image = v;
  },
  Visibility: function (v) {
    Visibility = v;
  },
  Segment: function (v) {
    Segment = v;
  },
  Container: function (v) {
    Container = v;
  },
  fixed: function (v) {
    fixed = v;
  }
}, 6);

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
var NavBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavBar, _React$Component);

  function NavBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavBar.prototype;

  _proto.render = function () {
    function render() {
      var menuStyle = {
        margin: '0em',
        padding: '0em'
      };
      var isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');

      if (isAdmin) {
        return React.createElement(Menu, {
          style: menuStyle,
          attached: "top",
          borderless: true,
          color: "white"
        }, React.createElement(Menu.Item, {
          as: NavLink,
          activeClassName: "",
          exact: true,
          to: "/"
        }, React.createElement(Menu.Item, null, React.createElement(Image, {
          size: "tiny",
          avatar: true,
          src: "/images/logo.png"
        }))), React.createElement(Menu.Item, {
          as: NavLink,
          activeClassName: "active",
          exact: true,
          to: "/admin",
          key: "admin"
        }, "List of study sessions"), React.createElement(Menu.Item, {
          as: NavLink,
          activeClassName: "active",
          exact: true,
          to: "/admin",
          key: "admin"
        }, "List Users"), React.createElement(Menu.Item, {
          position: "right"
        }, this.props.currentUser === '' ? React.createElement(Dropdown, {
          text: "Login",
          pointing: "top right",
          icon: 'user'
        }, React.createElement(Dropdown.Menu, null, React.createElement(Dropdown.Item, {
          icon: "user",
          text: "Sign In",
          as: NavLink,
          exact: true,
          to: "/signin"
        }), React.createElement(Dropdown.Item, {
          icon: "add user",
          text: "Sign Up",
          as: NavLink,
          exact: true,
          to: "/signup"
        }))) : React.createElement(Dropdown, {
          text: this.props.currentUser,
          pointing: "top right",
          icon: 'user'
        }, React.createElement(Dropdown.Menu, null, React.createElement(Dropdown.Item, {
          icon: "sign out",
          text: "Sign Out",
          as: NavLink,
          exact: true,
          to: "/signout"
        }), React.createElement(Dropdown.Item, {
          icon: "user circle",
          text: "View my User Profile",
          as: NavLink,
          exact: true,
          to: "/userprofile"
        })))));
      }

      return React.createElement(Menu, {
        style: menuStyle,
        attached: "top",
        borderless: true
      }, React.createElement(Visibility, {
        once: false,
        onBottomPassed: this.showFixedMenu,
        onBottomPassedReverse: this.hideFixedMenu
      }, React.createElement(Segment, {
        textAlign: "center",
        style: {
          menuStyle: menuStyle
        },
        vertical: true
      }, React.createElement(Menu, {
        fixed: fixed ? 'top' : null,
        inverted: fixed,
        pointing: !fixed,
        secondary: !fixed,
        size: "large"
      }, React.createElement(Container, {
        style: {
          menuStyle: menuStyle
        }
      }, React.createElement(Menu.Item, {
        as: NavLink,
        activeClassName: "",
        exact: true,
        to: "/",
        style: menuStyle
      }, React.createElement(Menu.Item, {
        style: menuStyle
      }, React.createElement(Image, {
        size: "tiny",
        avatar: true,
        src: "/images/logo.png"
      }))), React.createElement(Menu.Item, {
        as: NavLink,
        activeClassName: "active",
        exact: true,
        to: "/create",
        key: "add"
      }, "Tutor Session"), React.createElement(Menu.Item, {
        as: NavLink,
        activeClassName: "active",
        exact: true,
        to: "/list",
        key: "list"
      }, "List Tutoring "), React.createElement(Menu.Item, {
        as: NavLink,
        activeClassName: "active",
        exact: true,
        to: "/ratingtutor",
        key: "ratingtutor"
      }, "Rate a Tutor"))))), React.createElement(Menu.Item, {
        position: "right"
      }, this.props.currentUser === '' ? React.createElement(Dropdown, {
        text: "Login",
        pointing: "top right",
        icon: 'user'
      }, React.createElement(Dropdown.Menu, null, React.createElement(Dropdown.Item, {
        icon: "user",
        text: "Sign In",
        as: NavLink,
        exact: true,
        to: "/signin"
      }), React.createElement(Dropdown.Item, {
        icon: "add user",
        text: "Sign Up",
        as: NavLink,
        exact: true,
        to: "/signup"
      }))) : React.createElement(Dropdown, {
        text: this.props.currentUser,
        pointing: "top right",
        icon: 'user'
      }, React.createElement(Dropdown.Menu, null, React.createElement(Dropdown.Item, {
        icon: "sign out",
        text: "Sign Out",
        as: NavLink,
        exact: true,
        to: "/signout"
      }), React.createElement(Dropdown.Item, {
        icon: "user circle",
        text: "View my User Profile",
        as: NavLink,
        exact: true,
        to: "/userprofile"
      })))));
    }

    return render;
  }();

  return NavBar;
}(React.Component);
/** Declare the types of all properties. */


NavBar.propTypes = {
  currentUser: PropTypes.string
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

var NavBarContainer = withTracker(function () {
  return {
    currentUser: Meteor.user() ? Meteor.user().username : ''
  };
})(NavBar);
/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */

module.exportDefault(withRouter(NavBarContainer));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StuffItem.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/StuffItem.jsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Table, Button;
module.link("semantic-ui-react", {
  Table: function (v) {
    Table = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 1);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 2);
var withRouter, Link, Redirect;
module.link("react-router-dom", {
  withRouter: function (v) {
    withRouter = v;
  },
  Link: function (v) {
    Link = v;
  },
  Redirect: function (v) {
    Redirect = v;
  }
}, 3);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 4);
var Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  }
}, 5);

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
var StuffItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(StuffItem, _React$Component);

  function StuffItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  var _proto = StuffItem.prototype;

  _proto.deleteCallback = function () {
    function deleteCallback(error) {
      if (error) {
        Bert.alert({
          type: 'danger',
          message: "Deletion failed: " + error.message
        });
      } else {
        Bert.alert({
          type: 'success',
          message: 'Session successfully deleted!'
        });
      }
    }

    return deleteCallback;
  }();
  /* When the delete button is clicked, remove the corresponding item from the collection. */


  _proto.onClick = function () {
    function onClick() {
      if (confirm('Are you sure you want to delete this session?')) {
        if (confirm('WAIT! ARE YOU REALLY SURE YOU WANT TO DELETE THIS SESSION!?')) {
          Stuffs.remove(this.props.stuff._id, this.deleteCallback);
        }

        return React.createElement(Redirect, {
          to: '/list'
        });
      }

      return React.createElement(Redirect, {
        to: '/list'
      });
    }

    return onClick;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement(Table.Row, null, React.createElement(Table.Cell, null, this.props.stuff.tutee), React.createElement(Table.Cell, null, this.props.stuff.courseName), React.createElement(Table.Cell, null, this.props.stuff.month), React.createElement(Table.Cell, null, this.props.stuff.day), React.createElement(Table.Cell, null, this.props.stuff.time), React.createElement(Table.Cell, null, this.props.stuff.tutor), React.createElement(Table.Cell, null, this.props.stuff.style), React.createElement(Table.Cell, null, React.createElement(Link, {
        to: "/edit/" + this.props.stuff._id
      }, "Edit")), React.createElement(Table.Cell, null, React.createElement(Button, {
        basic: true,
        onClick: this.onClick
      }, "Delete")));
    }

    return render;
  }();

  return StuffItem;
}(React.Component);
/** Require a document to be passed to this component. */


StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired
};
/** Wrap this component in withRouter since we use the <Link> React Router element. */

module.exportDefault(withRouter(StuffItem));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StuffItemAdmin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/StuffItemAdmin.jsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Button, Table;
module.link("semantic-ui-react", {
  Button: function (v) {
    Button = v;
  },
  Table: function (v) {
    Table = v;
  }
}, 1);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 2);
var Link, Redirect;
module.link("react-router-dom", {
  Link: function (v) {
    Link = v;
  },
  Redirect: function (v) {
    Redirect = v;
  }
}, 3);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 4);
var Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  }
}, 5);

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
var StuffItemAdmin =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(StuffItemAdmin, _React$Component);

  function StuffItemAdmin(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  var _proto = StuffItemAdmin.prototype;

  _proto.deleteCallback = function () {
    function deleteCallback(error) {
      if (error) {
        Bert.alert({
          type: 'danger',
          message: "Deletion failed: " + error.message
        });
      } else {
        Bert.alert({
          type: 'success',
          message: 'Session successfully deleted!'
        });
      }
    }

    return deleteCallback;
  }();
  /* When the delete button is clicked, remove the corresponding item from the collection. */


  _proto.onClick = function () {
    function onClick() {
      if (confirm('Are you sure you want to delete this session?')) {
        if (confirm('WAIT! ARE YOU REALLY SURE YOU WANT TO DELETE THIS SESSION!?')) {
          Stuffs.remove(this.props.stuff._id, this.deleteCallback);
        }

        return React.createElement(Redirect, {
          to: '/list'
        });
      }

      return React.createElement(Redirect, {
        to: '/list'
      });
    }

    return onClick;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement(Table.Row, null, React.createElement(Table.Cell, null, this.props.stuff.tutee), React.createElement(Table.Cell, null, this.props.stuff.courseName), React.createElement(Table.Cell, null, this.props.stuff.month), React.createElement(Table.Cell, null, this.props.stuff.day), React.createElement(Table.Cell, null, this.props.stuff.time), React.createElement(Table.Cell, null, this.props.stuff.tutor), React.createElement(Table.Cell, null, this.props.stuff.owner), React.createElement(Table.Cell, null, this.props.stuff.style), React.createElement(Table.Cell, null, React.createElement(Link, {
        to: "/editAdmin/" + this.props.stuff._id
      }, "Edit")), React.createElement(Table.Cell, null, React.createElement(Button, {
        basic: true,
        onClick: this.onClick
      }, "Delete")));
    }

    return render;
  }();

  return StuffItemAdmin;
}(React.Component);
/** Require a document to be passed to this component. */


StuffItemAdmin.propTypes = {
  stuff: PropTypes.object.isRequired
};
module.exportDefault(StuffItemAdmin);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layouts":{"App.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/App.jsx                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
module.link("semantic-ui-css/semantic.css");
var Roles;
module.link("meteor/alanning:roles", {
  Roles: function (v) {
    Roles = v;
  }
}, 3);
var Router, Route, Switch, Redirect;
module.link("react-router-dom", {
  HashRouter: function (v) {
    Router = v;
  },
  Route: function (v) {
    Route = v;
  },
  Switch: function (v) {
    Switch = v;
  },
  Redirect: function (v) {
    Redirect = v;
  }
}, 4);
var Landing;
module.link("../pages/Landing", {
  "default": function (v) {
    Landing = v;
  }
}, 5);
var ListStuffAdmin;
module.link("../pages/ListStuffAdmin", {
  "default": function (v) {
    ListStuffAdmin = v;
  }
}, 6);
var CreateTutor;
module.link("../pages/CreateTutor", {
  "default": function (v) {
    CreateTutor = v;
  }
}, 7);
var EditTutor;
module.link("../pages/EditTutor", {
  "default": function (v) {
    EditTutor = v;
  }
}, 8);
var EditAdmin;
module.link("../pages/EditAdmin", {
  "default": function (v) {
    EditAdmin = v;
  }
}, 9);
var NotFound;
module.link("../pages/NotFound", {
  "default": function (v) {
    NotFound = v;
  }
}, 10);
var Signin;
module.link("../pages/Signin", {
  "default": function (v) {
    Signin = v;
  }
}, 11);
var Signup;
module.link("../pages/Signup", {
  "default": function (v) {
    Signup = v;
  }
}, 12);
var Signout;
module.link("../pages/Signout", {
  "default": function (v) {
    Signout = v;
  }
}, 13);
var UserProfile;
module.link("../pages/UserProfile", {
  "default": function (v) {
    UserProfile = v;
  }
}, 14);
var EditUserProfile;
module.link("../pages/EditUserProfile", {
  "default": function (v) {
    EditUserProfile = v;
  }
}, 15);
var RatingTutor;
module.link("../pages/RatingTutor", {
  "default": function (v) {
    RatingTutor = v;
  }
}, 16);
var ListTutor;
module.link("../pages/ListTutor", {
  "default": function (v) {
    ListTutor = v;
  }
}, 17);

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(App, _React$Component);

  function App() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement(Router, null, React.createElement("div", null, React.createElement(Switch, null, React.createElement(Route, {
        exact: true,
        path: "/",
        component: Landing
      }), React.createElement(Route, {
        path: "/signin",
        component: Signin
      }), React.createElement(Route, {
        path: "/signup",
        component: Signup
      }), React.createElement(Route, {
        path: "/user",
        component: Landing
      }), React.createElement(ProtectedRoute, {
        path: "/list",
        component: ListTutor
      }), React.createElement(ProtectedRoute, {
        path: "/userprofile",
        component: UserProfile
      }), React.createElement(ProtectedRoute, {
        path: "/edituserprofile",
        component: EditUserProfile
      }), React.createElement(ProtectedRoute, {
        path: "/create",
        component: CreateTutor
      }), React.createElement(ProtectedRoute, {
        path: "/edit/:_id",
        component: EditTutor
      }), React.createElement(ProtectedRoute, {
        path: "/editAdmin/:_id",
        component: EditAdmin
      }), React.createElement(AdminProtectedRoute, {
        path: "/admin",
        component: ListStuffAdmin
      }), React.createElement(ProtectedRoute, {
        path: "/ratingtutor",
        component: RatingTutor
      }), React.createElement(ProtectedRoute, {
        path: "/signout",
        component: Signout
      }), React.createElement(Route, {
        component: NotFound
      }))));
    }

    return render;
  }();

  return App;
}(React.Component);
/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */


var ProtectedRoute = function (_ref) {
  var Component = _ref.component,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["component"]);
  return React.createElement(Route, (0, _extends2.default)({}, rest, {
    render: function (props) {
      var isLogged = Meteor.userId() !== null;
      return isLogged ? React.createElement(Component, props) : React.createElement(Redirect, {
        to: {
          pathname: '/signin',
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};
/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */


var AdminProtectedRoute = function (_ref2) {
  var Component = _ref2.component,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["component"]);
  return React.createElement(Route, (0, _extends2.default)({}, rest, {
    render: function (props) {
      var isLogged = Meteor.userId() !== null;
      var isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return isLogged && isAdmin ? React.createElement(Component, props) : React.createElement(Redirect, {
        to: {
          pathname: '/signin',
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};
/** Require a component and location to be passed to each ProtectedRoute. */


ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};
/** Require a component and location to be passed to each AdminProtectedRoute. */

AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};
module.exportDefault(App);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"pages":{"CreateTutor.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/CreateTutor.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  },
  StuffSchema: function (v) {
    StuffSchema = v;
  }
}, 1);
var Grid, Segment, Header, Form;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Segment: function (v) {
    Segment = v;
  },
  Header: function (v) {
    Header = v;
  },
  Form: function (v) {
    Form = v;
  }
}, 2);
var AutoForm;
module.link("uniforms-semantic/AutoForm", {
  "default": function (v) {
    AutoForm = v;
  }
}, 3);
var TextField;
module.link("uniforms-semantic/TextField", {
  "default": function (v) {
    TextField = v;
  }
}, 4);
var SelectField;
module.link("uniforms-semantic/SelectField", {
  "default": function (v) {
    SelectField = v;
  }
}, 5);
var SubmitField;
module.link("uniforms-semantic/SubmitField", {
  "default": function (v) {
    SubmitField = v;
  }
}, 6);
var HiddenField;
module.link("uniforms-semantic/HiddenField", {
  "default": function (v) {
    HiddenField = v;
  }
}, 7);
var ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  "default": function (v) {
    ErrorsField = v;
  }
}, 8);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 9);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 10);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 11);

/** Renders the Page for adding a document. */
var CreateTutor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(CreateTutor, _React$Component);

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  function CreateTutor(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.insertCallback = _this.insertCallback.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.formRef = null;
    return _this;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  var _proto = CreateTutor.prototype;

  _proto.insertCallback = function () {
    function insertCallback(error) {
      if (error) {
        Bert.alert({
          type: 'danger',
          message: "Could not create a study session: " + error.message
        });
      } else {
        Bert.alert({
          type: 'success',
          message: 'Study session succesfully created!'
        });
        this.formRef.reset();
      }
    }

    return insertCallback;
  }();
  /** On submit, insert the data. */


  _proto.submit = function () {
    function submit(data) {
      var tutee = data.tutee,
          courseName = data.courseName,
          month = data.month,
          day = data.day,
          time = data.time,
          tutor = data.tutor,
          style = data.style;
      var owner = Meteor.user().username;
      Stuffs.insert({
        tutee: tutee,
        courseName: courseName,
        month: month,
        day: day,
        time: time,
        owner: owner,
        tutor: tutor,
        style: style
      }, this.insertCallback);
    }

    return submit;
  }();
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  _proto.render = function () {
    function render() {
      var _this2 = this;

      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        container: true,
        centered: true,
        style: menuStyle
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Create a Tutoring Session"), React.createElement(AutoForm, {
        ref: function (ref) {
          _this2.formRef = ref;
        },
        schema: StuffSchema,
        onSubmit: this.submit
      }, React.createElement(Segment, null, React.createElement(TextField, {
        name: "tutee"
      }), React.createElement(TextField, {
        name: "courseName"
      }), React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        name: "month"
      }), React.createElement(SelectField, {
        name: "day"
      }), React.createElement(SelectField, {
        name: "time"
      }))), React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        name: "tutor"
      }), React.createElement(SelectField, {
        name: "style"
      }))), React.createElement(SubmitField, {
        value: "Submit"
      }), React.createElement(ErrorsField, null), React.createElement(HiddenField, {
        name: "owner",
        value: "fakeuser@foo.com"
      })))))));
    }

    return render;
  }();

  return CreateTutor;
}(React.Component);

module.exportDefault(CreateTutor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EditAdmin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/EditAdmin.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Grid, Loader, Header, Segment, Form, Container;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Loader: function (v) {
    Loader = v;
  },
  Header: function (v) {
    Header = v;
  },
  Segment: function (v) {
    Segment = v;
  },
  Form: function (v) {
    Form = v;
  },
  Container: function (v) {
    Container = v;
  }
}, 1);
var Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  },
  StuffSchema: function (v) {
    StuffSchema = v;
  }
}, 2);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 3);
var AutoForm;
module.link("uniforms-semantic/AutoForm", {
  "default": function (v) {
    AutoForm = v;
  }
}, 4);
var TextField;
module.link("uniforms-semantic/TextField", {
  "default": function (v) {
    TextField = v;
  }
}, 5);
var SelectField;
module.link("uniforms-semantic/SelectField", {
  "default": function (v) {
    SelectField = v;
  }
}, 6);
var SubmitField;
module.link("uniforms-semantic/SubmitField", {
  "default": function (v) {
    SubmitField = v;
  }
}, 7);
var HiddenField;
module.link("uniforms-semantic/HiddenField", {
  "default": function (v) {
    HiddenField = v;
  }
}, 8);
var ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  "default": function (v) {
    ErrorsField = v;
  }
}, 9);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 10);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 11);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 12);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 13);

/** Renders the Page for editing a single document. */
var EditAdmin =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(EditAdmin, _React$Component);

  function EditAdmin() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EditAdmin.prototype;

  /** On successful submit, insert the data. */
  _proto.submit = function () {
    function submit(data) {
      var tutee = data.tutee,
          courseName = data.courseName,
          month = data.month,
          day = data.day,
          time = data.time,
          tutor = data.tutor,
          owner = data.owner,
          style = data.style,
          _id = data._id;
      Stuffs.update(_id, {
        $set: {
          tutee: tutee,
          courseName: courseName,
          month: month,
          day: day,
          time: time,
          tutor: tutor,
          owner: owner,
          style: style
        }
      }, function (error) {
        return error ? Bert.alert({
          type: 'danger',
          message: "Update failed: " + error.message + " :("
        }) : Bert.alert({
          type: 'success',
          message: 'Session successfully updated!'
        });
      });
    }

    return submit;
  }();
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */


  _proto.render = function () {
    function render() {
      return this.props.ready ? this.renderPage() : React.createElement(Loader, {
        active: true
      }, "Getting data");
    }

    return render;
  }();
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  _proto.renderPage = function () {
    function renderPage() {
      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement(Container, {
        style: menuStyle
      }, React.createElement(Grid, {
        container: true,
        centered: true,
        style: menuStyle
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Manage tutoring sessions"), React.createElement(AutoForm, {
        schema: StuffSchema,
        onSubmit: this.submit,
        model: this.props.doc
      }, React.createElement(Segment, null, React.createElement(TextField, {
        name: "tutee"
      }), React.createElement(TextField, {
        name: "courseName"
      }), React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        name: "month"
      }), React.createElement(SelectField, {
        name: "day"
      }), React.createElement(SelectField, {
        name: "time"
      }))), React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        name: "tutor"
      }), React.createElement(SelectField, {
        name: "style"
      }))), React.createElement(SubmitField, {
        value: "Submit"
      }), React.createElement(ErrorsField, null), React.createElement(HiddenField, {
        name: "owner",
        value: Stuffs.owner
      })))))));
    }

    return renderPage;
  }();

  return EditAdmin;
}(React.Component);
/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */


EditAdmin.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(function (_ref) {
  var match = _ref.match;
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  var documentId = match.params._id; // Get access to Stuff documents.

  var subscription = Meteor.subscribe('StuffAdmin');
  return {
    doc: Stuffs.findOne(documentId),
    ready: subscription.ready()
  };
})(EditAdmin));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EditTutor.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/EditTutor.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Grid, Loader, Header, Segment, Form;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Loader: function (v) {
    Loader = v;
  },
  Header: function (v) {
    Header = v;
  },
  Segment: function (v) {
    Segment = v;
  },
  Form: function (v) {
    Form = v;
  }
}, 1);
var Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  },
  StuffSchema: function (v) {
    StuffSchema = v;
  }
}, 2);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 3);
var AutoForm;
module.link("uniforms-semantic/AutoForm", {
  "default": function (v) {
    AutoForm = v;
  }
}, 4);
var TextField;
module.link("uniforms-semantic/TextField", {
  "default": function (v) {
    TextField = v;
  }
}, 5);
var SelectField;
module.link("uniforms-semantic/SelectField", {
  "default": function (v) {
    SelectField = v;
  }
}, 6);
var SubmitField;
module.link("uniforms-semantic/SubmitField", {
  "default": function (v) {
    SubmitField = v;
  }
}, 7);
var HiddenField;
module.link("uniforms-semantic/HiddenField", {
  "default": function (v) {
    HiddenField = v;
  }
}, 8);
var ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  "default": function (v) {
    ErrorsField = v;
  }
}, 9);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 10);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 11);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 12);

/** Renders the Page for editing a single document. */
var EditTutor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(EditTutor, _React$Component);

  function EditTutor() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EditTutor.prototype;

  /** On successful submit, insert the data. */
  _proto.submit = function () {
    function submit(data) {
      var tutee = data.tutee,
          courseName = data.courseName,
          month = data.month,
          day = data.day,
          time = data.time,
          tutor = data.tutor,
          style = data.style,
          _id = data._id;
      Stuffs.update(_id, {
        $set: {
          tutee: tutee,
          courseName: courseName,
          month: month,
          day: day,
          time: time,
          tutor: tutor,
          style: style
        }
      }, function (error) {
        return error ? Bert.alert({
          type: 'danger',
          message: "Update failed: " + error.message + " :("
        }) : Bert.alert({
          type: 'success',
          message: 'Session successfully updated!'
        });
      });
    }

    return submit;
  }();
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */


  _proto.render = function () {
    function render() {
      return this.props.ready ? this.renderPage() : React.createElement(Loader, {
        active: true
      }, "Getting data");
    }

    return render;
  }();
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  _proto.renderPage = function () {
    function renderPage() {
      return React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        container: true,
        centered: true
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Manage tutoring sessions"), React.createElement(AutoForm, {
        schema: StuffSchema,
        onSubmit: this.submit,
        model: this.props.doc
      }, React.createElement(Segment, null, React.createElement(TextField, {
        name: "tutee"
      }), React.createElement(TextField, {
        name: "courseName"
      }), React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        name: "month"
      }), React.createElement(SelectField, {
        name: "day"
      }), React.createElement(SelectField, {
        name: "time"
      }))), React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        name: "tutor"
      }), React.createElement(SelectField, {
        name: "style"
      }))), React.createElement(SubmitField, {
        value: "Submit"
      }), React.createElement(ErrorsField, null), React.createElement(HiddenField, {
        name: "owner",
        value: "fakeuser@foo.com"
      }))))));
    }

    return renderPage;
  }();

  return EditTutor;
}(React.Component);
/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */


EditTutor.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(function (_ref) {
  var match = _ref.match;
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  var documentId = match.params._id; // Get access to Stuff documents.

  var subscription = Meteor.subscribe('Stuff');
  return {
    doc: Stuffs.findOne(documentId),
    ready: subscription.ready()
  };
})(EditTutor));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EditUserProfile.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/EditUserProfile.jsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Users, UserSchema;
module.link("/imports/api/stuff/user", {
  Users: function (v) {
    Users = v;
  },
  UserSchema: function (v) {
    UserSchema = v;
  }
}, 1);
var Card, Image, Button, Form, Grid;
module.link("semantic-ui-react", {
  Card: function (v) {
    Card = v;
  },
  Image: function (v) {
    Image = v;
  },
  Button: function (v) {
    Button = v;
  },
  Form: function (v) {
    Form = v;
  },
  Grid: function (v) {
    Grid = v;
  }
}, 2);
var AutoForm;
module.link("uniforms-semantic/AutoForm", {
  "default": function (v) {
    AutoForm = v;
  }
}, 3);
var TextField;
module.link("uniforms-semantic/TextField", {
  "default": function (v) {
    TextField = v;
  }
}, 4);
var LongTextField;
module.link("uniforms-semantic/LongTextField", {
  "default": function (v) {
    LongTextField = v;
  }
}, 5);
var SelectField;
module.link("uniforms-semantic/SelectField", {
  "default": function (v) {
    SelectField = v;
  }
}, 6);
var ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  "default": function (v) {
    ErrorsField = v;
  }
}, 7);
var SubmitField;
module.link("uniforms-semantic/SubmitField", {
  "default": function (v) {
    SubmitField = v;
  }
}, 8);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 9);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 10);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 11);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 12);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 13);

/** A simple static component to render some text for the landing page. */
var EditUserProfile =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(EditUserProfile, _React$Component);

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  function EditUserProfile(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.insertCallback = _this.insertCallback.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.formRef = null;
    return _this;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  var _proto = EditUserProfile.prototype;

  _proto.insertCallback = function () {
    function insertCallback(error) {
      if (error) {
        Bert.alert({
          type: 'danger',
          message: "Could not update the user profile: " + error.message
        });
      } else {
        Bert.alert({
          type: 'success',
          message: 'User profile succesfully updated!'
        });
        this.formRef.reset();
      }
    }

    return insertCallback;
  }();
  /** On submit, insert the data. */


  _proto.submit = function () {
    function submit(data) {
      var firstName = data.firstName,
          lastName = data.lastName,
          bio = data.bio,
          instagram = data.instagram,
          facebook = data.facebook,
          interest = data.interest,
          course = data.course,
          _id = data._id;
      Users.update(_id, {
        $set: {
          firstName: firstName,
          lastName: lastName,
          bio: bio,
          instagram: instagram,
          facebook: facebook,
          interest: interest,
          course: course
        }
      }, function (error) {
        return error ? Bert.alert({
          type: 'danger',
          message: "Could not update the user profile: " + error.message
        }) : Bert.alert({
          type: 'success',
          message: 'User profile succesfully updated!'
        });
      });
    }

    return submit;
  }();

  _proto.render = function () {
    function render() {
      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        Container: true,
        style: menuStyle
      }, React.createElement(Grid, {
        columns: 2,
        centered: true,
        celled: "internally"
      }, React.createElement(Grid.Row, null, React.createElement(Grid.Column, {
        width: 5
      }, React.createElement(Card, null, React.createElement(Image, {
        src: "images/matthew.png"
      }), React.createElement(Card.Content, null, React.createElement(Card.Header, null, "Username"), React.createElement(Card.Meta, null, React.createElement("span", {
        className: "date"
      }, "Joined in 2018")), React.createElement(Card.Description, null, "john@foo.com")), React.createElement(Card.Content, {
        extra: true
      }, React.createElement("a", null, React.createElement(Button, {
        floated: 'right',
        size: 'mini'
      }, "Change Password"), React.createElement(Button, {
        floated: 'left',
        size: 'mini'
      }, "Change Email"))))), React.createElement(Grid.Column, {
        widths: "equal"
      }, React.createElement(AutoForm, {
        schema: UserSchema,
        onSubmit: this.submit,
        model: this.props.doc
      }, React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(TextField, {
        fluid: true,
        label: "First name",
        placeholder: this.props.user.firstName,
        name: "firstName"
      }), React.createElement(TextField, {
        fluid: true,
        label: "Last name",
        placeholder: this.props.user.lastName,
        name: "lastName"
      })), React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(LongTextField, {
        label: "Bio",
        placeholder: this.props.user.bio,
        name: "bio"
      }))), React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        label: this.props.user.interest,
        name: "interest"
      }), React.createElement(SelectField, {
        label: this.props.user.course,
        name: "course"
      }))), React.createElement("br", null), React.createElement(TextField, {
        fluid: true,
        icon: "instagram",
        iconPosition: "left",
        placeholder: this.props.user.instagram,
        name: "instagram"
      }), React.createElement(TextField, {
        fluid: true,
        icon: "facebook square",
        iconPosition: "left",
        placeholder: this.props.user.facebook,
        name: "facebook"
      }), React.createElement(SubmitField, {
        value: "Submit"
      }), React.createElement("br", null), React.createElement(ErrorsField, null))))))));
    }

    return render;
  }();

  return EditUserProfile;
}(React.Component);

EditUserProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(function (_ref) {
  var match = _ref.match;
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  var documentId = match.params._id; // Get access to Stuff documents.

  var subscription = Meteor.subscribe('User');
  return {
    doc: Users.findOne(documentId),
    ready: subscription.ready()
  };
})(EditUserProfile));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Landing.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Landing.jsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Button, Container, Divider, Grid, Header, Icon, Image, Loader, Segment;
module.link("semantic-ui-react", {
  Button: function (v) {
    Button = v;
  },
  Container: function (v) {
    Container = v;
  },
  Divider: function (v) {
    Divider = v;
  },
  Grid: function (v) {
    Grid = v;
  },
  Header: function (v) {
    Header = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Image: function (v) {
    Image = v;
  },
  Loader: function (v) {
    Loader = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 1);
var NavLink;
module.link("react-router-dom", {
  NavLink: function (v) {
    NavLink = v;
  }
}, 2);
var Roles;
module.link("meteor/alanning:roles", {
  Roles: function (v) {
    Roles = v;
  }
}, 3);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 4);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 5);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 6);
var Users;
module.link("/imports/api/stuff/user.js", {
  Users: function (v) {
    Users = v;
  }
}, 7);
var Footer;
module.link("../components/Footer", {
  "default": function (v) {
    Footer = v;
  }
}, 8);
var AdminFooter;
module.link("../components/AdminFooter", {
  "default": function (v) {
    AdminFooter = v;
  }
}, 9);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 10);

/** A simple static component to render some text for the landing page. */
var Landing =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Landing, _React$Component);

  function Landing() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Landing.prototype;

  _proto.render = function () {
    function render() {
      return this.props.ready ? this.renderPage() : React.createElement(Loader, {
        active: true
      }, "Getting data");
    }

    return render;
  }();

  _proto.renderPage = function () {
    function renderPage() {
      var menuStyle1 = {
        marginTop: 120,
        paddingLeft: 60
      };
      var menuStyle2 = {
        marginTop: 120,
        paddingRight: 60
      };
      var isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');

      if (isAdmin) {
        return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
          className: "background"
        }, React.createElement(Grid, {
          columns: 2,
          divided: "vertically"
        }, React.createElement(Grid.Column, {
          textAlign: "center",
          style: menuStyle1
        }, React.createElement(Icon, {
          size: "massive",
          name: "edit",
          inverted: true
        }), React.createElement(Header, {
          as: "h1"
        }, React.createElement(Button, {
          inverted: true,
          color: "black",
          as: NavLink,
          activeClassName: "active",
          exact: true,
          to: "/create",
          key: "add"
        }, "Add a study session")), React.createElement("h2", {
          id: "left-txt"
        }, "create a study session for your students.")), React.createElement(Grid.Column, {
          textAlign: "center",
          style: menuStyle2
        }, React.createElement(Icon, {
          size: "massive",
          name: "calendar alternate",
          inverted: true
        }), React.createElement(Header, {
          as: "h1"
        }, React.createElement(Button, {
          inverted: true,
          color: "black",
          as: NavLink,
          activeClassName: "active",
          exact: true,
          to: "/admin",
          key: "admin"
        }, "View current study session list.")), React.createElement("h2", {
          id: "left-txt"
        }, "View the upcoming study session list."))), React.createElement(AdminFooter, null)));
      }

      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background"
      }, React.createElement(Grid, {
        columns: 2,
        divided: "vertically"
      }, React.createElement(Grid.Column, {
        textAlign: "center",
        style: menuStyle1
      }, React.createElement(Icon, {
        inverted: true,
        size: "massive",
        name: "student"
      }), React.createElement(Header, {
        as: "h1"
      }, React.createElement(Button, {
        as: NavLink,
        exact: true,
        to: "/create"
      }, "Get a Tutor")), React.createElement("h2", {
        id: "left-txt"
      }, "Varsity Tutors is here to help. Tutoring available 24/7! In-School 1-on-1 Tutoring. Personally-Tailored. At Your Convenience.")), React.createElement(Grid.Column, {
        textAlign: "center",
        style: menuStyle2
      }, React.createElement(Icon, {
        inverted: true,
        size: "massive",
        name: "jenkins"
      }), React.createElement(Header, {
        as: "h1"
      }, React.createElement(Button, {
        as: NavLink,
        exact: true,
        to: "/userprofile"
      }, "Become a Tutor")), React.createElement("h2", {
        id: "left-txt"
      }, "A great way to make a difference and boost your resume. Pick Your Schedule. Pick Your favor Student. Fun and Rewarding."))), React.createElement(Container, null, React.createElement(Segment, {
        style: {
          padding: '20em 0em'
        },
        vertical: true
      }, React.createElement(Grid, {
        container: true,
        stackable: true,
        verticalAlign: "middle"
      }, React.createElement(Grid.Row, null, React.createElement(Grid.Column, {
        width: 8
      }, React.createElement(Header, {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "We Help ICS Students"), React.createElement("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "Study Club is an application for UHM ICS students to self-organize face-to-face study groups around a course and/or specific homework or project topic."), React.createElement(Header, {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "WHY?"), React.createElement("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "ICS students often spend more time than they need on their homework and don\u2019t learn the material as effectively as they could, because they study alone and do not leverage the power of face-to-face study groups with peer mentors.")), React.createElement(Grid.Column, {
        floated: "right",
        width: 6
      }, React.createElement(Image, {
        bordered: true,
        rounded: true,
        size: "big",
        src: "/images/pic1.jpg"
      }))), React.createElement(Grid.Row, null, React.createElement(Grid.Column, {
        textAlign: "center"
      }, React.createElement(Button, {
        primary: true,
        size: "huge",
        as: NavLink,
        exact: true,
        to: "/create"
      }, "Create a Study Session Now!"))))), React.createElement(Segment, {
        style: {
          padding: '0em'
        },
        vertical: true
      }, React.createElement(Grid, {
        celled: "internally",
        columns: "equal",
        stackable: true
      }, React.createElement(Grid.Row, {
        textAlign: "center"
      }, React.createElement(Grid.Column, {
        style: {
          paddingBottom: '3em',
          paddingTop: '3em'
        }
      }, React.createElement(Header, {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "What a Great Study Club"), React.createElement("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "That is what they all say about us")), React.createElement(Grid.Column, {
        style: {
          paddingBottom: '5em',
          paddingTop: '5em'
        }
      }, React.createElement(Header, {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "It has never been late to join the study club."), React.createElement("p", {
        style: {
          fontSize: '1.33em'
        }
      }, React.createElement(Image, {
        size: "tiny",
        avatar: true,
        src: "/images/amanda.jpg"
      }), React.createElement("b", null, "Amanda Feng"), " Chief Officer"))))), React.createElement(Segment, {
        style: {
          padding: '8em 0em'
        },
        vertical: true
      }, React.createElement(Container, {
        text: true
      }, React.createElement(Header, {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "Breaking The Grid, Grabs Your Attention"), React.createElement("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "To use Study Club, a student must login and set up their profile. The profile enables each student to list courses they have taken and for which they are willing to attempt to provide help (sensei), and courses they are currently taking and for which they might need help (grasshopper). Thus, all students are sensei in some courses and grasshoppers in other courses. Each student must also provide a head shot so that they can be visually identified."), React.createElement(Button, {
        primary: true,
        size: "large",
        as: NavLink,
        exact: true,
        to: "/signin"
      }, "Join Us Today!"), React.createElement(Divider, {
        as: "h4",
        className: "header",
        horizontal: true,
        style: {
          margin: '5em 0em',
          textTransform: 'uppercase'
        }
      }, React.createElement("a", {
        href: "#"
      }, "More")), React.createElement(Header, {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "Did We Tell You About Our Organization?"), React.createElement("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "Yes I know you hardly know us. We are a non-profit organization! You can sign up an account for free. By the way, this is a good chance for you to interact with different people. Don't miss us!"), React.createElement(Button, {
        primary: true,
        size: "large",
        as: NavLink,
        exact: true,
        to: "/signin"
      }, "I'm Still Quite Interested")))), React.createElement(Footer, null)));
    }

    return renderPage;
  }();

  return Landing;
}(React.Component);

Landing.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(function () {
  // Get access to Stuff documents.
  var subscription = Meteor.subscribe('User');
  return {
    users: Users.find({}).fetch(),
    ready: subscription.ready()
  };
})(Landing));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ListStuffAdmin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/ListStuffAdmin.jsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Table, Header, Loader, Grid;
module.link("semantic-ui-react", {
  Table: function (v) {
    Table = v;
  },
  Header: function (v) {
    Header = v;
  },
  Loader: function (v) {
    Loader = v;
  },
  Grid: function (v) {
    Grid = v;
  }
}, 2);
var Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  }
}, 3);
var StuffItemAdmin;
module.link("/imports/ui/components/StuffItemAdmin", {
  "default": function (v) {
    StuffItemAdmin = v;
  }
}, 4);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 5);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 6);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 7);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
var ListStuffAdmin =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ListStuffAdmin, _React$Component);

  function ListStuffAdmin() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListStuffAdmin.prototype;

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  _proto.render = function () {
    function render() {
      return this.props.ready ? this.renderPage() : React.createElement(Loader, {
        active: true
      }, "Getting data");
    }

    return render;
  }();
  /** Render the page once subscriptions have been received. */


  _proto.renderPage = function () {
    function renderPage() {
      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement(Grid, {
        container: true,
        centered: true,
        style: menuStyle
      }, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "List current study sessions"), React.createElement(Table, {
        celled: true
      }, React.createElement(Table.Header, null, React.createElement(Table.Row, null, React.createElement(Table.HeaderCell, null, "Tutee"), React.createElement(Table.HeaderCell, null, "Course Name"), React.createElement(Table.HeaderCell, null, "Month"), React.createElement(Table.HeaderCell, null, "Day"), React.createElement(Table.HeaderCell, null, "Time"), React.createElement(Table.HeaderCell, null, "Tutor"), React.createElement(Table.HeaderCell, null, "Owner"), React.createElement(Table.HeaderCell, null, "Style"), React.createElement(Table.HeaderCell, null, "Edit"), React.createElement(Table.HeaderCell, null, "Delete"))), React.createElement(Table.Body, null, this.props.stuffs.map(function (stuff) {
        return React.createElement(StuffItemAdmin, {
          key: stuff._id,
          stuff: stuff
        });
      })))));
    }

    return renderPage;
  }();

  return ListStuffAdmin;
}(React.Component);
/** Require an array of Stuff documents in the props. */


ListStuffAdmin.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(function () {
  // Get access to Stuff documents.
  var subscription = Meteor.subscribe('StuffAdmin');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready()
  };
})(ListStuffAdmin));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ListTutor.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/ListTutor.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Grid, Table, Header, Loader;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Table: function (v) {
    Table = v;
  },
  Header: function (v) {
    Header = v;
  },
  Loader: function (v) {
    Loader = v;
  }
}, 2);
var Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  }
}, 3);
var StuffItem;
module.link("/imports/ui/components/StuffItem", {
  "default": function (v) {
    StuffItem = v;
  }
}, 4);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 5);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 6);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 7);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
var ListTutor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ListTutor, _React$Component);

  function ListTutor() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListTutor.prototype;

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  _proto.render = function () {
    function render() {
      return this.props.ready ? this.renderPage() : React.createElement(Loader, {
        active: true
      }, "Getting data");
    }

    return render;
  }();
  /** Render the page once subscriptions have been received. */


  _proto.renderPage = function () {
    function renderPage() {
      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        Container: true,
        centered: true,
        style: menuStyle
      }, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "List of Sessions"), React.createElement(Table, {
        celled: true
      }, React.createElement(Table.Header, null, React.createElement(Table.Row, null, React.createElement(Table.HeaderCell, null, "Tutee"), React.createElement(Table.HeaderCell, null, "Course Name"), React.createElement(Table.HeaderCell, null, "Month"), React.createElement(Table.HeaderCell, null, "Day"), React.createElement(Table.HeaderCell, null, "Time"), React.createElement(Table.HeaderCell, null, "Tutor"), React.createElement(Table.HeaderCell, null, "Style"), React.createElement(Table.HeaderCell, null, "Edit"), React.createElement(Table.HeaderCell, null, "Delete"))), React.createElement(Table.Body, null, this.props.stuffs.map(function (stuff) {
        return React.createElement(StuffItem, {
          key: stuff._id,
          stuff: stuff
        });
      }))))));
    }

    return renderPage;
  }();

  return ListTutor;
}(React.Component);
/** Require an array of Stuff documents in the props. */


ListTutor.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(function () {
  // Get access to Stuff documents.
  var subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready()
  };
})(ListTutor));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NotFound.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/NotFound.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Header;
module.link("semantic-ui-react", {
  Header: function (v) {
    Header = v;
  }
}, 1);

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
var NotFound =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NotFound, _React$Component);

  function NotFound() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NotFound.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, React.createElement("p", null, "Page not found"));
    }

    return render;
  }();

  return NotFound;
}(React.Component);

module.exportDefault(NotFound);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RatingTutor.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/RatingTutor.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Rates, RateSchema;
module.link("/imports/api/rate/rate", {
  Rates: function (v) {
    Rates = v;
  },
  RateSchema: function (v) {
    RateSchema = v;
  }
}, 1);
var Grid, Segment, Header;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Segment: function (v) {
    Segment = v;
  },
  Header: function (v) {
    Header = v;
  }
}, 2);
var AutoForm;
module.link("uniforms-semantic/AutoForm", {
  "default": function (v) {
    AutoForm = v;
  }
}, 3);
var TextField;
module.link("uniforms-semantic/TextField", {
  "default": function (v) {
    TextField = v;
  }
}, 4);
var SelectField;
module.link("uniforms-semantic/SelectField", {
  "default": function (v) {
    SelectField = v;
  }
}, 5);
var SubmitField;
module.link("uniforms-semantic/SubmitField", {
  "default": function (v) {
    SubmitField = v;
  }
}, 6);
var HiddenField;
module.link("uniforms-semantic/HiddenField", {
  "default": function (v) {
    HiddenField = v;
  }
}, 7);
var ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  "default": function (v) {
    ErrorsField = v;
  }
}, 8);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 9);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 10);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 11);

/** Renders the Page for adding a document. */
var RatingTutor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(RatingTutor, _React$Component);

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  function RatingTutor(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.insertCallback = _this.insertCallback.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.formRef = null;
    return _this;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  var _proto = RatingTutor.prototype;

  _proto.insertCallback = function () {
    function insertCallback(error) {
      if (error) {
        Bert.alert({
          type: 'danger',
          message: "Could not create a comment: " + error.message
        });
      } else {
        Bert.alert({
          type: 'success',
          message: 'Comment has been succesfully post!'
        });
        this.formRef.reset();
      }
    }

    return insertCallback;
  }();
  /** On submit, insert the data. */


  _proto.submit = function () {
    function submit(data) {
      var tutor = data.tutor,
          rateYourTutor = data.rateYourTutor,
          wouldSelectThisTutorAgain = data.wouldSelectThisTutorAgain,
          comment = data.comment;
      var owner = Meteor.user().username;
      Rates.insert({
        tutor: tutor,
        rateYourTutor: rateYourTutor,
        wouldSelectThisTutorAgain: wouldSelectThisTutorAgain,
        comment: comment,
        owner: owner
      }, this.insertCallback);
    }

    return submit;
  }();
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  _proto.render = function () {
    function render() {
      var _this2 = this;

      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        container: true,
        centered: true,
        style: menuStyle
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Give a Comment to your Tutor"), React.createElement(AutoForm, {
        ref: function (ref) {
          _this2.formRef = ref;
        },
        schema: RateSchema,
        onSubmit: this.submit
      }, React.createElement(Segment, null, React.createElement(SelectField, {
        name: "tutor"
      }), React.createElement(SelectField, {
        name: "rateYourTutor"
      }), React.createElement(SelectField, {
        name: "wouldSelectThisTutorAgain"
      }), React.createElement(TextField, {
        name: "comment"
      }), React.createElement(SubmitField, {
        value: "Submit"
      }), React.createElement(ErrorsField, null), React.createElement(HiddenField, {
        name: "owner",
        value: "fakeuser@foo.com"
      })))))));
    }

    return render;
  }();

  return RatingTutor;
}(React.Component);

module.exportDefault(RatingTutor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signin.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

module.export({
  "default": function () {
    return Signin;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var Link, Redirect;
module.link("react-router-dom", {
  Link: function (v) {
    Link = v;
  },
  Redirect: function (v) {
    Redirect = v;
  }
}, 2);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 3);
var Container, Form, Grid, Header, Message, Segment;
module.link("semantic-ui-react", {
  Container: function (v) {
    Container = v;
  },
  Form: function (v) {
    Form = v;
  },
  Grid: function (v) {
    Grid = v;
  },
  Header: function (v) {
    Header = v;
  },
  Message: function (v) {
    Message = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 4);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 5);

var Signin =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Signin, _React$Component);

  /** Initialize component state with properties for login and redirection. */
  function Signin(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferer: false
    }; // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    _this.handleSubmit = _this.handleSubmit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** Update the form controls each time the user interacts with them. */


  var _proto = Signin.prototype;

  _proto.handleChange = function () {
    function handleChange(e, _ref) {
      var _this$setState;

      var name = _ref.name,
          value = _ref.value;
      this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
    }

    return handleChange;
  }();
  /** Handle Signin submission using Meteor's account mechanism. */


  _proto.handleSubmit = function () {
    function handleSubmit() {
      var _this2 = this;

      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      Meteor.loginWithPassword(email, password, function (err) {
        if (err) {
          _this2.setState({
            error: err.reason
          });
        } else {
          _this2.setState({
            error: '',
            redirectToReferer: true
          });
        }
      });
    }

    return handleSubmit;
  }();
  /** Render the signin form. */


  _proto.render = function () {
    function render() {
      var _ref2 = this.props.location.state || {
        from: {
          pathname: '/'
        }
      },
          from = _ref2.from; // if correct authentication, redirect to page instead of login screen


      if (this.state.redirectToReferer) {
        return React.createElement(Redirect, {
          to: from
        });
      } // Otherwise return the Login form.


      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        Container: true,
        style: menuStyle
      }, React.createElement(Grid, {
        textAlign: "center",
        verticalAlign: "middle",
        centered: true,
        columns: 2
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Login To Your Account"), React.createElement(Form, {
        onSubmit: this.handleSubmit
      }, React.createElement(Segment, {
        stacked: true
      }, React.createElement(Form.Input, {
        label: "Email",
        icon: "user",
        iconPosition: "left",
        name: "email",
        type: "email",
        placeholder: "E-mail address",
        onChange: this.handleChange
      }), React.createElement(Form.Input, {
        label: "Password",
        icon: "lock",
        iconPosition: "left",
        name: "password",
        placeholder: "Password",
        type: "password",
        onChange: this.handleChange
      }), React.createElement(Form.Button, {
        content: "Submit"
      }))), React.createElement(Message, null, React.createElement(Link, {
        to: "/signup"
      }, "Click here to Register")), this.state.error === '' ? '' : React.createElement(Message, {
        error: true,
        header: "Login was not successful",
        content: this.state.error
      }))))));
    }

    return render;
  }();

  return Signin;
}(React.Component);

/** Ensure that the React Router location object is available in case we need to redirect. */
Signin.propTypes = {
  location: PropTypes.object
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signout.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signout.jsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return Signout;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Header, Grid;
module.link("semantic-ui-react", {
  Header: function (v) {
    Header = v;
  },
  Grid: function (v) {
    Grid = v;
  }
}, 2);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 3);

var Signout =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Signout, _React$Component);

  function Signout() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Signout.prototype;

  _proto.render = function () {
    function render() {
      Meteor.logout();
      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        container: true,
        centered: true,
        style: menuStyle
      }, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, React.createElement("p", null, "You are signed out."), React.createElement("p", null, "Come back when you need help!")))));
    }

    return render;
  }();

  return Signout;
}(React.Component);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signup.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signup.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

module.export({
  "default": function () {
    return Signup;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Link;
module.link("react-router-dom", {
  Link: function (v) {
    Link = v;
  }
}, 1);
var Container, Form, Grid, Header, Message, Segment;
module.link("semantic-ui-react", {
  Container: function (v) {
    Container = v;
  },
  Form: function (v) {
    Form = v;
  },
  Grid: function (v) {
    Grid = v;
  },
  Header: function (v) {
    Header = v;
  },
  Message: function (v) {
    Message = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 2);
var Accounts;
module.link("meteor/accounts-base", {
  Accounts: function (v) {
    Accounts = v;
  }
}, 3);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 4);

var Signup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Signup, _React$Component);

  /** Initialize state fields. */
  function Signup(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      email: '',
      password: '',
      error: ''
    }; // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    _this.handleSubmit = _this.handleSubmit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** Update the form controls each time the user interacts with them. */


  var _proto = Signup.prototype;

  _proto.handleChange = function () {
    function handleChange(e, _ref) {
      var _this$setState;

      var name = _ref.name,
          value = _ref.value;
      this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
    }

    return handleChange;
  }();
  /** Handle Signup submission using Meteor's account mechanism. */


  _proto.handleSubmit = function () {
    function handleSubmit() {
      var _this2 = this;

      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      Accounts.createUser({
        email: email,
        username: email,
        password: password
      }, function (err) {
        if (err) {
          _this2.setState({
            error: err.reason
          });
        } else {// browserHistory.push('/login');
        }
      });
    }

    return handleSubmit;
  }();
  /** Display the signup form. */


  _proto.render = function () {
    function render() {
      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        Container: true,
        style: menuStyle
      }, React.createElement(Grid, {
        textAlign: "center",
        verticalAlign: "middle",
        centered: true,
        columns: 2
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Register Your Account"), React.createElement(Form, {
        onSubmit: this.handleSubmit
      }, React.createElement(Segment, {
        stacked: true
      }, React.createElement(Form.Input, {
        label: "Email",
        icon: "user",
        iconPosition: "left",
        name: "email",
        type: "email",
        placeholder: "E-mail address",
        onChange: this.handleChange
      }), React.createElement(Form.Input, {
        label: "Password",
        icon: "lock",
        iconPosition: "left",
        name: "password",
        placeholder: "Password",
        type: "password",
        onChange: this.handleChange
      }), React.createElement(Form.Button, {
        content: "Submit"
      }))), React.createElement(Message, null, "Already have an account? Login ", React.createElement(Link, {
        to: "/signin"
      }, "here")), this.state.error === '' ? '' : React.createElement(Message, {
        error: true,
        header: "Registration was not successful",
        content: this.state.error
      }))))));
    }

    return render;
  }();

  return Signup;
}(React.Component);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UserProfile.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/UserProfile.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Users, UserSchema;
module.link("/imports/api/stuff/user", {
  Users: function (v) {
    Users = v;
  },
  UserSchema: function (v) {
    UserSchema = v;
  }
}, 1);
var Card, Image, Button, Form, Grid;
module.link("semantic-ui-react", {
  Card: function (v) {
    Card = v;
  },
  Image: function (v) {
    Image = v;
  },
  Button: function (v) {
    Button = v;
  },
  Form: function (v) {
    Form = v;
  },
  Grid: function (v) {
    Grid = v;
  }
}, 2);
var AutoForm;
module.link("uniforms-semantic/AutoForm", {
  "default": function (v) {
    AutoForm = v;
  }
}, 3);
var TextField;
module.link("uniforms-semantic/TextField", {
  "default": function (v) {
    TextField = v;
  }
}, 4);
var LongTextField;
module.link("uniforms-semantic/LongTextField", {
  "default": function (v) {
    LongTextField = v;
  }
}, 5);
var SelectField;
module.link("uniforms-semantic/SelectField", {
  "default": function (v) {
    SelectField = v;
  }
}, 6);
var ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  "default": function (v) {
    ErrorsField = v;
  }
}, 7);
var SubmitField;
module.link("uniforms-semantic/SubmitField", {
  "default": function (v) {
    SubmitField = v;
  }
}, 8);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 9);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 10);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 11);

/** A simple static component to render some text for the landing page. */
var UserProfile =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(UserProfile, _React$Component);

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  function UserProfile(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.insertCallback = _this.insertCallback.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.formRef = null;
    return _this;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  var _proto = UserProfile.prototype;

  _proto.insertCallback = function () {
    function insertCallback(error) {
      if (error) {
        Bert.alert({
          type: 'danger',
          message: "Could not update the user profile: " + error.message
        });
      } else {
        Bert.alert({
          type: 'success',
          message: 'User profile succesfully updated!'
        });
        this.formRef.reset();
      }
    }

    return insertCallback;
  }();
  /** On submit, insert the data. */


  _proto.submit = function () {
    function submit(data) {
      var firstName = data.firstName,
          lastName = data.lastName,
          bio = data.bio,
          instagram = data.instagram,
          facebook = data.facebook,
          interest = data.interest,
          course = data.course,
          position = data.position;
      console.log(data, firstName, lastName);
      var owner = Meteor.user().username;
      Users.insert({
        firstName: firstName,
        lastName: lastName,
        bio: bio,
        instagram: instagram,
        facebook: facebook,
        interest: interest,
        course: course,
        position: position,
        owner: owner
      }, this.insertCallback);
    }

    return submit;
  }();

  _proto.render = function () {
    function render() {
      var _this2 = this;

      var menuStyle = {
        paddingTop: '50px'
      };
      return React.createElement("div", null, React.createElement(NavBar, null), React.createElement("div", {
        className: "background1"
      }, React.createElement(Grid, {
        Container: true,
        style: menuStyle
      }, React.createElement(Grid, {
        columns: 2,
        centered: true,
        celled: "internally"
      }, React.createElement(Grid.Row, null, React.createElement(Grid.Column, {
        width: 5
      }, React.createElement(Card, null, React.createElement(Image, {
        src: "images/matthew.png"
      }), React.createElement(Card.Content, null, React.createElement(Card.Header, null, "Username"), React.createElement(Card.Meta, null, React.createElement("span", {
        className: "date"
      }, "Joined in 2018")), React.createElement(Card.Description, null, "john@foo.com")), React.createElement(Card.Content, {
        extra: true
      }, React.createElement("a", null, React.createElement(Button, {
        floated: 'right',
        size: 'mini'
      }, "Change Password"), React.createElement(Button, {
        floated: 'left',
        size: 'mini'
      }, "Change Email"))))), React.createElement(Grid.Column, {
        widths: "equal"
      }, React.createElement(AutoForm, {
        ref: function (ref) {
          _this2.formRef = ref;
        },
        schema: UserSchema,
        onSubmit: this.submit
      }, React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(TextField, {
        fluid: true,
        label: "First name",
        placeholder: "First name",
        name: "firstName"
      }), React.createElement(TextField, {
        fluid: true,
        label: "Last name",
        placeholder: "Last name",
        name: "lastName"
      })), React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        label: "Position",
        name: "position"
      })), React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(LongTextField, {
        label: "Bio",
        placeholder: "Tell us something about you...",
        name: "bio"
      }))), React.createElement(Form, null, React.createElement(Form.Group, {
        widths: "equal"
      }, React.createElement(SelectField, {
        label: "Interest",
        name: "interest"
      }), React.createElement(SelectField, {
        label: "Course",
        name: "course"
      }))), React.createElement("br", null), React.createElement(TextField, {
        fluid: true,
        icon: "instagram",
        iconPosition: "left",
        placeholder: "Link your Instagram!",
        name: "instagram"
      }), React.createElement(TextField, {
        fluid: true,
        icon: "facebook square",
        iconPosition: "left",
        placeholder: "Link your Facebook!",
        name: "facebook"
      }), React.createElement(SubmitField, {
        value: "Submit"
      }), React.createElement("br", null), React.createElement(ErrorsField, null))))))));
    }

    return render;
  }();

  return UserProfile;
}(React.Component);

module.exportDefault(UserProfile);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".jsx"
  ]
});

require("/client/template.main.js");
require("/client/main.js");