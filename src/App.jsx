import React from "react";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import User from "./component/User";
import Chats from "./component/Chats";
import './index.css';

const App = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <Sidebar />
                <User name="Alice 👩‍💼"/>  
                <User name="Bob 👨‍💻"/>  
                <User name="Charlie 🎸"/>  
                <User name="David 🏀"/>  
                <User name="Eve 📚"/>  
                <User name="Frank 🎮"/>  
                <User name="Grace 🎨"/>  
                <User name="Henry 🚗"/>  
                <User name="Emma 🎭"/>  
                <User name="Isabella 🌸"/>  
            </div>
            <div className="content">
                <Content />
                <Chats>
                    <div className="user-message">Hello 👋</div>
                    <div className="response-message">How are you? 😊</div>
                    <div className="user-message">I am fine, thanks! 👍</div>
                    <div className="response-message">What about you? 🤔</div>
                    <div className="user-message">I am also fine 😃</div>
                    <div className="response-message">Good! 🎉</div>
                    <div className="user-message">Thank you 🙏</div>
                    <div className="response-message">You are welcome! 🤗</div>
                    <div className="user-message">Goodbye! 👋</div>
                    <div className="response-message">See you later! 👀</div>

                    <div className="user-message">Hey, long time no see! 🕰️</div>
                    <div className="response-message">Yeah! How have you been? 🤩</div>
                    <div className="user-message">I’ve been busy with work. 😓</div>
                    <div className="response-message">Same here! Let’s catch up soon! ☕</div>
                    
                    <div className="user-message">Do you remember our last trip? 🌍</div>
                    <div className="response-message">Of course! It was amazing! ✈️</div>
                    <div className="user-message">We should plan another one. 🎒</div>
                    <div className="response-message">Absolutely! Where do you want to go? 🏝️</div>
                    
                    <div className="user-message">Maybe somewhere warm and sunny! ☀️</div>
                    <div className="response-message">Sounds perfect! Let’s make a plan. 📅</div>

                    <div className="user-message">Okay, I’ll check the best places! 🗺️</div>
                    <div className="response-message">Awesome! Let me know. 📨</div>

                    <div className="user-message">By the way, did you finish that book I recommended? 📖</div>
                    <div className="response-message">Yes! It was incredible! 🤯</div>
                    <div className="user-message">I told you! The plot twist was crazy, right? 😱</div>
                    <div className="response-message">Totally! I didn’t see it coming! 🔥</div>

                    <div className="user-message">Let’s find another good book to read. 📚</div>
                    <div className="response-message">Yes! I’ll send you some recommendations. 💌</div>
                    
                    <div className="user-message">Great! Talk soon. 🖐️</div>
                    <div className="response-message">Bye! Take care. 💖</div>
                </Chats>

            </div>
        </div>
    );
};

export default App;