import React, {  useState, useEffect } from "react";
import "../css/hero.css"

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  
    useEffect(() => {
      //set target date to 1st april rn
      const targetDate = new Date('2025-04-01').getTime();
  
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        setTimeLeft({ days, hours, minutes, seconds });
  
        if (difference < 0) {
          clearInterval(timer);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="hero-container">
        <h1 className="hero-title">Event Starting In</h1>
        <p className="hero-subtitle">Don't miss out on the excitement!</p>
  
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
        <div className="event-section">
        <div className="event-details">
          <div className="detail-item">
            <i className="location-icon">📍</i>
            <span>G-Series Techno Main Salt Lake</span>
          </div>
          <div className="detail-item">
            <i className="calendar-icon">📅</i>
            <span>Walk-in Registration: 24th March, 2025</span>
          </div>
          <div className="detail-item">
            <i className="calendar-icon">📅</i>
            <span>Finals: 2nd - 4th April</span>
          </div>
          <button className="register-button">Register</button>
        </div>
  
        <div className="whatsapp-section">
          <p>Join our Whatsapp Community for further updates.</p>
          <div className="qr-code"></div>
          <p>Or click <a href="#" className="here-link">here</a>.</p>
        </div>
      </div>
      </div>
    );
  };

export default Hero;