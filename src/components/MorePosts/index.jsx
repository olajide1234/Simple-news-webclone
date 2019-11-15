import React from 'react';
import { Button } from 'react-bootstrap';


function MorePosts({onClick}) {
  return (
    <div className='more-posts'>
      <Button onClick={onClick} className="custom more-post-button">More posts</Button>
    </div>
  );
}

export default MorePosts;
