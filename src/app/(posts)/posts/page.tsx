import React from 'react';
import {IPost} from "@/models/IPost";
import {postService} from "@/services/api.post.service";
import PostComponents from "@/components/PostComponent";

const postsPage = async () => {
    const allPosts = await postService.getAllPosts();
    return (
        <div>
            <ul>
                <li>
                {
                    allPosts.map((post:IPost) => (<div key={post.id}>
                        <PostComponents post={post}/>
                    </div>))

                }
                </li>
            </ul>
        </div>
    );
};

export default postsPage;