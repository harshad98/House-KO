import axios from 'axios';
import React from 'react'
import { createContext, useState, useEffect, useContext } from 'react'
import { PostContext } from './PostContext';


export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [userData, setUserData] = useState([]);
    const { posts, setPosts, postDetail, fetchPostById } = useContext(PostContext);


    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const userIds = [...new Set(posts.map(post => post.userId))];
            const userDetailsPromises = userIds.map((userId) => 
                axios.get(`https://dummyjson.com/users/${userId}`)
                );
            const userResponses  = await Promise.all(userDetailsPromises);
            const userData = userResponses.reduce((acc, response) => {
                acc[response.data.id] = response.data;
                return acc;
              }, {});

            setUserData(userData);
            console.log('User Data:', userData); // Log user data

        } catch (error) {
            console.error(error);
        }
    };
    fetchUserData();
},
[posts]
);
return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;