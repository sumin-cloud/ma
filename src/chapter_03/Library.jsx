import Book from "./Book";

export default function Library(props){
    return(
        <div>
            <Book name="a" numOfPage = {300}></Book>
            <Book name="b" numOfPage = {400}></Book>
            <Book name="c" numOfPage = {500}></Book>
        </div>
    )
}