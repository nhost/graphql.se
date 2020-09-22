import Head from "next/head";
import { SpeakerCard } from "components/speaker-card";
import { Attend } from "components/attend";

export default function Home() {
  const speakers = [
    {
      person: {
        name: "Alexander Johansson",
        img: "/images/alexander-johansson.jpg",
        title: "CTO at TradeBay",
        social: {
          twitter: "alexdotjs",
          linkedin: "johanssonalexander",
          github: "KATT",
        },
      },
      company: {
        name: "TradeBay",
        url: "https://tradebay.co",
      },
      talk: {
        name: "E2E Type Safety with GraphQL",
        description:
          "Type safety in the database (PostgreSQL), in your API (GraphQL) and in the frontend (TypeScript). You have never felt safer!",
        length: "12 min",
      },
    },
    {
      person: {
        name: "Rikard Wissing",
        img: "/images/rikard-wissing.jpg",
        title: "Developer",
        social: {
          twitter: "23",
          linkedin: "johanssonalexander",
        },
      },
      company: {
        name: "Teamtailor",
        url: "https://teamtailor.se",
      },
      talk: {
        name: "GraphQL in React Native",
        description:
          "How we moved faster with GraphQL building apps in React Native.",
        length: "12 min",
      },
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center leading-none text-graphql py-10">
          GraphQL.se Meetup Stockholm
        </h1>
        <div className="text-3xl font-bold text-gray-800 text-center py-6">
          2020 just got better!
        </div>
        <div className="text-center py-8">
          <Attend />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center py-6 uppercase font-bold text-gray-700">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-graphql"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>{" "}
            21 October 2020
          </div>
          <div className="hidden md:block px-2">|</div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-1 text-graphql"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            WeWork, 12th floor, Stockholm
          </div>
        </div>
      </div>

      <div className="bg-indigo-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="inline text-4xl font-normal text-gray-800 border-b-4 border-graphql uppercase">
            Speakers
          </h2>
          <div className="w-full text-left">
            {speakers.map((speaker) => (
              <SpeakerCard speaker={speaker} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-purple-100 py-12">hej</div>

      <div className="text-center py-4">
        By{" "}
        <a href="https://nhost.io" className="text-graphql">
          Nhost
        </a>
      </div>
    </div>
  );
}
