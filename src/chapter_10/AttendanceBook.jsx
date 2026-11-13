const students = [
    {
        id:1,
        name:"A student"
    },
    {
        id:2,
        name:"B student"
    },
    {
        id:3,
        name:"C student"
    },
    {
        id:4,
        name:"D student"
    },
    {
        id:5,
        name:"E student"
    }

]
function AttendanceBook(){
    return(
        <ul>
            {
                students.map((student)=>{
                    
                    return <li key={student.id}>{student.name}</li>
                })
            }
        </ul>
    );
}
export default AttendanceBook;