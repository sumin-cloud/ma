import { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;
function Accomodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count,increaseCount,decreaseCount] = useCounter(0);

    useEffect(()=>{
        console.log("useEffect is Called");
        console.log(`isFull : ${isFull}`)
    })
    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
    },[count])
    
    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled = {isFull}>입장하기</button>
            <button onClick={decreaseCount}>퇴장하기</button>
            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}
export default Accomodate;