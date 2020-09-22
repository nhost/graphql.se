import React from "react";

export function SpeakerCard({ speaker }) {
  return (
    <div
      key={speaker.person.name}
      className="rounded max-w-4xl mx-auto bg-gray-100 shadow-lg p-5 my-12"
    >
      <div className="flex items-center">
        <img
          src={speaker.person.img}
          alt={speaker.person.name}
          className="rounded-full w-40 h-40"
        />
        <div className="ml-12">
          <h5 className="text-2xl font-bold">{speaker.person.name}</h5>
          <h5 className="text-xl text-gray-800">{speaker.person.title}</h5>
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
  );
}
