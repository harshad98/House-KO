import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';
import { UserContext } from '../../context/UserContext';
import { Card, CardMedia, Box } from '@mui/material';


const PostDetail = () => {
  const { postId } = useParams();
  const { postDetail, fetchPostById } = useContext(PostContext);
  const userData = useContext(UserContext);

  useEffect(() => {
    fetchPostById(parseInt(postId, 10));
  }, [postId, fetchPostById]);

  if (!postDetail) {
    return <h2>Loading post details...</h2>;
  }

  return (
    <Box>
        <Card>
            <CardMedia 
            sx={{ width: '100%', height: '100%' }}
                component="img"
                height="194"
                src={userData[postDetail.userId]?.image}
                alt="Post image"
            />
        </Card>
    </Box>
  );
};

export default PostDetail;
