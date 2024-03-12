import React from 'react';
import "./Chat.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import ChatBox from '../../components/ChatBox/ChatBox';

const Chat = () => {
    return (
        <div className='chat'>
            <Sidebar />
            <ChatBox />
        </div>
    );
}

export default Chat;
