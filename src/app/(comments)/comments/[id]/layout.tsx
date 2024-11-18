import React from 'react';
import {Metadata} from "next";
import {commentService} from "@/services/api.comment.service";


export const generateMetadata = async ({params}: {params: {id: string} }): Promise<Metadata> => {
    const comment  = await commentService.getCommentById( params.id);
    console.log(comment);
    return {title: 'comment?.title'}
}
type Props = { children: React.ReactNode }
const CommentLayout = ({children}: Props) => {
    return (
        <div>

            {children}
        </div>
    );
};

export default CommentLayout;