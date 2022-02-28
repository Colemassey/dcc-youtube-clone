import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const Comment = (props) => {

    async function getAllComments() {
        let response = await axios.get('http://127.0.0.1:8000/all/<str:video_id>');
        setVideoComments(response.data);
    
      }

      const [editingId, setEditingId] = React.useState(undefined)

    return ( 
        <div>
            <CommentForm  />
            <CommentList  />
        </div>
     );
}
 
export default Comment;