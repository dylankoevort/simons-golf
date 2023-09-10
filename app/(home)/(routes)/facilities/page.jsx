import React from "react";
import Image from "next/image";

const Facilities = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col mx-auto p-8 mt-8">
      <h1 className="text-3xl font-medium">Our Facilities</h1>
      <div className="mt-8 max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <Image
            src="/venue.jpg"
            alt=""
            width={768}
            height={525}
            className="border rounded"
          />
          <h2 className="text-2xl font-bold my-4">Function Venue</h2>
          <p>
            We offer our venue for hire for your special function of corporate
            event. Our on-site catering team can provide delicious meals and
            refreshments are available from the bar.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/restaurant.jpg"
            alt=""
            width={600}
            height={400}
            className="border rounded"
          />
          <h2 className="text-2xl font-bold my-4">Our Restaurant</h2>
          <p className="pb-4">
            Jacky&apos;s catering at Simon&apos;s town country club with
            stunning views, join us for a sit down or take away meal – or our
            Sunday lunch (3 course meal).
          </p>
          <p>
            We can assist and coordinate all celebrations and gatherings
            birthdays, functions, and weddings. Visitors and guests are welcome.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/bar.jpg"
            alt=""
            width={768}
            height={525}
            className="border rounded"
          />
          <h2 className="text-2xl font-bold my-4">Bar & Lounge</h2>
          <p className="pb-4">
            Phil, Gerard or John are your hosts and we offer a wide selection of
            refreshments for your enjoyment. Check out or news section for
            latest specials and wine tastings.
          </p>
          <p>
            In addition to bar and lounge we also offer a pool table and outside
            seating areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
