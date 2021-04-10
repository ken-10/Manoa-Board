import React, { Component } from 'react';

export default class makePost extends Component {
  render() {
    class TopMenu extends React.Component {
      render() {
        return (
            <Menu borderless className="topmenu">
              <Container>
                <Menu.Item position="right">
                  <Dropdown item text="My Account">
                    <Dropdown.Menu>
                      <Dropdown.Item>Sign in</Dropdown.Item>
                      <Dropdown.Item>Sign up</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Container>
            </Menu>

        )
      }
    }

    class MiddleMenu extends React.Component {
      render() {
        return (
            <Menu borderless className="middlemenu">
              <Grid centered container>
                <Menu.Item id="track2">Make a post</Menu.Item>
                <div className="form-group">
                  <label>What is in your mind?</label>
                  <input type="caption" className="form-control" placeholder="Enter caption"/>
                </div>

                <div className="form-group" style={{ paddingBottom: "15px" }}>
                  <label>Select pictures</label>
                  <input type="image" className="form-control" placeholder="Select images"/>
                </div>
              </Grid>
            </Menu>
        )
      }
    }
  }
}
