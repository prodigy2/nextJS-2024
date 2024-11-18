import {IPost} from "@/models/IPost";


const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    postBaseUrl: '/posts',
    allPosts: () => base + urlBuilder.postBaseUrl,
    singlePosts: (id: string | number) => base + urlBuilder.postBaseUrl + '/' + id,
}
const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        const posts = await fetch( urlBuilder.allPosts())
            .then(value => value.json());
        console.log(posts);
        return posts;
    },
    getPostById: async (id: string | number): Promise<IPost | null> => {
        const post = await fetch( urlBuilder.singlePosts(id))
            .then(value => value.json());
        console.log(post);
        return post;
    }
}

export { postService };