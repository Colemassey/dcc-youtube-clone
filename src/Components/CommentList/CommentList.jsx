import CommentForm from "../CommentForm/CommentForm";


const CommentList = (props) => {
    return (
        <table>
            <CommentForm  />
            {props.videoComments.map((comment) => {
            return (
                <tbody>
                    <tr>{user.username}</tr>
                    <tr>{comment.text}</tr>
                </tbody>
            )
        })}
        </table>
    );
}
 
export default CommentList;