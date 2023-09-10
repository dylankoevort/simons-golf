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

const Squash = () => {
  return (
    <div className="h-full">
      <div className="w-full flex justify-center items-center flex-col max-w-[900px] mx-auto p-8 mt-8">
        <h1 className="text-3xl font-medium">Our Courts</h1>
        <p className="mt-8 text-center">
          Simonstown offers two squash courts within our complex. We welcome
          visitors to our facilities.
        </p>
        <p className="mt-8 text-center">
          We do not have any pre-booking, so we run our courts on a first come,
          first served basis. Please contact us if you have any queries or want
          to check court availability.
        </p>
        <Image
          src="/squash.jpg"
          alt="course"
          width={768}
          height={525}
          className="mt-8 border h-full w-auto rounded"
        />
        <h1 className="text-3xl font-medium mt-16">Squash Rates</h1>
        <div>
          <p className="my-8">
            We charge lights fees per 45 minute session, see rates below. We
            have loan racquets available for any beginner or visitor that does
            not have their equipment with them or looking to get fit.
          </p>
          <Table className="rounded-xl">
            <TableHeader>
              <TableRow className="bg-slate-500 text-white hover:bg-slate-500 text-sm md:text-lg font-light rounded-xl">
                <TableHead>Player Type</TableHead>
                <TableHead className="text-right">Player Fees</TableHead>
                <TableHead className="text-right">Lights Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Two Squash Members</TableCell>
                <TableCell className="text-right">R 40</TableCell>
                <TableCell className="text-right">
                  R 40 per 45 minutes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Member + Guest</TableCell>
                <TableCell className="text-right">R 60</TableCell>
                <TableCell className="text-right">
                  R 60 per 45 minutes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Two Guests</TableCell>
                <TableCell className="text-right">R 80</TableCell>
                <TableCell className="text-right">
                  R 80 per 45 minutes
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="my-8">
            For more details on joining our squash section please see{" "}
            <a
              href="/membership"
              target="_self"
              rel="noreferrer"
              className="font-semibold hover:underline"
            >
              membership page.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Squash;
