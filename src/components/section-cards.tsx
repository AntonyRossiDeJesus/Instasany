"use client";

import Image from "next/image";

import Card01 from "@/assets/image-01.png";
import Card02 from "@/assets/image-02.png";
import Card03 from "@/assets/image-03.png";
import Card04 from "@/assets/image-04.png";
import Card05 from "@/assets/image-05.png";
import Card06 from "@/assets/image-06.png";
import Mockup from "@/assets/mockup-main.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SectionCards() {
  const mockupRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const section = sectionRef.current;

  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);

  function animateCards(images: null[], position: number) {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "center center",
        },
      }
    );
  }

  useEffect(() => {
    const mockupPhone = mockupRef.current;
    const title = titleRef.current;

    gsap.fromTo(
      mockupPhone,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power5.out",
      }
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "65% center",
        },
      }
    );

    const img01 = card01Ref.current;
    const img02 = card02Ref.current;
    const img03 = card03Ref.current;
    const img04 = card04Ref.current;
    const img05 = card05Ref.current;
    const img06 = card06Ref.current;

    const leftImagens = [img01, img02, img03];
    const rightImagens = [img04, img05, img06];

    animateCards(leftImagens, 50);
    animateCards(rightImagens, -50);
  }, []);
  return (
    <section className="w-full pb-20" ref={sectionRef}>
      <Image
        src={Mockup}
        alt="Mockup main"
        className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-16 opacity-0"
        ref={mockupRef}
      />

      <h2
        className="text-center text-5xl lg:text-7xl font-semibold text-black mb-56 opacity-0"
        ref={titleRef}
      >
        Faça
        <span className="text-green-title-card"> você </span>
        mesmo de casa
      </h2>

      <div className="relative w-full max-w-area-cards mx-auto h-area-cards overflow-hidden">
        <Image
          src={Card01}
          className="absolute top-8 -left-32 md:left-44 opacity-0"
          alt="Card 1"
          ref={card01Ref}
        />
        <Image
          src={Card02}
          className="absolute -left-20 md:left-0 bottom-40 md:bottom-32 opacity-0 z-10 "
          alt="Card 2"
          ref={card02Ref}
        />
        <Image
          src={Card03}
          className="absolute bottom-10 md:bottom-0 left-52 md:left-80 opacity-0 hidden md:block"
          alt="Card 3"
          ref={card03Ref}
        />
        <Image
          src={Card04}
          className="absolute top-0 -right-24 md:right-32 opacity-0 z-10 "
          alt="Card 4"
          ref={card04Ref}
        />
        <Image
          src={Card05}
          className="absolute -right-10 md:right-0 bottom-40 md:bottom-28 opacity-0"
          alt="Card 5"
          ref={card05Ref}
        />
        <Image
          src={Card06}
          className="absolute bottom-0 right-80 opacity-0"
          alt="Card 6"
          ref={card06Ref}
        />
      </div>
    </section>
  );
}
