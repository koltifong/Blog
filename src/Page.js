
import ListBlog from "./ListBlog";
import useFetch from "./useFetch";

const Page = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blog');

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Laoding...</div>}
            {blogs && <ListBlog blogs={blogs} title="All Blogs!" />}
        </div>
    );
}
 
export default Page;