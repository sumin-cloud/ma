import React from "react";
import Notification from "./Notification";
const reserveNotifications = [
    {
        id:1,
        message: "A message"
    },
    {
        id:2,
        message: "B message"
    },
    {
        id:3,
        message: "C message"
    }
]
var timer;
class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notifications : [],
        }
    }
    
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reserveNotifications.length){
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({
                    notifications : notifications
                })
            }else{
                clearInterval(timer);
            }
        },1000)
    }
    render(){
        return(
            <div>
                {
                    this.state.notifications.map((notification)=>{
                        return <Notification key={notification.id} id={notification.id} message = {notification.message}></Notification>
                    })
                }
            </div>
        )
    }
}

export default NotificationList;