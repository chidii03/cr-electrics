export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  detail: string;
  icon: "light" | "bolt" | "panel" | "test" | "camera";
  image: string;
};

// Stock photography is illustrative. Customer review screenshots remain confined to /reviews.
export const services: Service[] = [
  {
    slug: "lighting-installations",
    title: "Lighting installations",
    short:
      "Internal and external lighting planned around the way you use a space.",
    intro:
      "Lighting changes how a space feels and works. Tell us what you have in mind and we can discuss the right next steps.",
    detail:
      "Share the room, fitting or outdoor area you are considering, along with any plans or reference photos, so the scope can be discussed.",
    icon: "light",
    image:
      "https://images.unsplash.com/photo-1786455588142-c5ae046dcd0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    slug: "fuseboard-consumer-unit-upgrades",
    title: "Consumer-unit upgrades",
    short: "A clear starting point for fuseboard and consumer-unit enquiries.",
    intro:
      "If you are considering a consumer-unit or fuseboard project, get in touch with details about the property and what you need.",
    detail:
      "Every enquiry is reviewed individually. Share useful property details and any context around the existing installation so the project can be discussed properly.",
    icon: "panel",
    image:
      "https://images.unsplash.com/photo-1635335874521-7987db781153?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    slug: "outdoor-sockets",
    title: "Outdoor sockets",
    short: "Power where you need it for gardens, garages and outdoor spaces.",
    intro:
      "Tell us where you need outdoor power and what you plan to use it for.",
    detail:
      "The location, intended use and property details help establish whether the work can be supported and what needs to be considered.",
    icon: "bolt",
    image:
      "https://images.unsplash.com/photo-1698241255956-ff8759135df2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    slug: "indoor-sockets",
    title: "Indoor sockets",
    short: "Additional or relocated sockets for a more practical room layout.",
    intro:
      "Share the room, preferred socket position and any relevant property details.",
    detail:
      "A short description, photographs and a plan of where power is needed provide a useful starting point for discussing the work.",
    icon: "bolt",
    image:
      "https://plus.unsplash.com/premium_photo-1683127814960-3a97c4f0d882?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    slug: "spotlights",
    title: "Spotlights",
    short: "Focused lighting that supports everyday spaces and features.",
    intro:
      "Considering spotlights? Include the room and the look or layout you have in mind.",
    detail:
      "Share any plans or reference photos so the layout, fittings and practical requirements can be discussed.",
    icon: "light",
    image:
      "https://images.unsplash.com/photo-1727096857692-e9dadf2bc92e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    slug: "garden-lighting",
    title: "Garden lighting",
    short: "Lighting ideas for paths, seating areas and outdoor living spaces.",
    intro: "Describe the outdoor space and the lighting you are considering.",
    detail:
      "The layout, desired effect and property details are useful starting points when discussing a garden-lighting enquiry.",
    icon: "light",
    image:
      "https://images.unsplash.com/photo-1763091637367-bcd33b348884?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    slug: "led-lighting",
    title: "LED lighting",
    short: "Efficient lighting options for the places you use every day.",
    intro:
      "Share what you would like to illuminate and any fittings or plans you are considering.",
    detail:
      "Contact CR Electrics to discuss the space and confirm whether the specific work is available for your project.",
    icon: "light",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "rewires",
    title: "Rewires",
    short: "A considered conversation about the requirements of your property.",
    intro: "A rewire enquiry depends on the property and scope involved.",
    detail:
      "Start with the building type, location and what you know about the existing installation. Scope, suitability and next steps are agreed for each property.",
    icon: "bolt",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "eicr-electrical-testing",
    title: "EICR & electrical testing",
    short: "Inspection and testing enquiries discussed around your property.",
    intro:
      "Contact CR Electrics to discuss the property, the type of testing you need and any relevant context.",
    detail:
      "Suitability, scope and any documentation are discussed directly for each job; include useful detail in your enquiry.",
    icon: "test",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
