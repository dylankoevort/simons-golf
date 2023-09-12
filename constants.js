export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Golf",
    href: "/golf",
  },
  {
    name: "Squash",
    href: "/squash",
  },
  {
    name: "Club House",
    href: "/facilities",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Membership",
    href: "/membership",
  },
  {
    name: "FAQs",
    href: "/faq",
  },
];

export const homeImages = [
  {
    id: 1,
    src: "/home1.jpg",
    alt: "Home 1",
  },
  {
    id: 2,
    src: "/home2.jpg",
    alt: "Home 2",
  },
  {
    id: 3,
    src: "/home3.jpg",
    alt: "Home 3",
  },
  {
    id: 4,
    src: "/home4.jpg",
    alt: "Home 4",
  },
];

export const faqs = [
  {
    question: "WHAT TIME IS THE CLUB OPEN?",
    answer:
      "Our Club is open 7 days a week. We open at 8AM every morning except Tuesdays and Thursdays when we open at 10AM. The club closes at 7pm every night.",
  },
  {
    question: "WHAT EVENTS ARE ON AT THE CLUB?",
    answer: (
      <>
        Please check our{" "}
        <a
          href="https://www.facebook.com/STCountryClub/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline"
        >
          facebook page
        </a>{" "}
        for the latest events, activities and news from the club.
      </>
    ),
  },
  {
    question: "DO YOU NEED TO BE A MEMBER TO PLAY GOLF?",
    answer:
      "No you do not need to a member, we welcome visitors. Please contact the club to see if there are any tee times available.",
  },
  {
    question: "WHAT OTHER ACTIVITIES ARE THERE IN SIMONS TOWN?",
    answer: (
      <>
        We recommend checking out the main{" "}
        <a
          href="https://simonstown.com"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline"
        >
          simonstown.com
        </a>{" "}
        website, which has a wealth of information on other activities and town
        history. The site includes accommodation and restaurant guides and we
        highly recommend visiting this to learn more about our beautiful town.
      </>
    ),
  },
  {
    question: "WHAT DOES A ROUND OF GOLF COST?",
    answer: (
      <>
        The cost will be dependent on whether you are a member or not, please
        view our rates on our{" "}
        <a
          href="/golf"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline"
        >
          golf page
        </a>
        .
      </>
    ),
  },
  {
    question: "CAN VISITORS OR TOURISTS PLAY A ROUND?",
    answer:
      "We welcome visitors to our club, please contact us to check availability. We also offer equipment hire.",
  },
  {
    question: "IS THERE A PRO SHOP?",
    answer:
      "Yes we have a pro shop. We sell shirts, balls, tees and other equipment. Please call ahead if you have any specific queries.",
  },
];
