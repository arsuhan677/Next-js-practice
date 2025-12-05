export default async function getAllPosts(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return result.json()
}