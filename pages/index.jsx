import Head from "next/head";

export default function Home() {
  const speakers = [
    {
      person: {
        name: "Alex Johansson",
        img:
          "https://media-exp1.licdn.com/dms/image/C5603AQHUW4WIkkFVRA/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=04xufTpxg2ZtVsiOsoqOxLW8SUJQB3fPI0lJRDfT4Go",
        title: "CTO at TradeBay",
        social: {
          twitter: "23",
          linkedin: "johanssonalexander",
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
        img:
          "https://media-exp1.licdn.com/dms/image/C4D03AQFceXLLJcT_ow/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=FvSEiIYZ8fsIwYW9VOy3fo0QKpuuaPuJJIw3zg8v4bE",
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
        <div className="w-full flex items-center justify-center py-6 uppercase font-bold text-gray-700">
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
          <div className="px-2">|</div>
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
            WeWork, Stockholm
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
              <div className="rounded max-w-4xl mx-auto bg-gray-100 shadow-lg p-5 my-12">
                <div className="flex items-center">
                  <img
                    src={speaker.person.img}
                    alt={speaker.person.name}
                    className="rounded-full w-40 h-40"
                  />
                  <div className="ml-12">
                    <h5 className="text-2xl font-bold">
                      {speaker.person.name}
                    </h5>
                    <h5 className="text-xl text-gray-800">
                      {speaker.person.title}
                    </h5>
                    <a
                      href={speaker.company.url}
                      className="text-gray-600 hover:text-graphql tarnsform-all ease-in-out duration-200"
                    >
                      {speaker.company.name}
                    </a>
                    <div className="flex pt-4">
                      {speaker.person.social.github && (
                        <a
                          className="px-2"
                          style={{ color: "#181717" }}
                          href={speaker.person.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img className="w-6 h-6" src="/images/github.svg" />
                        </a>
                      )}
                      {speaker.person.social.twitter && (
                        <a
                          className="px-2"
                          href={speaker.person.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img className="w-6 h-6" src="/images/twitter.svg" />
                        </a>
                      )}
                      {speaker.person.social.linkedin && (
                        <a
                          className="mx-2"
                          href={speaker.person.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img className="w-6 h-6" src="/images/linkedin.svg" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex pt-8">
                  <div className="w-40 mr-12 uppercase text-gray-700 text-right">
                    Talk Title
                  </div>
                  <div className="flex-1 font-bold">{speaker.talk.name}</div>
                </div>
                <div className="flex pt-4">
                  <div className="w-40 mr-12 uppercase text-gray-700 text-right">
                    Talk Description
                  </div>
                  <div className="flex-1">{speaker.talk.description}</div>
                </div>
                <div className="flex pt-4">
                  <div className="w-40 mr-12 uppercase text-gray-700 text-right">
                    Talk Length
                  </div>
                  <div className="flex-1">{speaker.talk.length}</div>
                </div>
              </div>
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
