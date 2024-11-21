import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import RedditPostcard from '../components/RedditPostcard';

function AllPosts() {
    const [posts, setPosts] = useState();
    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        }
    );
    setLoading((loading)=>!loading);
    }, []);


    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts?.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
            <RedditPostcard/>
        </div>

      
    )
}

export default AllPosts;