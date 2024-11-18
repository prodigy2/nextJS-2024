import React, {FC} from 'react';
import {IPost} from "@/models/IPost";
import Link from "next/link";

interface IProps {
    post: IPost;
}
const PostComponents: FC<IProps> = ({post }) => {
    return (
        <div>
            <Link href={`/posts/${post.id}`}>{post.id}:{post.title}</Link>
        </div>
    );
};

export default PostComponents;