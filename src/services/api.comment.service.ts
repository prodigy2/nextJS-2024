import {IComment} from "@/models/IComment";

const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    commentBaseUrl: '/comments',
    allComments: () => base + urlBuilder.commentBaseUrl,
    singleComments: (id: string | number) => base + urlBuilder.commentBaseUrl + '/' + id,
}
const commentService = {
    getAllComments: async (): Promise<IComment[]> => {
        const comments = await fetch( urlBuilder.allComments())
            .then(value => value.json());
        console.log(comments);
        return comments;
    },
    getCommentById: async (id: string | number): Promise<IComment | null> => {
        const comment = await fetch( urlBuilder.singleComments(id))
            .then(value => value.json());
        console.log(comment);
        return comment;
    }
}

export { commentService };