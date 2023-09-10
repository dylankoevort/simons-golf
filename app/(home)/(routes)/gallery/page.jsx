import React from "react";
import Image from "next/image";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/gallery1.jpg",
      alt: "",
    },
    {
      id: 2,
      src: "/gallery2.jpg",
      alt: "",
    },
    {
      id: 3,
      src: "/gallery3.jpg",
      alt: "",
    },
    {
      id: 4,
      src: "/gallery4.jpg",
      alt: "",
    },
    {
      id: 5,
      src: "/bar.jpg",
      alt: "",
    },
    {
      id: 6,
      src: "/bg.jpg",
      alt: "",
    },
    {
      id: 7,
      src: "/home1.jpg",
      alt: "",
    },
    {
      id: 8,
      src: "/home2.jpg",
      alt: "",
    },
    {
      id: 9,
      src: "/home3.jpg",
      alt: "",
    },
    {
      id: 10,
      src: "/home4.jpg",
      alt: "",
    },
    {
      id: 11,
      src: "/restaurant.jpg",
      alt: "",
    },
    {
      id: 12,
      src: "/squash.jpg",
      alt: "",
    },
    {
      id: 13,
      src: "/venue.jpg",
      alt: "",
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto">
      <h1 className="text-3xl font-medium text-center mt-16">Gallery</h1>
      <div className="flex flex-wrap justify-center p-4 mt-16">
        {galleryImages.map((image) => (
          <div key={image.id} className="">
            <Image
              src={image.src}
              alt={image.alt}
              height={400}
              width={400}
              className="my-1 h-full border hover:md:scale-150 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
