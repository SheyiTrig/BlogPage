
import BlogList from "./blogList";
import useFetch from "./useFetch";



const Home = () => {
 const {blogsData:blogs, isPending, error, setBlogsData} = useFetch('http://localhost:8000/blogs');
//  const [blogs, setBlogs] = useState(null);

 const handleDelete = (id) => {
    const newBlogs = blogs.filter((blogs) => blogs.id !== id);
    setBlogsData(newBlogs);
  
  };


  return (
    <div className="home">
      { error && <div>{error}</div>}
      {isPending && <div> Loading... </div>} 
      {blogs && <BlogList blogs = {blogs} title="All Blogs!" handleDelete={handleDelete}/>}
      
    
    </div>
  );
};

export default Home;
