import { useLoaderData } from "react-router-dom";
import SingleComment from "./SingleComment";


const Comment = () => {
    const comment=useLoaderData()
    console.log(comment);
    return (
        <div className="bg-white">
           <div className="grid grid-cols-1 gap-5 mx-auto  md:grid-cols-3 lg:grid-cols-4" style={{ backgroundImage: 'url("https://i.ibb.co/vhtY2fV/images-2.jpg")' }}>
            {
    comment?.map(comment=> <SingleComment key={comment.id} comment={comment}></SingleComment>)
}
</div>
        </div>
    );
};

export default Comment;