import axios from 'axios';
import React from 'react'
import { createContext, useState, useEffect, useContext } from 'react'
import { PostContext } from '../context/PostContext';



export const TagContext = createContext();

export const TagProvider = ({children}) => {
    const { posts, setPosts, postDetail, fetchPostById } = useContext(PostContext);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
        try {
            const allTags =  await posts?.map((post) => post.tags).flat() || [];
            const uniqueTags = Array.from(new Set(allTags));
            setTags(uniqueTags);
            console.log('Tags:', uniqueTags); // Log tags
        } catch (error) {
            console.error(error);
        } 
    };
    fetchTags();
},
[posts]
);

//handle tag click
const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) => {
      const newSelectedTags = prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag) // Remove tag
        : [...prevSelectedTags, tag];              // Add tag
      console.log('Selected Tags:', newSelectedTags); // Log selected tags
      return newSelectedTags;
    });
  };

//handle filter photos
useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredPosts(posts || []); // Show all photos if no tag is selected
    } else {
      setFilteredPosts(
        posts.filter((post) =>
          selectedTags.every((tag) => post.tags.includes(tag))
        )
      );
    }
  }, [selectedTags, posts]);

useEffect(() => {
    console.log('Filtered Posts:', filteredPosts); // Log filtered posts
}, [filteredPosts]);


return (
    <TagContext.Provider value={{ tags, selectedTags, filteredPosts, handleTagClick }}>
      {children}
    </TagContext.Provider>
  );
};

export default TagProvider;