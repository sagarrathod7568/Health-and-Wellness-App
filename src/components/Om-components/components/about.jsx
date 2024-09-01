import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import "../style/about.css";
import { Footer } from "../../Sagar-components/Footer";

export function About() {
  return (
    <>
      <Box className="about-box">
        <Box className="about">
          <h1>About Us</h1>

          <p>
            Welcome to <b>Health is Welth</b>, your personalized health and
            wellness companion. Our platform is dedicated to helping you achieve
            your fitness and health goals, whether you're looking to lose
            weight, gain muscle, maintain your fitness, or simply lead a
            healthier lifestyle.
          </p>
          <p>
            At <b>Health is Welth</b>, we believe that health is personal.
            That's why we've designed our services to cater specifically to your
            unique needs, taking into account your weight, height, and fitness
            objectives. Whether you want to shed those extra pounds, build
            strength, or maintain your current fitness level, we provide
            customized diet plans, exercise routines, and wellness tips tailored
            just for you.
          </p>
          <p>
            Our mission is to empower you with the knowledge and tools you need
            to take control of your health. With expert advice, easy-to-follow
            plans, and continuous support, we make it simpler for you to stay on
            track and achieve your goals.
          </p>
          <p>
            Join us on a journey to better health, and discover how personalized
            wellness can make all the difference.
          </p>
        </Box>
      </Box>
      <br />
      <Footer />
    </>
  );
}
