import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="container mx-auto flex-grow">
        <div className="text-6xl font-bold text-center leading-none text-graphql py-10">
          GraphQL.se Meetup Stockholm
        </div>
        <div className="text-3xl font-bold text-gray-800 text-center py-6">
          A pretty good meetup. Don't miss it!
        </div>
        <div className="w-full flex items-center justify-center py-6 uppercase font-bold text-gray-600">
          <div>21 October 2020</div>
          <div className="px-2">|</div>
          <div>WeWork, Stockholm</div>
        </div>
      </div>
      <div className="text-center py-4">
        By{" "}
        <a href="https://nhost.io" className="text-graphql">
          Nhost
        </a>
      </div>
    </div>
  );
}
