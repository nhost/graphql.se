import Head from "next/head";
import { SpeakerCard } from "components/speaker-card";
import { Attend } from "components/attend";

export default function Home() {
  const speakers = [
    {
      id: 1,
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
      id: 2,
      person: {
        name: "Rikard Wissing",
        img: "/images/rikard-wissing.jpg",
        title: "Developer",
        social: {
          twitter: "rikardwissing",
          github: "rikardwissing",
          linkedin: "rikard-wissing-7b1a98127",
        },
      },
      company: {
        name: "Teamtailor",
        url: "https://teamtailor.se",
      },
      talk: {
        name: "How GraphQL made us deliver an app in 3 weeks",
        description:
          "How we moved faster with GraphQL building an enterprise app in React Native.",
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
          A small <span className="text-green-600">COViD-19</span> safe meetup
          about <span className="text-graphql">GraphQL</span>
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
            18:00-20:00, 21 October 2020
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
              <SpeakerCard speaker={speaker} key={speaker.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-purple-100 py-12">
        <div className="container mx-auto">
          <div className="w-full text-center">
            <h2 className="inline text-4xl font-normal text-gray-800 border-b-4 border-graphql uppercase">
              Venue
            </h2>
          </div>
          <div className="grid grid-1 gap-8 py-4 max-w-4xl mx-auto">
            <div className="w-full">
              GraphQL.se meetup is at in Stockholm, Sweden. More specifically at{" "}
              <a
                className="text-graphql"
                href="https://goo.gl/maps/1ED6N4toFoQC43Sc6"
                target="_blank"
                rel="noopener noreferrer"
              >
                WeWork Urban Escape, Malmskillnadsgatan 32, Stockholm.
              </a>
            </div>
            <div>
              <img src="/images/bg-sweden.jpg" className="cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-12">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="inline text-4xl font-normal text-gray-800 border-b-4 border-graphql uppercase">
              COViD-19 info
            </h2>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="py-6 text-xl">
              <ul className="list-disc">
                <li>Max 30 people attending.</li>
                <li>No handshakes.</li>
                <li>Keep 1 meter social distance.</li>
                <li>Wash hands often.</li>
                <li>
                  Do NOT attend if you feel symptoms (even mildly symptoms)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="inline text-4xl font-normal text-gray-800 border-b-4 border-graphql uppercase">
            Sponsors
          </h2>
          <div className="grid grid-cols-2 gap-8 py-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <a
                href="https://nhost.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-12"
                  src="https://docs.nhost.io/images/logo.svg"
                />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://antler.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-12" viewBox="0 0 226 54" role="img">
                  <title>Antler</title>
                  <g fill="#ED4747" fill-rule="evenodd">
                    <path d="M217.722 30.655c4.291-1.198 7.308-4.158 7.308-9.077v-.09c0-2.622-.888-4.848-2.535-6.471-1.974-1.94-4.989-3.017-8.84-3.017H200v30h5.39V31.552h6.746L219.661 42H226l-8.278-11.345zM205.38 26.89V16.823h7.838c3.981 0 6.34 1.744 6.34 4.966v.075c0 3.036-2.454 5.021-6.308 5.021l-7.87.005zM166 16.73V42h23v-4.704h-18.143v-8.06h13.905v-4.701h-13.905V16.73H189V12h-23v4.73M140.269 12H135v30h21v-4.79h-15.731V12M100 16.897h9.766V42h5.472V16.897H125V12h-25v4.897M84.843 12H90v30h-4.401L69.158 20.671V42H64V12h4.852l15.991 20.752V12M37.17 42.215L26.903 18.144 16.65 42.214h-5.454l13.333-30.429h4.954l13.321 30.43H37.17zM0 54h54V0H0v54z"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="inline text-4xl font-normal text-gray-800 border-b-4 border-graphql uppercase">
            Organizer
          </h2>
          <div className="py-12 flex justify-center">
            <a
              href="https://nhost.io"
              target="_blank"
              rel="noopener noreferrerjjj"
            >
              <img
                className="h-12"
                src="https://docs.nhost.io/images/logo.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
