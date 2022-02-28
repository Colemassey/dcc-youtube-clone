import CommentForm from "../CommentForm/CommentForm";


const CommentList = (props) => {

    return (
        <table>
            {props.videoComments.map((comment) => {
            return (
                <tbody>
                    <tr>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>{comment.text}</td>
                    </tr>
                </tbody>
            )
        })}
        </table>
    );
}
 
export default CommentList;