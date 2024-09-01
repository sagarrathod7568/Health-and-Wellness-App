import React, { useEffect, useRef } from "react";
import "./wellness.css";
import physical from "../assets/physical.mp4";
import mental from "../assets/mental.mp4";
import emotional from "../assets/emotional.mp4";
import spiritual from "../assets/spititual.mp4";
import challenge from "../assets/30day.mp4";
import social from "../assets/social.mp4";

function Wellness() {
  const videoRefs = useRef([]);

  const cardsData = [
    {
      id: 1,
      videoSrc: physical,
      title: "Physical Health",
      description:
        "Elevate your physical well-being with a balanced approach to nutrition, regular exercise, and adequate sleep. Explore tips for maintaining a healthy weight, managing chronic conditions, and incorporating fitness into your daily routine.",
    },
    {
      id: 2,
      videoSrc: mental,
      title: "Mental Health",
      description:
        "Cultivate a positive mindset and emotional resilience. Discover strategies for stress management, mindfulness practices, and building healthy coping mechanisms. Prioritize self-care to enhance your mental well-being.",
    },
    {
      id: 3,
      videoSrc: emotional,
      title: "Emotional Health",
      description:
        "Nourish your emotional well-being by understanding and expressing your feelings. Learn effective communication skills, coping mechanisms for challenging emotions, and techniques for fostering a healthy emotional balance.",
    },
    {
      id: 4,
      videoSrc: spiritual,
      title: "Social",
      description:
        "Embark on a journey of self-discovery and purpose. Explore spiritual practices, mindfulness, and reflection exercises to enhance your spiritual well-being. Connect with your inner self and find meaning in your life's journey.",
    },
    {
      id: 5,
      videoSrc: challenge,
      title: "30 Day Challenge",
      description:
        "Embark on the journey to a stronger, healthier you. Every drop of sweat is a step toward your goals. Embrace the challenge, celebrate the progress, and let each workout be a testament to your commitment. You've got this!",
    },
    {
      id: 6,
      videoSrc: social,
      title: "Spiritual Wellness",
      description:
        "Embark on a journey of self-discovery and purpose. Explore spiritual practices, mindfulness, and reflection exercises to enhance your spiritual well-being. Connect with your inner self and find meaning in your life's journey.",
    },
  ];

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play();
      }
    });
  }, []);

  return (
    <section>
      <div className="container">
        {cardsData.map((card, index) => (
          <div className="card" key={card.id}>
            <div className="videobx">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={card.videoSrc}
                autoPlay
                loop
                muted
                className="video"
              />
            </div>
            <div className="content">
              <a href="#">
                <button>{card.title}</button>
              </a>
              <p>{card.description}</p>
              <a href="#">
                <button>Learn More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wellness;
