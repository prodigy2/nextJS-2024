import React, {FC} from 'react';
import {IComment} from "@/models/IComment";
import Link from "next/link";

interface IProps {
    comment: IComment;
}
const CommentComponents: FC<IProps> = ({comment }) => {
    return (
        <div>
            <Link href={`/comments/${comment.id}`}>{comment.postId}:{comment.name}</Link>
        </div>
    );
};

export default CommentComponents;