import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, Keyframes } from "styled-components";
import "./slideshow.scss";
import BaseSlideExecution from "../base-slide-execution";

/**
 * Slideshow component.
 *
 * @param {object} props
 *   Props.
 * @param {object} props.slide
 *   The slide.
 * @param {object} props.content
 *   The slide content.
 * @param {boolean} props.run
 *   Whether or not the slide should start running.
 * @param {Function} props.slideDone
 *   Function to invoke when the slide is done playing.
 * @returns {object}
 *   The component.
 */
function Slideshow({ slide, content, run, slideDone }) {
  const { images, imageDuration, transitions, animations, logoImage, logoSize, logoPosition } = content;
  const logoClasses = `logo ${logoPosition} ${logoSize}`;
  const [index, setIndex] = useState(0);
  const [Image, setImage] = useState();
  const timeoutRef = useRef(null);
  const classes = `image ${transitions} ${animations}`;
  const logoImageUrl = slide?.mediaData[logoImage]?.assets?.uri ?? null;
  const imageUrls = images.map((image) => {
    return slide?.mediaData[image]?.assets?.uri;
  });
  // @TODO: Duration should not be based on a calculated number, but instead on going a full round of all the images.
  const duration = imageUrls.length * imageDuration;

  /**
   * Setup slide run function.
   */
  const slideExecution = new BaseSlideExecution(slide, slideDone);
  useEffect(() => {
    if (run) {
      slideExecution.start(duration !== 0 ? duration : 5000);
    } else {
      slideExecution.stop();
    }
  }, [run]);

  /**
   * A random function to simplify the code where random is used
   *
   * @param {number} multiplier
   *   The multiplier.
   * @returns {number}
   *   Random number.
   */
  function random(multiplier) {
    return Math.floor(Math.random() * multiplier);
  }

  /**
   * Creates the animation using keyframes from styled components
   *
   * @param {boolean} grow
   *   Grow boolean.
   * @param {string} transform
   *   The transform.
   * @returns {Keyframes}
   *   The animation.
   */
  function createAnimation(grow, transform = "50% 50%") {
    const transformOrigin = transform;
    const startSize = grow ? 1 : 1.2;
    const finishSize = grow ? 1.2 : 1;
    const startFinishOpacity = transitions === "fade" ? 0 : 1;

    return keyframes`
      0% {
        transform: scale(${startSize});
        transform-origin: ${transformOrigin};
        opacity: ${startFinishOpacity};
      }
      5% {
        transform: scale(${startSize});
        transform-origin: ${transformOrigin};
        opacity: 1;
      }
      95% {
        transform: scale(${finishSize});
        transform-origin: ${transformOrigin};
        opacity: 1;
      }
      100% {
        transform: scale(${finishSize});
        transform-origin: ${transformOrigin};
        opacity: ${startFinishOpacity};
      }
    `;
  }

  /**
   * Determines which animation should be used
   *
   * @param {string} animationType
   *   The animation type.
   * @returns {Keyframes}
   *   The current animation.
   */
  function getCurrentAnimation(animationType) {
    const animationTypes = [
      "zoom-in-middle",
      "zoom-out-middle",
      "zoom-out-random",
      "zoom-in-random",
    ];

    const randomPercent = `${random(100) + 1}% ${random(100) + 1}%`;

    switch (animationType) {
      case "zoom-in-middle":
        return createAnimation(true);
      case "zoom-out-middle":
        return createAnimation(false);
      case "zoom-in-random":
        return createAnimation(true, randomPercent);
      case "zoom-out-random":
        return createAnimation(false, randomPercent);
      default:
        return getCurrentAnimation(
          animationTypes[random(animationTypes.length)]
        );
    }
  }

  /**
   * Creates a slide with the animation.
   */
  function createImage() {
    const image = styled.div`
      background-image: url(${images[index].url});
      animation-name: ${getCurrentAnimation(animations)};
      animation-duration: ${images[index].duration / 1000}s;
      animation-iteration-count: infinite;
    `;
    setImage(image);
  }

  /**
   * Reset the timeout.
   */
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // @TODO: Describe effect.
  useEffect(() => {
    // Create slides and reset the timeout.
    createImage();
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, images[index].duration);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="template-slideshow">
      {Image && <Image className={classes} />}
      {logoImageUrl && <img className={logoClasses} alt="slide" src={logoImageUrl} />}
    </div>
  );
}

Slideshow.propTypes = {
  run: PropTypes.bool.isRequired,
  slideDone: PropTypes.func.isRequired,
  slide: PropTypes.shape({}).isRequired,
  content: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.string
    ),
    logoImage: PropTypes.string,
    logoSize: PropTypes.string,
    logoPosition: PropTypes.string,
    animations: PropTypes.string,
    transitions: PropTypes.string,
  }).isRequired,
};

export default Slideshow;
