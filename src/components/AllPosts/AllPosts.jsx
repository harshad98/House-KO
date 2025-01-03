import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';
import { TagContext } from '../../context/TagContext';
import { Box, Chip, Typography, Grid, Card, CardHeader, CardMedia, Avatar } from '@mui/material';
import { UserContext } from '../../context/UserContext';

const AllPosts = () => {
    const navigate = useNavigate();
    const posts = useContext(PostContext);
    const userData = useContext(UserContext);
    const { tags, handleTagClick, selectedTags, filteredPosts } = useContext(TagContext);
     console.log("in AllPosts component filtered posts  are fetched as follows:", filteredPosts);
    console.log("in AllPosts component tags is fetched as follows:", tags);
    console.log("in AllPosts component userData is fetched as follows:", userData);

    
  return (
    <Box>
        {/* //render tags */}
       
                <Typography variant="h6" gutterBottom>
                    Latest home design ideas near you
                </Typography>

                {/* Tags */}
                <Box display="flex" gap={1} flexWrap="wrap">
                {tags.map((tag) => (
                    <Chip
                        key={tag}
                        label={tag}
                        onClick={() => handleTagClick(tag)}
                        color={selectedTags.includes(tag) ? 'primary' : 'default'}
                        gutterBottom
                        sx={{marginBottom: 2, spaceBetween: 2 }}

                    />
                    
                ))}
                </Box>
           

            {/* render posts */}

      {/* <h1>All Posts</h1> */}
      
      <Grid container spacing={3}>
        {filteredPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}
          
          >
            <Card
            sx={{borderRadius: 3}}
            
            onClick={() => {
              console.log(`Navigating to posts/${post.id}`);
              navigate(`/designs/posts/${post.id}`);
          }}
          >
              <CardMedia
                component="img"
                height="194"
                src={userData[post.userId]?.image}
                alt="Post image"
                
              />
   <CardHeader
        avatar={<Avatar 
        src={userData[post.userId]?.image}
        />}
        title={userData[post.userId]?.firstName + " " + userData[post.userId]?.lastName}
      />
            </Card>
          </Grid>
        ))}
      </Grid>
          


    </Box>
  )
}

export default AllPosts