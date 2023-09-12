"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Membership = () => {
  const mockDownload = () => {
    alert("This is a project website and as such, there is no real download.");
  };

  return (
    <div className="w-full flex justify-center items-center flex-col max-w-[900px] mx-auto p-8 mt-8">
      <h1 className="text-3xl font-medium text-center">
        Membership Applications
      </h1>
      <div className="text-center">
        <p className="mt-8">
          We look forward to welcoming you to our club, please{" "}
          <span
            onClick={mockDownload}
            className="font-semibold hover:underline hover:cursor-pointer"
          >
            download
          </span>{" "}
          and complete the application form and provide details on which
          sections you would like to join. Our financial year runs from August
          to September.
        </p>
        <p className="mt-4">
          We recommend reading our{" "}
          <a
            href="/faq"
            target="_self"
            rel="noreferrer"
            className="font-semibold hover:underline"
          >
            FAQ
          </a>{" "}
          section which covers a number of common questions prospective members
          have.
        </p>
      </div>

      <div className="w-full">
        <h1 className="text-xl font-bold text-center mt-8">
          2023/2024 Membership Subscriptions
        </h1>
        <p className="my-8">
          Our golf fees are below, should you not wish to be affiliated then
          please remove the WPGU and HNA fees from totals below.
        </p>
        <Table className="text-right">
          <TableHeader>
            <TableRow className="bg-slate-500 text-white hover:bg-slate-500 text-sm md:text-lg font-light rounded-xl">
              <TableHead className="text-left">Golf Fees</TableHead>
              <TableHead>Male</TableHead>
              <TableHead>Male (60+)</TableHead>
              <TableHead>Female</TableHead>
              <TableHead>Female (60+)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left">Golf Subs</TableCell>
              <TableCell>R 2510</TableCell>
              <TableCell>R 2260</TableCell>
              <TableCell>R 1755</TableCell>
              <TableCell>R 1570</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">WPGU</TableCell>
              <TableCell>R 650</TableCell>
              <TableCell>R 650</TableCell>
              <TableCell>R 650</TableCell>
              <TableCell>R 650</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">HNA</TableCell>
              <TableCell>R 255</TableCell>
              <TableCell>R 255</TableCell>
              <TableCell>R 255</TableCell>
              <TableCell>R 255</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">STCC</TableCell>
              <TableCell>R 670</TableCell>
              <TableCell>R 670</TableCell>
              <TableCell>R 670</TableCell>
              <TableCell>R 670</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">Hole-in-one</TableCell>
              <TableCell>R 10</TableCell>
              <TableCell>R 10</TableCell>
              <TableCell>R 10</TableCell>
              <TableCell>R 10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">Total</TableCell>
              <TableCell>R 4095</TableCell>
              <TableCell>R 3845</TableCell>
              <TableCell>R 3340</TableCell>
              <TableCell>R 3155</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="my-8">
          We offer students, swallows and juniors discounted golf subscriptions:
        </p>
        <Table className="text-right">
          <TableHeader>
            <TableRow className="bg-slate-500 text-white hover:bg-slate-500 text-sm md:text-lg font-light rounded-xl">
              <TableHead className="text-left">Golf Fees</TableHead>
              <TableHead>Swallows</TableHead>
              <TableHead>Juniors</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left">Golf Subs</TableCell>
              <TableCell>R 1255</TableCell>
              <TableCell>R 375</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">WPGU</TableCell>
              <TableCell>R 650</TableCell>
              <TableCell>R 650</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">HNA</TableCell>
              <TableCell>R 255</TableCell>
              <TableCell>R 255</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">STCC</TableCell>
              <TableCell>R 670</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">Hole-in-one</TableCell>
              <TableCell>R 10</TableCell>
              <TableCell>R 10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">Total</TableCell>
              <TableCell>R 2840</TableCell>
              <TableCell>R 1290</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="my-8">
          In addition to golf, we offer social and squash memberships:
        </p>
        <Table className="text-right">
          <TableHeader>
            <TableRow className="bg-slate-500 text-white hover:bg-slate-500 text-sm md:text-lg font-light rounded-xl">
              <TableHead></TableHead>
              <TableHead>Squash</TableHead>
              <TableHead>Social</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left">Subs</TableCell>
              <TableCell>R 670</TableCell>
              <TableCell>R 0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">STCC</TableCell>
              <TableCell>R 670</TableCell>
              <TableCell>R 670</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">Total</TableCell>
              <TableCell>R 1340</TableCell>
              <TableCell>R 670</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="mt-4">
          Please note that additional lights fees are charged for squash
          session, more details{" "}
          <a
            href="/squash "
            target="_self"
            rel="noreferrer"
            className="font-semibold hover:underline"
          >
            here
          </a>
          .
        </p>
      </div>
      <h1 className="text-2xl font-medium mt-16">Make a Booking Now!</h1>
    </div>
  );
};

export default Membership;
