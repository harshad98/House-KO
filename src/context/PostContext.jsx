import axios from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react';

export const PostContext = createContext();

export const PostProvider = ({children}) => {

    const [posts, setPosts] = useState([]);
    const [postDetail, setPostDetail] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/posts');
            console.log(response.data.posts);
            setPosts(response.data.posts);
        } catch (error) {
            console.error(error);
        } 
    };
    fetchPosts();
},
[]
);
//fetch post by id
const fetchPostById = (postId) => {
    const post = posts.find(p => p.id === postId);
    setPostDetail(post);
};

return (
    <PostContext.Provider value={{ posts, setPosts, postDetail, fetchPostById }}>
      {children}
    </PostContext.Provider>
  );
};


export default PostProvider;