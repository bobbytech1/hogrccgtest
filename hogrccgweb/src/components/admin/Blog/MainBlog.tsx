import Blog from "./Blog"
import BlogCon from "./BlogCon"
const MainSermon = () => {
    return(
        <>
        <div className="space-y-6">
        <BlogCon/>
            <Blog/>
        </div>
        </>
    )
}
export default MainSermon;