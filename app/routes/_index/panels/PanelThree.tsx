import cat from "~/images/_TLJ3167.jpg";
import React from "react";
import Panel from "~/components/Panel";
import { Link } from "@remix-run/react";
import Button from "~/components/Button";

export default function PanelThree() {
  return (
    <Panel inverted={true}>
      <div className="flex flex-row w-full justify-center items-center p-8">
        <div className="w-full md:w-2/3 flex flex-col justify-stretch items-stretch">
          <img
            src={cat}
            alt="Troy the cat"
            className="w-full h-auto border-8 dark:border-brand-primary border-brand-white rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-6 dark:text-brand-primary text-brand-white">
          <h3 className="text-3xl font-semibold tracking-loose mb-4 md:mb-6 font-raleway">
            Meet Troy, the cat
          </h3>
          <p className="text-xl mb-2 md:mb-4">
            Troy is a 8-year-old domestic short-hair cat. He enjoys sleeping,
            eating, and curling up on legs.
          </p>
          <p className="text-xl mb-2 md:mb-4">
            I adopted him from the Humane Rescue Alliance in Washington, DC in
            2020 during the COVID-19 pandemic.
          </p>
          <Link to="/troy" className="mt-2 md:mt-3">
            <Button className="flex flex-row justify-center items-center">
              <span className="mr-2">🐈</span> Learn more about Troy
            </Button>
          </Link>
        </div>
      </div>
    </Panel>
  );
}
