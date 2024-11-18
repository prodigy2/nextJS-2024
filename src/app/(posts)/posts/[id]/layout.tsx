import React from 'react';
import {Metadata} from "next";
import {postService} from "@/services/api.post.service";


export const generateMetadata = async ({params}: {params: {id: string} }): Promise<Metadata> => {
    const post  = await postService.getPostById( params.id);
    console.log(post);
    return {title: 'post?.body'}
}
type Props = { children: React.ReactNode }
const PostLayout = ({children}: Props) => {
    return (
        <div>

            {children}
        </div>
    );
};

export default PostLayout;