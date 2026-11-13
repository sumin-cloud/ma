export default function Book(props){
    return(
        <div>
            <h1>{`이 책의 이름은 ${props.name} 입니다`}</h1>
            <h2>{`총 페이지 :  ${props.numOfPage}`} </h2>
        </div>
    )
}