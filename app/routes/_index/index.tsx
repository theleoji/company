import React from "react";

import Panel from "~/components/Panel";

import HeadlinePanel from "./panels/HeadlinePanel";
import IntroAboutPanel from "./panels/IntroAboutPanel";
import TroyPanel from "./panels/TroyPanel";
import FeaturesPanel from "./panels/FeaturesPanel";
import ContactPanel from "./panels/ContactPanel";
import FooterPanel from "./panels/FooterPanel";
import PhotoPanel from "~/routes/_index/panels/PhotoPanel";
import PricingPanel from "~/routes/_index/panels/PricingPanel";
import TestimonialsPanel from "~/routes/_index/panels/TestimonialsPanel";

/* HeadlinePanel handles meta as well, since it's the landing screen */
export { meta } from "./panels/HeadlinePanel";

function SpacerPanel() {
  return <Panel className="pb-2 md:pb-8" />;
}

export default function Index() {
  return (
    <>
      <SpacerPanel />

      <HeadlinePanel />
      <IntroAboutPanel />
      {/*<TroyPanel />*/}
      {/*<FeaturesPanel />*/}
      <PricingPanel />
      <TestimonialsPanel />
      {/*<PhotoPanel />*/}
      <ContactPanel />
      <FooterPanel />

      <SpacerPanel />
    </>
  );
}
