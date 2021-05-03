import React from 'react';
import { Container, Header, Grid, Card, Label, Icon } from 'semantic-ui-react';

const Dashboard = () => {

    const rows = [];
    let row = [];
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 3; j++) {
            row.push(
                <Grid.Column>
                    <Card>
                        <Label corner='right' size='small'><Icon name='eye' /></Label>
                        <Card.Content textAlign='center'>
                            <Card.Header>Account {3 * (i - 1 ) + j} Name</Card.Header>
                        </Card.Content>
                        <Card.Content extra textAlign='right'>
                            <Card.Description>
                                <Header as='h4' textAlign='left'>Post</Header>
                                UH Manoa
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra textAlign='right'>
                            <Card.Description>
                                <Header as='h4' textAlign='left'>Tag People</Header>
                                Jonny Dang
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra textAlign='right'>
                            <Card.Description>
                                <Header as='h4' textAlign='left'>Add Location</Header>
                                Honolulu, Hawaii
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            );
        }
        rows.push(<Grid.Row>{row}</Grid.Row>);
        row = [];
    }

    return (
        <Container>
            <Header textAlign='center' as='h2'>UH Manoa Dashboard</Header>
            <Grid relaxed columns={1} style={{ overflowY: 'auto', height: '60vh' }}>
                {rows.map(row => { return row; })}
            </Grid>
        </Container>
    );
}

export default Dashboard;
