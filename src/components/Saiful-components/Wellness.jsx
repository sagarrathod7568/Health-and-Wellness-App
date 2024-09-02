import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./wellness.css";
import physical from "../Saiful-components/assets/physical.mp4";
import mental from "../Saiful-components/assets/mental.mp4";
import emotional from "../Saiful-components/assets/emotional.mp4";
import spiritual from "../Saiful-components/assets/spititual.mp4";
import challenge from "../Saiful-components/assets/30day.mp4";
import social from "../Saiful-components/assets/social.mp4";

import "bootstrap/dist/css/bootstrap.min.css";

function Wellness() {
  const videoRefs = useRef([]);
  const navigate = useNavigate();

  const cardsData = [
    {
      id: 1,
      videoSrc: physical,
      title: "Physical Health",
      navigateTo: "/physicalHealth",
      description:
        "Elevate your physical well-being with a balanced approach to nutrition, regular exercise, and adequate sleep. Explore tips for maintaining a healthy weight, managing chronic conditions, and incorporating fitness into your daily routine.",
    },
    {
      id: 2,
      videoSrc: mental,
      title: "Mental Health",
      navigateTo: "/mentalHealth",
      description:
        "Cultivate a positive mindset and emotional resilience. Discover strategies for stress management, mindfulness practices, and building healthy coping mechanisms. Prioritize self-care to enhance your mental well-being.",
    },
    {
      id: 3,
      videoSrc: emotional,
      title: "Emotional Health",
      navigateTo: "/emotionalHealth",
      description:
        "Nourish your emotional well-being by understanding and expressing your feelings. Learn effective communication skills, coping mechanisms for challenging emotions, and techniques for fostering a healthy emotional balance.",
    },
    {
      id: 4,
      videoSrc: spiritual,
      title: "Social",
      navigateTo: "/socialHealth",
      description:
        "Enhance your social well-being by building strong relationships and engaging in community activities. Learn the importance of social connections for overall wellness.",
    },
    {
      id: 5,
      videoSrc: challenge,
      title: "30 Day Challenge",
      navigateTo: "/30DayChallenge",
      description:
        "Embark on the journey to a stronger, healthier you. Every drop of sweat is a step toward your goals. Embrace the challenge, celebrate the progress, and let each workout be a testament to your commitment. You've got this!",
    },
    {
      id: 6,
      videoSrc: social,
      title: "Spiritual Wellness",
      navigateTo: "/spiritualWellness",
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
      <h1 className="routs ">Exersice Tips</h1>
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
              <button onClick={() => navigate(card.navigateTo)}>
                {card.title}
              </button>

              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Wellness;
