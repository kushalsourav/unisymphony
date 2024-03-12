import React from 'react';
import "./ChatBox.css";
import { sendMessage } from '../../apis/apis';

const ChatBox = () => {
    const token = localStorage.getItem("token")
    return (
        <div class="chat-container">
        <header class="chat-header">
            <h3>Chat Application</h3>
            <div class="user-info">
                <img alt="user avatar" />
                <span>Gravid Cristofor</span>
                <span class="status">Senior Developer</span>
            </div>
        </header>
        <main class="chat-messages">
            <div class="message-thread">
                <div class="message sent">
                    <img  alt="user avatar" />
                    <span class="username">Una Roy</span>
                    <span class="text">I am referring to the project structure and found some mistakes</span>
                    <span class="timestamp">10:00 AM</span>
                </div>
                <div class="message received">
                    <img  alt="user avatar" />
                    <span class="username">Poul Krish</span>
                    <span class="text">Yes, there are many bugs in that project. Thors Owie can fix them</span>
                    <span class="timestamp">10:01 AM</span>
                </div>
            </div>
            <div class="message-thread">
                <div class="message sent">
                    <img  alt="user avatar" />
                    <span class="username">Gravid Cristofor</span>
                    <span class="text">That's great! Then swing by Chet's desk to discuss</span>
                    <span class="timestamp">10:02 AM</span>
                </div>
            </div>
        </main>
        <footer class="chat-input">
            <input type="text" placeholder="Type your message here" />
            <button type="submit"  onClick={() => {

                sendMessage({sender: "65ea9e14264798a66be422de", receiver:"65ec64cd9ba9b5a31660edbb", message:"hello zoroooooo"}, token)
            }}>Send</button>
        </footer>
    </div>
    );
}

export default ChatBox;
