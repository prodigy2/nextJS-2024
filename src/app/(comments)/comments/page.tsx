import React from 'react';
import {IComment} from "@/models/IComment";
import {commentService} from "@/services/api.comment.service";
import CommentComponents from "@/components/CommentComponent";

const commentsPage = async () => {
    const allComments = await commentService.getAllComments();

    return (
        <div>
            <ul>
                <li>
                {
                    allComments.map((comment:IComment) => (<div key={comment.id}>
                        <CommentComponents comment={comment}/>
                    </div>))

                }
            </li>
            </ul>
        </div>
    );
};

export default commentsPage;