import React from "react";
import Image from "next/image";
import { homeImages } from "@/constants";

const HomePage = () => {
  return (
    <>
      <div className="bg-[url(/bg.jpg)] bg-blend-overlay bg-cover bg-no-repeat bg-center duration-100 bg-parallax">
        <div className="h-screen mt-[-80px] flex justify-center items-center flex-col p-8">
          <div className="border rounded-xl p-8 bg-slate-900 backdrop-filter backdrop-blur-sm bg-opacity-30">
            <h1 className="text-4xl text-white font-medium text-center mb-4">
              Welcome to
            </h1>
            <h2 className="text-5xl text-white font-bold text-center font-serif">
              Simon&apos;s Town Country Club
            </h2>
            <p className="text-xl text-white font-light text-center mt-4">
              A picturesque course on the Southern Peninsula.
            </p>
          </div>
          <a href="/membership" target="_self" rel="noreferrer">
            <button className="bg-white text-black font-medium py-2 px-4 rounded mt-4 hover:bg-slate-200 transition-colors">
              Join now!
            </button>
          </a>
        </div>
      </div>
      <div className="text-center p-8 mt-8">
        <h1 className="text-3xl font-medium">
          The Simon&apos;s Town Country Club Experience
        </h1>
        <div className="max-w-[900px] mt-8 mx-auto font-light">
          <p className="py-4">
            Welcome to our distinguished Country Club, a sanctuary where
            elegance meets leisure, and where exclusivity intertwines
            effortlessly with recreation. Surrounded by lush landscapes, our
            Club offers a haven for relaxation, camaraderie, and refined living.
          </p>
          <p className="py-4">
            Our Country Club represents a lifestyle that transcends the
            ordinary. It&apos;s a place where gracious living, impeccable
            service, and a steadfast commitment to excellence take center stage.
            Whether you&apos;re a passionate golfer, a lover of fine dining, a
            fitness enthusiast, or simply seeking a peaceful retreat from daily
            life, our Club promises to surpass your expectations.
          </p>
          <p className="py-4">
            Golf enthusiasts will delight in our championship courses, where
            meticulously groomed fairways, challenging greens, and awe-inspiring
            views create a world-class golfing experience suitable for all skill
            levels.
          </p>
          <p className="py-4">
            Beyond golf, our Club boasts a range of amenities and activities to
            cater to various interests. Our cutting-edge fitness center, staffed
            by expert trainers and equipped with the latest technology, ensures
            you can maintain your health and wellness routine with ease. For
            relaxation, our spa and wellness facilities offer an array of
            treatments and therapies to rejuvenate your mind and body.
          </p>
          <p className="py-4">
            Dining at our Club is a culinary journey that elevates your taste
            buds. From casual dining to gourmet experiences, our diverse dining
            venues cater to every palate. Immerse yourself in the art of
            gastronomy with dishes prepared by our talented chefs, complemented
            by an extensive selection of wines and cocktails.
          </p>
          <p className="py-4">
            But our Country Club is more than just facilities; it&apos;s a
            vibrant community. Social events, gatherings, and exclusive member
            privileges create an atmosphere where lasting friendships are
            cultivated, and cherished memories are forged. It&apos;s a place to
            connect with kindred spirits, share experiences, and bask in the
            camaraderie that defines our Club.
          </p>
          <p className="py-4">
            Our commitment to environmental stewardship and sustainability
            ensures the preservation of the natural beauty that surrounds us,
            ensuring future generations can enjoy this haven as much as you do
            today.
          </p>
          <p className="py-4">
            As you explore our Country Club, you&apos;ll discover that it&apos;s
            not just a club; it&apos;s an extraordinary destination. Whether
            you&apos;re seeking relaxation, an active lifestyle, or a community
            of like-minded individuals, our Club offers an unmatched experience
            that will exceed your every expectation.
          </p>
          <p className="py-4">
            We extend an invitation to become part of our exclusive community
            and embark on a journey of luxury, leisure, and enduring memories.
            Welcome to our Country Club, where every moment is an opportunity to
            indulge, unwind, and savor life&apos;s finer pleasures.
          </p>
        </div>
      </div>
      <div className="relative max-w-[90%] mx-auto p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {homeImages.map((image) => (
          <Image
            key={image.id}
            width={512}
            height={342}
            className="border-4 mx-auto h-[100%] w-[100%] md:hover:scale-125 lg:hover:scale-150 rounded"
            alt={image.alt}
            {...image}
          />
        ))}
      </div>
      <div className="text-center mt-16">
        <h1 className="text-3xl font-medium">Opening Hours</h1>
        <div className="text-left text-light mt-4 max-w-[300px] mx-auto">
          <div className="flex justify-between items-start">
            <p>Monday</p>
            <p>08:00 – 19:00</p>
          </div>
          <div className="flex justify-between items-start">
            <p>Tuesday</p>
            <p>08:00 – 19:00</p>
          </div>
          <div className="flex justify-between items-start">
            <p>Wednesday</p>
            <p>08:00 – 20:00</p>
          </div>
          <div className="flex justify-between items-start">
            <p>Thursday</p>
            <p>08:00 – 19:00</p>
          </div>
          <div className="flex justify-between items-start">
            <p>Friday</p>
            <p>08:00 – 22:00</p>
          </div>
          <div className="flex justify-between items-start">
            <p>Saturday</p>
            <p>08:00 – 19:00</p>
          </div>
          <div className="flex justify-between items-start">
            <p>Sunday</p>
            <p>08:00 – 19:00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
