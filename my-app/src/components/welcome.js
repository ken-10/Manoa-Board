import React, { Component } from "react";
import { Button, Container, Divider, Grid, Header, Icon, Image, Loader, Segment } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
        return (
           const menuStyle1 = { marginTop: 120, paddingLeft: 60 };
           const menuStyle2 = { marginTop: 120, paddingRight: 60 };
                   <div>
                     <NavBar/>
                     <div className='background'>
                       <Grid columns={2} divided='vertically'>
                         <Grid.Column textAlign='center' style={menuStyle1}>
                           <Icon inverted size='massive' name='student'/>
                         </Grid.Column>
                       </Grid>

                       <Container>
                         <Segment style={{ padding: '20em 0em' }} vertical>
                           <Grid container stackable verticalAlign='middle'>
                             <Grid.Row>
                               <Grid.Column width={8}>
                                 <Header as='h3' style={{ fontSize: '2em' }}>
                                   We Gather People In Manoa
                                 </Header>
                                 <p style={{ fontSize: '1.33em' }}>
                                   Manoa Board is a platform that allows users to share pictures.
                                   This application will allow users to upload pictures and share it either to the public
                                   or to only their friends.
                                 </p>
                                 <Header as='h3' style={{ fontSize: '2em' }}>
                                   WHY?
                                 </Header>
                                 <p style={{ fontSize: '1.33em' }}>
                                  Users can share their stories with their friends in the Manoa Board, and they also can share any
                                  fun facts or news about Manoa. This is a great platform for people to make friends and share their
                                  campus life in Manoa Board.
                                 </p>

                             </Grid.Row>
                             <Grid.Row>
                               <Grid.Column textAlign='center'>
                                 <Button primary size='huge' as={NavLink} exact to="/create">Create a Post Now!</Button>
                               </Grid.Column>
                             </Grid.Row>
                           </Grid>
                         </Segment>
                         <Segment style={{ padding: '0em' }} vertical>
                           <Grid celled='internally' columns='equal' stackable>
                             <Grid.Row textAlign='center'>
                               <Grid.Column style={{ paddingBottom: '3em', paddingTop: '3em' }}>
                                 <Header as='h3' style={{ fontSize: '2em' }}>
                                   What a Great Manoa Board
                                 </Header>
                                 <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                               </Grid.Column>
                               <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                 <Header as='h3' style={{ fontSize: '2em' }}>
                                   It has never been late to join the Manoa Board.
                                 </Header>
                                 <p style={{ fontSize: '1.33em' }}>
                                 </p>
                               </Grid.Column>
                             </Grid.Row>
                           </Grid>
                         </Segment>
                         <Segment style={{ padding: '8em 0em' }} vertical>
                           <Container text>
                             <Header as='h3' style={{ fontSize: '2em' }}>
                               Breaking The Grid, Grabs Your Attention
                             </Header>
                             <p style={{ fontSize: '1.33em' }}>
                               To use Manoa Board, a user must login and set up their profile. The profile enables each user
                               to add or edit any posts, and fill out their personal information, so they can be identify by
                               their information.
                           </p>
                           <Button primary size='large' as={NavLink} exact to="/signin">
                             Join Us Today!
                           </Button>
                           <Divider
                               as='h4'
                               className='header'
                               horizontal
                               style={{ margin: '5em 0em', textTransform: 'uppercase' }}
                           >
                             <a href='#'>More</a>
                           </Divider>
                           <Header as='h3' style={{ fontSize: '2em' }}>
                             Did We Tell You About Us?
                           </Header>
                           <p style={{ fontSize: '1.33em' }}>
                             Yes I know you hardly know us. You can sign up an account for free.
                             By the way, this is a good chance for you to interact with different people. Don't miss us!
                           </p>
                           <Button primary size='large' as={NavLink} exact to="/signin">
                             I'm Still Quite Interested
                           </Button>
                         </Container>
                       </Segment>
                     </Container>
                   </div>
                   </div>
        );
    }
}