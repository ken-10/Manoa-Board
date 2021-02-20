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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/stuff/user.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let App;
module.link("../../ui/layouts/App.jsx", {
  default(v) {
    App = v;
  }

}, 3);

/** Startup the application by rendering the App layout component. */
Meteor.startup(() => {
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Container, Grid, Header, List, Segment;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Grid(v) {
    Grid = v;
  },

  Header(v) {
    Header = v;
  },

  List(v) {
    List = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 1);

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const menuStyle = {
      fontSize: 15
    };
    const menuStyle1 = {
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

}

module.exportDefault(Footer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Footer.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Footer.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Container, Grid, Header, List, Segment;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Grid(v) {
    Grid = v;
  },

  Header(v) {
    Header = v;
  },

  List(v) {
    List = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 1);

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const menuStyle = {
      fontSize: 17
    };
    const menuStyle1 = {
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

}

module.exportDefault(Footer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NavBar.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/NavBar.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 3);
let withRouter, NavLink;
module.link("react-router-dom", {
  withRouter(v) {
    withRouter = v;
  },

  NavLink(v) {
    NavLink = v;
  }

}, 4);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 5);
let Menu, Dropdown, Image, Visibility, Segment, Container, fixed;
module.link("semantic-ui-react", {
  Menu(v) {
    Menu = v;
  },

  Dropdown(v) {
    Dropdown = v;
  },

  Image(v) {
    Image = v;
  },

  Visibility(v) {
    Visibility = v;
  },

  Segment(v) {
    Segment = v;
  },

  Container(v) {
    Container = v;
  },

  fixed(v) {
    fixed = v;
  }

}, 6);

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = {
      margin: '0em',
      padding: '0em'
    };
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');

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
        menuStyle
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
        menuStyle
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

}
/** Declare the types of all properties. */


NavBar.propTypes = {
  currentUser: PropTypes.string
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : ''
}))(NavBar);
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Table, Button;
module.link("semantic-ui-react", {
  Table(v) {
    Table = v;
  },

  Button(v) {
    Button = v;
  }

}, 1);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 2);
let withRouter, Link, Redirect;
module.link("react-router-dom", {
  withRouter(v) {
    withRouter = v;
  },

  Link(v) {
    Link = v;
  },

  Redirect(v) {
    Redirect = v;
  }

}, 3);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 4);
let Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 5);

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  deleteCallback(error) {
    if (error) {
      Bert.alert({
        type: 'danger',
        message: "Deletion failed: ".concat(error.message)
      });
    } else {
      Bert.alert({
        type: 'success',
        message: 'Session successfully deleted!'
      });
    }
  }
  /* When the delete button is clicked, remove the corresponding item from the collection. */


  onClick() {
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

  render() {
    return React.createElement(Table.Row, null, React.createElement(Table.Cell, null, this.props.stuff.tutee), React.createElement(Table.Cell, null, this.props.stuff.courseName), React.createElement(Table.Cell, null, this.props.stuff.month), React.createElement(Table.Cell, null, this.props.stuff.day), React.createElement(Table.Cell, null, this.props.stuff.time), React.createElement(Table.Cell, null, this.props.stuff.tutor), React.createElement(Table.Cell, null, this.props.stuff.style), React.createElement(Table.Cell, null, React.createElement(Link, {
      to: "/edit/".concat(this.props.stuff._id)
    }, "Edit")), React.createElement(Table.Cell, null, React.createElement(Button, {
      basic: true,
      onClick: this.onClick
    }, "Delete")));
  }

}
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Button, Table;
module.link("semantic-ui-react", {
  Button(v) {
    Button = v;
  },

  Table(v) {
    Table = v;
  }

}, 1);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 2);
let Link, Redirect;
module.link("react-router-dom", {
  Link(v) {
    Link = v;
  },

  Redirect(v) {
    Redirect = v;
  }

}, 3);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 4);
let Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 5);

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  deleteCallback(error) {
    if (error) {
      Bert.alert({
        type: 'danger',
        message: "Deletion failed: ".concat(error.message)
      });
    } else {
      Bert.alert({
        type: 'success',
        message: 'Session successfully deleted!'
      });
    }
  }
  /* When the delete button is clicked, remove the corresponding item from the collection. */


  onClick() {
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

  render() {
    return React.createElement(Table.Row, null, React.createElement(Table.Cell, null, this.props.stuff.tutee), React.createElement(Table.Cell, null, this.props.stuff.courseName), React.createElement(Table.Cell, null, this.props.stuff.month), React.createElement(Table.Cell, null, this.props.stuff.day), React.createElement(Table.Cell, null, this.props.stuff.time), React.createElement(Table.Cell, null, this.props.stuff.tutor), React.createElement(Table.Cell, null, this.props.stuff.owner), React.createElement(Table.Cell, null, this.props.stuff.style), React.createElement(Table.Cell, null, React.createElement(Link, {
      to: "/editAdmin/".concat(this.props.stuff._id)
    }, "Edit")), React.createElement(Table.Cell, null, React.createElement(Button, {
      basic: true,
      onClick: this.onClick
    }, "Delete")));
  }

}
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

let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
module.link("semantic-ui-css/semantic.css");
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 3);
let Router, Route, Switch, Redirect;
module.link("react-router-dom", {
  HashRouter(v) {
    Router = v;
  },

  Route(v) {
    Route = v;
  },

  Switch(v) {
    Switch = v;
  },

  Redirect(v) {
    Redirect = v;
  }

}, 4);
let Landing;
module.link("../pages/Landing", {
  default(v) {
    Landing = v;
  }

}, 5);
let ListStuffAdmin;
module.link("../pages/ListStuffAdmin", {
  default(v) {
    ListStuffAdmin = v;
  }

}, 6);
let CreateTutor;
module.link("../pages/CreateTutor", {
  default(v) {
    CreateTutor = v;
  }

}, 7);
let EditTutor;
module.link("../pages/EditTutor", {
  default(v) {
    EditTutor = v;
  }

}, 8);
let EditAdmin;
module.link("../pages/EditAdmin", {
  default(v) {
    EditAdmin = v;
  }

}, 9);
let NotFound;
module.link("../pages/NotFound", {
  default(v) {
    NotFound = v;
  }

}, 10);
let Signin;
module.link("../pages/Signin", {
  default(v) {
    Signin = v;
  }

}, 11);
let Signup;
module.link("../pages/Signup", {
  default(v) {
    Signup = v;
  }

}, 12);
let Signout;
module.link("../pages/Signout", {
  default(v) {
    Signout = v;
  }

}, 13);
let UserProfile;
module.link("../pages/UserProfile", {
  default(v) {
    UserProfile = v;
  }

}, 14);
let EditUserProfile;
module.link("../pages/EditUserProfile", {
  default(v) {
    EditUserProfile = v;
  }

}, 15);
let RatingTutor;
module.link("../pages/RatingTutor", {
  default(v) {
    RatingTutor = v;
  }

}, 16);
let ListTutor;
module.link("../pages/ListTutor", {
  default(v) {
    ListTutor = v;
  }

}, 17);

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
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

}
/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */


const ProtectedRoute = (_ref) => {
  let {
    component: Component
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["component"]);
  return React.createElement(Route, (0, _extends2.default)({}, rest, {
    render: props => {
      const isLogged = Meteor.userId() !== null;
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


const AdminProtectedRoute = (_ref2) => {
  let {
    component: Component
  } = _ref2,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["component"]);
  return React.createElement(Route, (0, _extends2.default)({}, rest, {
    render: props => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  },

  StuffSchema(v) {
    StuffSchema = v;
  }

}, 1);
let Grid, Segment, Header, Form;
module.link("semantic-ui-react", {
  Grid(v) {
    Grid = v;
  },

  Segment(v) {
    Segment = v;
  },

  Header(v) {
    Header = v;
  },

  Form(v) {
    Form = v;
  }

}, 2);
let AutoForm;
module.link("uniforms-semantic/AutoForm", {
  default(v) {
    AutoForm = v;
  }

}, 3);
let TextField;
module.link("uniforms-semantic/TextField", {
  default(v) {
    TextField = v;
  }

}, 4);
let SelectField;
module.link("uniforms-semantic/SelectField", {
  default(v) {
    SelectField = v;
  }

}, 5);
let SubmitField;
module.link("uniforms-semantic/SubmitField", {
  default(v) {
    SubmitField = v;
  }

}, 6);
let HiddenField;
module.link("uniforms-semantic/HiddenField", {
  default(v) {
    HiddenField = v;
  }

}, 7);
let ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  default(v) {
    ErrorsField = v;
  }

}, 8);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 9);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 10);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 11);

/** Renders the Page for adding a document. */
class CreateTutor extends React.Component {
  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  insertCallback(error) {
    if (error) {
      Bert.alert({
        type: 'danger',
        message: "Could not create a study session: ".concat(error.message)
      });
    } else {
      Bert.alert({
        type: 'success',
        message: 'Study session succesfully created!'
      });
      this.formRef.reset();
    }
  }
  /** On submit, insert the data. */


  submit(data) {
    const {
      tutee,
      courseName,
      month,
      day,
      time,
      tutor,
      style
    } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({
      tutee,
      courseName,
      month,
      day,
      time,
      owner,
      tutor,
      style
    }, this.insertCallback);
  }
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  render() {
    const menuStyle = {
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
      ref: ref => {
        this.formRef = ref;
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

}

module.exportDefault(CreateTutor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EditAdmin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/EditAdmin.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Grid, Loader, Header, Segment, Form, Container;
module.link("semantic-ui-react", {
  Grid(v) {
    Grid = v;
  },

  Loader(v) {
    Loader = v;
  },

  Header(v) {
    Header = v;
  },

  Segment(v) {
    Segment = v;
  },

  Form(v) {
    Form = v;
  },

  Container(v) {
    Container = v;
  }

}, 1);
let Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  },

  StuffSchema(v) {
    StuffSchema = v;
  }

}, 2);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 3);
let AutoForm;
module.link("uniforms-semantic/AutoForm", {
  default(v) {
    AutoForm = v;
  }

}, 4);
let TextField;
module.link("uniforms-semantic/TextField", {
  default(v) {
    TextField = v;
  }

}, 5);
let SelectField;
module.link("uniforms-semantic/SelectField", {
  default(v) {
    SelectField = v;
  }

}, 6);
let SubmitField;
module.link("uniforms-semantic/SubmitField", {
  default(v) {
    SubmitField = v;
  }

}, 7);
let HiddenField;
module.link("uniforms-semantic/HiddenField", {
  default(v) {
    HiddenField = v;
  }

}, 8);
let ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  default(v) {
    ErrorsField = v;
  }

}, 9);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 10);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 11);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 12);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 13);

/** Renders the Page for editing a single document. */
class EditAdmin extends React.Component {
  /** On successful submit, insert the data. */
  submit(data) {
    const {
      tutee,
      courseName,
      month,
      day,
      time,
      tutor,
      owner,
      style,
      _id
    } = data;
    Stuffs.update(_id, {
      $set: {
        tutee,
        courseName,
        month,
        day,
        time,
        tutor,
        owner,
        style
      }
    }, error => error ? Bert.alert({
      type: 'danger',
      message: "Update failed: ".concat(error.message, " :(")
    }) : Bert.alert({
      type: 'success',
      message: 'Session successfully updated!'
    }));
  }
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */


  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  renderPage() {
    const menuStyle = {
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

}
/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */


EditAdmin.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker((_ref) => {
  let {
    match
  } = _ref;
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id; // Get access to Stuff documents.

  const subscription = Meteor.subscribe('StuffAdmin');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Grid, Loader, Header, Segment, Form;
module.link("semantic-ui-react", {
  Grid(v) {
    Grid = v;
  },

  Loader(v) {
    Loader = v;
  },

  Header(v) {
    Header = v;
  },

  Segment(v) {
    Segment = v;
  },

  Form(v) {
    Form = v;
  }

}, 1);
let Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  },

  StuffSchema(v) {
    StuffSchema = v;
  }

}, 2);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 3);
let AutoForm;
module.link("uniforms-semantic/AutoForm", {
  default(v) {
    AutoForm = v;
  }

}, 4);
let TextField;
module.link("uniforms-semantic/TextField", {
  default(v) {
    TextField = v;
  }

}, 5);
let SelectField;
module.link("uniforms-semantic/SelectField", {
  default(v) {
    SelectField = v;
  }

}, 6);
let SubmitField;
module.link("uniforms-semantic/SubmitField", {
  default(v) {
    SubmitField = v;
  }

}, 7);
let HiddenField;
module.link("uniforms-semantic/HiddenField", {
  default(v) {
    HiddenField = v;
  }

}, 8);
let ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  default(v) {
    ErrorsField = v;
  }

}, 9);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 10);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 11);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 12);

/** Renders the Page for editing a single document. */
class EditTutor extends React.Component {
  /** On successful submit, insert the data. */
  submit(data) {
    const {
      tutee,
      courseName,
      month,
      day,
      time,
      tutor,
      style,
      _id
    } = data;
    Stuffs.update(_id, {
      $set: {
        tutee,
        courseName,
        month,
        day,
        time,
        tutor,
        style
      }
    }, error => error ? Bert.alert({
      type: 'danger',
      message: "Update failed: ".concat(error.message, " :(")
    }) : Bert.alert({
      type: 'success',
      message: 'Session successfully updated!'
    }));
  }
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */


  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  renderPage() {
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

}
/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */


EditTutor.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker((_ref) => {
  let {
    match
  } = _ref;
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id; // Get access to Stuff documents.

  const subscription = Meteor.subscribe('Stuff');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Users, UserSchema;
module.link("/imports/api/stuff/user", {
  Users(v) {
    Users = v;
  },

  UserSchema(v) {
    UserSchema = v;
  }

}, 1);
let Card, Image, Button, Form, Grid;
module.link("semantic-ui-react", {
  Card(v) {
    Card = v;
  },

  Image(v) {
    Image = v;
  },

  Button(v) {
    Button = v;
  },

  Form(v) {
    Form = v;
  },

  Grid(v) {
    Grid = v;
  }

}, 2);
let AutoForm;
module.link("uniforms-semantic/AutoForm", {
  default(v) {
    AutoForm = v;
  }

}, 3);
let TextField;
module.link("uniforms-semantic/TextField", {
  default(v) {
    TextField = v;
  }

}, 4);
let LongTextField;
module.link("uniforms-semantic/LongTextField", {
  default(v) {
    LongTextField = v;
  }

}, 5);
let SelectField;
module.link("uniforms-semantic/SelectField", {
  default(v) {
    SelectField = v;
  }

}, 6);
let ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  default(v) {
    ErrorsField = v;
  }

}, 7);
let SubmitField;
module.link("uniforms-semantic/SubmitField", {
  default(v) {
    SubmitField = v;
  }

}, 8);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 9);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 10);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 11);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 12);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 13);

/** A simple static component to render some text for the landing page. */
class EditUserProfile extends React.Component {
  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  insertCallback(error) {
    if (error) {
      Bert.alert({
        type: 'danger',
        message: "Could not update the user profile: ".concat(error.message)
      });
    } else {
      Bert.alert({
        type: 'success',
        message: 'User profile succesfully updated!'
      });
      this.formRef.reset();
    }
  }
  /** On submit, insert the data. */


  submit(data) {
    const {
      firstName,
      lastName,
      bio,
      instagram,
      facebook,
      interest,
      course,
      _id
    } = data;
    Users.update(_id, {
      $set: {
        firstName,
        lastName,
        bio,
        instagram,
        facebook,
        interest,
        course
      }
    }, error => error ? Bert.alert({
      type: 'danger',
      message: "Could not update the user profile: ".concat(error.message)
    }) : Bert.alert({
      type: 'success',
      message: 'User profile succesfully updated!'
    }));
  }

  render() {
    const menuStyle = {
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

}

EditUserProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker((_ref) => {
  let {
    match
  } = _ref;
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id; // Get access to Stuff documents.

  const subscription = Meteor.subscribe('User');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Button, Container, Divider, Grid, Header, Icon, Image, Loader, Segment;
module.link("semantic-ui-react", {
  Button(v) {
    Button = v;
  },

  Container(v) {
    Container = v;
  },

  Divider(v) {
    Divider = v;
  },

  Grid(v) {
    Grid = v;
  },

  Header(v) {
    Header = v;
  },

  Icon(v) {
    Icon = v;
  },

  Image(v) {
    Image = v;
  },

  Loader(v) {
    Loader = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 1);
let NavLink;
module.link("react-router-dom", {
  NavLink(v) {
    NavLink = v;
  }

}, 2);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 3);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 4);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 5);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 6);
let Users;
module.link("/imports/api/stuff/user.js", {
  Users(v) {
    Users = v;
  }

}, 7);
let Footer;
module.link("../components/Footer", {
  default(v) {
    Footer = v;
  }

}, 8);
let AdminFooter;
module.link("../components/AdminFooter", {
  default(v) {
    AdminFooter = v;
  }

}, 9);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 10);

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }

  renderPage() {
    const menuStyle1 = {
      marginTop: 120,
      paddingLeft: 60
    };
    const menuStyle2 = {
      marginTop: 120,
      paddingRight: 60
    };
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');

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

}

Landing.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('User');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Table, Header, Loader, Grid;
module.link("semantic-ui-react", {
  Table(v) {
    Table = v;
  },

  Header(v) {
    Header = v;
  },

  Loader(v) {
    Loader = v;
  },

  Grid(v) {
    Grid = v;
  }

}, 2);
let Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 3);
let StuffItemAdmin;
module.link("/imports/ui/components/StuffItemAdmin", {
  default(v) {
    StuffItemAdmin = v;
  }

}, 4);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 5);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 6);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 7);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }
  /** Render the page once subscriptions have been received. */


  renderPage() {
    const menuStyle = {
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
    }, React.createElement(Table.Header, null, React.createElement(Table.Row, null, React.createElement(Table.HeaderCell, null, "Tutee"), React.createElement(Table.HeaderCell, null, "Course Name"), React.createElement(Table.HeaderCell, null, "Month"), React.createElement(Table.HeaderCell, null, "Day"), React.createElement(Table.HeaderCell, null, "Time"), React.createElement(Table.HeaderCell, null, "Tutor"), React.createElement(Table.HeaderCell, null, "Owner"), React.createElement(Table.HeaderCell, null, "Style"), React.createElement(Table.HeaderCell, null, "Edit"), React.createElement(Table.HeaderCell, null, "Delete"))), React.createElement(Table.Body, null, this.props.stuffs.map(stuff => React.createElement(StuffItemAdmin, {
      key: stuff._id,
      stuff: stuff
    }))))));
  }

}
/** Require an array of Stuff documents in the props. */


ListStuffAdmin.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StuffAdmin');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Grid, Table, Header, Loader;
module.link("semantic-ui-react", {
  Grid(v) {
    Grid = v;
  },

  Table(v) {
    Table = v;
  },

  Header(v) {
    Header = v;
  },

  Loader(v) {
    Loader = v;
  }

}, 2);
let Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 3);
let StuffItem;
module.link("/imports/ui/components/StuffItem", {
  default(v) {
    StuffItem = v;
  }

}, 4);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 5);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 6);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 7);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListTutor extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }
  /** Render the page once subscriptions have been received. */


  renderPage() {
    const menuStyle = {
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
    }, React.createElement(Table.Header, null, React.createElement(Table.Row, null, React.createElement(Table.HeaderCell, null, "Tutee"), React.createElement(Table.HeaderCell, null, "Course Name"), React.createElement(Table.HeaderCell, null, "Month"), React.createElement(Table.HeaderCell, null, "Day"), React.createElement(Table.HeaderCell, null, "Time"), React.createElement(Table.HeaderCell, null, "Tutor"), React.createElement(Table.HeaderCell, null, "Style"), React.createElement(Table.HeaderCell, null, "Edit"), React.createElement(Table.HeaderCell, null, "Delete"))), React.createElement(Table.Body, null, this.props.stuffs.map(stuff => React.createElement(StuffItem, {
      key: stuff._id,
      stuff: stuff
    })))))));
  }

}
/** Require an array of Stuff documents in the props. */


ListTutor.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Header;
module.link("semantic-ui-react", {
  Header(v) {
    Header = v;
  }

}, 1);

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class NotFound extends React.Component {
  render() {
    return React.createElement(Header, {
      as: "h2",
      textAlign: "center"
    }, React.createElement("p", null, "Page not found"));
  }

}

module.exportDefault(NotFound);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RatingTutor.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/RatingTutor.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Rates, RateSchema;
module.link("/imports/api/rate/rate", {
  Rates(v) {
    Rates = v;
  },

  RateSchema(v) {
    RateSchema = v;
  }

}, 1);
let Grid, Segment, Header;
module.link("semantic-ui-react", {
  Grid(v) {
    Grid = v;
  },

  Segment(v) {
    Segment = v;
  },

  Header(v) {
    Header = v;
  }

}, 2);
let AutoForm;
module.link("uniforms-semantic/AutoForm", {
  default(v) {
    AutoForm = v;
  }

}, 3);
let TextField;
module.link("uniforms-semantic/TextField", {
  default(v) {
    TextField = v;
  }

}, 4);
let SelectField;
module.link("uniforms-semantic/SelectField", {
  default(v) {
    SelectField = v;
  }

}, 5);
let SubmitField;
module.link("uniforms-semantic/SubmitField", {
  default(v) {
    SubmitField = v;
  }

}, 6);
let HiddenField;
module.link("uniforms-semantic/HiddenField", {
  default(v) {
    HiddenField = v;
  }

}, 7);
let ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  default(v) {
    ErrorsField = v;
  }

}, 8);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 9);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 10);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 11);

/** Renders the Page for adding a document. */
class RatingTutor extends React.Component {
  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  insertCallback(error) {
    if (error) {
      Bert.alert({
        type: 'danger',
        message: "Could not create a comment: ".concat(error.message)
      });
    } else {
      Bert.alert({
        type: 'success',
        message: 'Comment has been succesfully post!'
      });
      this.formRef.reset();
    }
  }
  /** On submit, insert the data. */


  submit(data) {
    const {
      tutor,
      rateYourTutor,
      wouldSelectThisTutorAgain,
      comment
    } = data;
    const owner = Meteor.user().username;
    Rates.insert({
      tutor,
      rateYourTutor,
      wouldSelectThisTutorAgain,
      comment,
      owner
    }, this.insertCallback);
  }
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  render() {
    const menuStyle = {
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
      ref: ref => {
        this.formRef = ref;
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

}

module.exportDefault(RatingTutor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signin.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Signin
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 1);
let Link, Redirect;
module.link("react-router-dom", {
  Link(v) {
    Link = v;
  },

  Redirect(v) {
    Redirect = v;
  }

}, 2);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 3);
let Container, Form, Grid, Header, Message, Segment;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Form(v) {
    Form = v;
  },

  Grid(v) {
    Grid = v;
  },

  Header(v) {
    Header = v;
  },

  Message(v) {
    Message = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 4);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 5);

class Signin extends React.Component {
  /** Initialize component state with properties for login and redirection. */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferer: false
    }; // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /** Update the form controls each time the user interacts with them. */


  handleChange(e, _ref) {
    let {
      name,
      value
    } = _ref;
    this.setState({
      [name]: value
    });
  }
  /** Handle Signin submission using Meteor's account mechanism. */


  handleSubmit() {
    const {
      email,
      password
    } = this.state;
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.setState({
          error: '',
          redirectToReferer: true
        });
      }
    });
  }
  /** Render the signin form. */


  render() {
    const {
      from
    } = this.props.location.state || {
      from: {
        pathname: '/'
      }
    }; // if correct authentication, redirect to page instead of login screen

    if (this.state.redirectToReferer) {
      return React.createElement(Redirect, {
        to: from
      });
    } // Otherwise return the Login form.


    const menuStyle = {
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

}

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
module.export({
  default: () => Signout
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Header, Grid;
module.link("semantic-ui-react", {
  Header(v) {
    Header = v;
  },

  Grid(v) {
    Grid = v;
  }

}, 2);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 3);

class Signout extends React.Component {
  render() {
    Meteor.logout();
    const menuStyle = {
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

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signup.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signup.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Signup
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Link;
module.link("react-router-dom", {
  Link(v) {
    Link = v;
  }

}, 1);
let Container, Form, Grid, Header, Message, Segment;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Form(v) {
    Form = v;
  },

  Grid(v) {
    Grid = v;
  },

  Header(v) {
    Header = v;
  },

  Message(v) {
    Message = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 2);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 3);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 4);

class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }; // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /** Update the form controls each time the user interacts with them. */


  handleChange(e, _ref) {
    let {
      name,
      value
    } = _ref;
    this.setState({
      [name]: value
    });
  }
  /** Handle Signup submission using Meteor's account mechanism. */


  handleSubmit() {
    const {
      email,
      password
    } = this.state;
    Accounts.createUser({
      email,
      username: email,
      password
    }, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {// browserHistory.push('/login');
      }
    });
  }
  /** Display the signup form. */


  render() {
    const menuStyle = {
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

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UserProfile.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/UserProfile.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Users, UserSchema;
module.link("/imports/api/stuff/user", {
  Users(v) {
    Users = v;
  },

  UserSchema(v) {
    UserSchema = v;
  }

}, 1);
let Card, Image, Button, Form, Grid;
module.link("semantic-ui-react", {
  Card(v) {
    Card = v;
  },

  Image(v) {
    Image = v;
  },

  Button(v) {
    Button = v;
  },

  Form(v) {
    Form = v;
  },

  Grid(v) {
    Grid = v;
  }

}, 2);
let AutoForm;
module.link("uniforms-semantic/AutoForm", {
  default(v) {
    AutoForm = v;
  }

}, 3);
let TextField;
module.link("uniforms-semantic/TextField", {
  default(v) {
    TextField = v;
  }

}, 4);
let LongTextField;
module.link("uniforms-semantic/LongTextField", {
  default(v) {
    LongTextField = v;
  }

}, 5);
let SelectField;
module.link("uniforms-semantic/SelectField", {
  default(v) {
    SelectField = v;
  }

}, 6);
let ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  default(v) {
    ErrorsField = v;
  }

}, 7);
let SubmitField;
module.link("uniforms-semantic/SubmitField", {
  default(v) {
    SubmitField = v;
  }

}, 8);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 9);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 10);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 11);

/** A simple static component to render some text for the landing page. */
class UserProfile extends React.Component {
  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  insertCallback(error) {
    if (error) {
      Bert.alert({
        type: 'danger',
        message: "Could not update the user profile: ".concat(error.message)
      });
    } else {
      Bert.alert({
        type: 'success',
        message: 'User profile succesfully updated!'
      });
      this.formRef.reset();
    }
  }
  /** On submit, insert the data. */


  submit(data) {
    const {
      firstName,
      lastName,
      bio,
      instagram,
      facebook,
      interest,
      course,
      position
    } = data;
    console.log(data, firstName, lastName);
    const owner = Meteor.user().username;
    Users.insert({
      firstName,
      lastName,
      bio,
      instagram,
      facebook,
      interest,
      course,
      position,
      owner
    }, this.insertCallback);
  }

  render() {
    const menuStyle = {
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
      ref: ref => {
        this.formRef = ref;
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

}

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