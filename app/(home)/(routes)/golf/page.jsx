import React from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Golf = () => {
  return (
    <div className="h-full">
      <div className="w-full flex justify-center items-center flex-col max-w-[900px] mx-auto p-8 mt-8">
        <h1 className="text-3xl font-medium">Our Golf Course</h1>
        <p className="mt-8 text-center">
          Our course is one of the oldest in the country and celebrated its
          centenary in 2016. It is also the only 9 hole course on the Cape
          Peninsula. We invite golfers of every level for an affordable, fun,
          friendly game on our well-maintained course. An outing here will
          reward the player with a golfing experience similar to that of a
          traditional Scottish links course. Clubs, trolleys and golf carts are
          available for hire.
        </p>
        <Image
          src="/course.jpg"
          alt="course"
          width={768}
          height={525}
          className="mt-8 border h-full w-auto rounded"
        />
        <h1 className="text-3xl font-medium mt-16">Golf Rates</h1>
        <div>
          <p className="my-8">
            Below are our fees for playing rounds of golf depending on your
            membership category and affiliation.
          </p>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-500 text-white hover:bg-slate-500 text-sm md:text-lg font-light rounded-xl">
                <TableHead>Golf Members</TableHead>
                <TableHead className="text-right">9 Holes</TableHead>
                <TableHead className="text-right">18 Holes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Normal Members</TableCell>
                <TableCell className="text-right">R 125</TableCell>
                <TableCell className="text-right">R 145</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Senior Members (60+)</TableCell>
                <TableCell className="text-right">R 100</TableCell>
                <TableCell className="text-right">R 125</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Junior Members</TableCell>
                <TableCell className="text-right">R 75</TableCell>
                <TableCell className="text-right">R 95</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Members Guest</TableCell>
                <TableCell className="text-right">R 140</TableCell>
                <TableCell className="text-right">R 210</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="my-8">
            We welcome visitors and offer competitive rates depending on your
            age and whether you are an affiliated golf member or not.
          </p>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-500 text-white hover:bg-slate-500 text-sm md:text-lg font-light rounded-xl">
                <TableHead>Visitor Fees</TableHead>
                <TableHead className="text-right">9 Holes</TableHead>
                <TableHead className="text-right">18 Holes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Visitors Affiliated</TableCell>
                <TableCell className="text-right">R 185</TableCell>
                <TableCell className="text-right">R 250</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Visitor Affiliated Senior (60+)</TableCell>
                <TableCell className="text-right">R 140</TableCell>
                <TableCell className="text-right">R 155</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Visitor non-affiliated</TableCell>
                <TableCell className="text-right">R 210</TableCell>
                <TableCell className="text-right">R 265</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Visitor non-affiliated Senior (60+)</TableCell>
                <TableCell className="text-right">R 185</TableCell>
                <TableCell className="text-right">R 250</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="my-8">
            We also offer golf carts and equipment hire at the following rates:
          </p>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-500 text-white hover:bg-slate-500 text-sm md:text-lg font-light rounded-xl">
                <TableHead>Rental Fees</TableHead>
                <TableHead className="text-right">9 Holes</TableHead>
                <TableHead className="text-right">18 Holes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Golf Carts (Members)</TableCell>
                <TableCell className="text-right">R 190</TableCell>
                <TableCell className="text-right">R 240</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Golf Carts (Visitors)</TableCell>
                <TableCell className="text-right">R 240</TableCell>
                <TableCell className="text-right">R 315</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Trolley Hire</TableCell>
                <TableCell className="text-right">R 45</TableCell>
                <TableCell className="text-right">R 55</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Golf Clubs Hire</TableCell>
                <TableCell className="text-right">R 210</TableCell>
                <TableCell className="text-right">R 315</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <h1 className="text-2xl font-medium mt-16">Make a Booking Now!</h1>
      </div>
    </div>
  );
};

export default Golf;
