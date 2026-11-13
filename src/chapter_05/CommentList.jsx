import { useEffect, useState } from "react";
import Comment from "./Comment"
export default function CommentList(){
    const [commentList,setCommentList] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001/comments")
        .then(
            res=>{
                return res.json();
            }
        )
        .then(
            data=>{
                setCommentList(data);
            }
        )
        
    },[]) 
    
    return(
        <div>
           { 
            commentList.map((comment)=>{
                    return(
                        <Comment name={comment.name} comment={comment.comment}/>
                    )
                })
            }
        
        </div>
    )
};