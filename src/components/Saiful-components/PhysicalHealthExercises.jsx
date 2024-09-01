import React, { useEffect, useRef } from "react";
import "./wellness.css";
import PushUps from "../assets/pushups.mp4";
import squats from "../assets/squats.mp4";
import lunges from "../assets/lunges.mp4";
import plank from "../assets/plank.mp4";

import burpees from "../assets/burpees.mp4";
import mountain from "../assets/mountain.mp4";
import BicepCurls from "../assets/bicepcurls.mp4";
import TricepDips from "../assets/tricepdips.mp4";
import GluteBridges from "../assets/glutebridges.mp4";
import RussianTwists from "../assets/russsian.mp4";
import Deadlifts from "../assets/deadLift.mp4";
import ChestPress from "../assets/ChestPress.mp4";
import PullUps from "../assets/PullUps.mp4";

function PhysicalHealthExercises() {
  const videoRefs = useRef([]);

  const exerciseData = [
    {
      id: 1,
      videoSrc: PushUps,
      title: "Push-Ups",
      description:
        "Strengthen your upper body and core with push-ups. Great for building chest, shoulders, and triceps.",
    },
    {
      id: 2,
      videoSrc: squats,
      title: "Squats",
      description:
        "Boost your lower body strength with squats, focusing on quads, hamstrings, and glutes.",
    },
    {
      id: 3,
      videoSrc: lunges,
      title: "Lunges",
      description:
        "Enhance your leg muscles and balance with lunges. Ideal for strengthening quads and glutes.",
    },
    {
      id: 4,
      videoSrc: plank,
      title: "Plank",
      description:
        "Build core strength with planks. Focuses on abs, back, and shoulders.",
    },
    {
      id: 5,
      videoSrc: burpees,
      title: "Burpees",
      description:
        "A full-body workout to improve cardiovascular endurance and strength.",
    },
    {
      id: 6,
      videoSrc: mountain,
      title: "Mountain Climbers",
      description:
        "Increase heart rate and build strength with mountain climbers, targeting core and legs.",
    },
    {
      id: 7,
      videoSrc: BicepCurls,
      title: "Bicep Curls",
      description: "Focus on building arm strength with bicep curls.",
    },
    {
      id: 8,
      videoSrc: TricepDips,
      title: "Tricep Dips",
      description:
        "Strengthen your triceps with dips, using body weight as resistance.",
    },
    {
      id: 9,
      videoSrc: GluteBridges,
      title: "Glute Bridges",
      description: "Target your glutes and lower back with glute bridges.",
    },
    {
      id: 10,
      videoSrc: RussianTwists,
      title: "Russian Twists",
      description:
        "Enhance your core strength with Russian twists, focusing on obliques.",
    },
    {
      id: 11,
      videoSrc: Deadlifts,
      title: "Deadlifts",
      description: "Work on your lower back and hamstrings with deadlifts.",
    },
    {
      id: 12,
      videoSrc: ChestPress,
      title: "Chest Press",
      description:
        "Build chest strength with chest presses, targeting pectoral muscles.",
    },
    {
      id: 13,
      videoSrc: PullUps,
      title: "Pull-Ups",
      description:
        "Improve upper body strength with pull-ups, focusing on lats and biceps.",
    },
    {
      id: 14,
      videoSrc: BicepCurls,
      title: "Leg Raises",
      description:
        "Target lower abs with leg raises, an excellent core exercise.",
    },
    {
      id: 15,
      videoSrc: mountain,
      title: "Jumping Jacks",
      description:
        "A simple cardio exercise that helps improve overall fitness.",
    },
    {
      id: 16,
      videoSrc: "path_to_exercise16_video.mp4",
      title: "High Knees",
      description:
        "Increase your heart rate and engage your core with high knees.",
    },
    {
      id: 17,
      videoSrc: burpees,
      title: "Step-Ups",
      description:
        "Strengthen your legs and improve coordination with step-ups.",
    },
    {
      id: 18,
      videoSrc: GluteBridges,
      title: "Bicycle Crunches",
      description: "Work on your abs and obliques with bicycle crunches.",
    },
    {
      id: 19,
      videoSrc: "path_to_exercise19_video.mp4",
      title: "Box Jumps",
      description: "Enhance leg strength and explosiveness with box jumps.",
    },
    {
      id: 20,
      videoSrc: GluteBridges,
      title: "Side Plank",
      description:
        "Strengthen your core and improve stability with side planks.",
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
    <section style={{ display: "flex ", flexDirection: "column" }}>
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>
        Choose Your Excercise
      </h1>
      <div className="container">
        {exerciseData.map((card, index) => (
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

export default PhysicalHealthExercises;
