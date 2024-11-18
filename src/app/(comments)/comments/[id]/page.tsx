import React from 'react';
import {commentService} from "@/services/api.comment.service";

type Params = { id: string };
const CommentPage = async ({params}: {params: Params}) => {
    const comment = await commentService.getCommentById( params.id);
    return (
        <div>
            <hr/>
            {JSON.stringify(comment)}
            <hr/>
        </div>
    );
};

export default CommentPage;