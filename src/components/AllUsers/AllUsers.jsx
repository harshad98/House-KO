import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Card, CardHeader, CardContent, CardActions, Avatar, Typography, Button, Container, List, ListItem, ListItemText, Chip } from "@mui/material";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [states, setStates] = useState([]);

    const [selectedStates, setSelectedStates] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                //extract users from API
                const userResponse = await axios.get('https://dummyjson.com/users');
                setUsers(userResponse.data.users);
                console.log('Users:', userResponse.data); // Log posts


                //extract states from users
                const stateResponse = userResponse.data.users.map((user) => user.address.state);
                setStates(stateResponse);
                console.log('States:', stateResponse); // Log states

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchUsers();
    }, []);


    // Handle state click
    const handleStateClick = (state) => {
        setSelectedStates((prevSelectedStates) => {
            const newSelectedStates =
                prevSelectedStates.includes(state)
                    ? prevSelectedStates.filter((s) => s !== state) // Remove state
                    : [...prevSelectedStates, state]              // Add state

            console.log("Selected States after update:", newSelectedStates); // Log selectedStates
            return newSelectedStates;
        });
    };

    //handle filter users by selected states
    useEffect(() => {
        setFilteredUsers(
            users.filter((user) => {
                if (selectedStates.length === 0) {
                    return true;
                } else {
                    const newFilteredUsers = selectedStates.includes(user.address.state);
                    console.log("Filtered Users after state selection:", newFilteredUsers); // Log filteredUsers
                    return newFilteredUsers;
                }
            })
        );
    }, [users, selectedStates]);


    return (
        // Render states filter
        <Box>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Service Providers & Suppliers Near you
                </Typography>



                {/* Render States */}
                <Box mb={2}>
                    {states.map((state) => (
                        <Chip
                            key={state}
                            label={state}
                            clickable
                            onClick={() => handleStateClick(state)}
                            color={selectedStates.includes(state) ? 'primary' : 'default'}
                            style={{ margin: '4px' }}
                        />
                    ))}
                </Box>


            </Container>

            {/* Render Users */}
            <Grid container spacing={2}>
                {filteredUsers.map((user) => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        <Card>
                            <CardHeader
                                avatar={<Avatar src={user.avatar} alt={user.name} />}
                                title={user.name}
                                subheader={user.email}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Additional details about {user.name} can go here.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View Profile</Button>
                                <Button size="small">Send Message</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default AllUsers