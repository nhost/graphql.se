import React, { useEffect, useState, useCallback } from "react";
import { TextField } from "components/ui";
import gql from "graphql-tag";
import { useMutation, useSubscription } from "@apollo/client";

const INSERT_ATTENDEE = gql`
  mutation insertAttendee($attendee: event_attendees_insert_input!) {
    insert_event_attendees(objects: [$attendee]) {
      affected_rows
    }
  }
`;

const S_GET_ATTENDEES_AGGREGATED = gql`
  subscription getAttendeesAggregated {
    event_attendees_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export function Attend() {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const eventId = "6f95e4ed-0ba1-4605-9488-8bb53fe253a4";

  const { loading, error, data } = useSubscription(S_GET_ATTENDEES_AGGREGATED);
  const [insertAttendee] = useMutation(INSERT_ATTENDEE);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await insertAttendee({
        variables: {
          attendee: {
            name,
            email,
            event_id: eventId,
          },
        },
      });
    } catch (err) {
      console.error(err);
      alert("failed inserting");
    }

    alert(`Done! We have sent you a email with all details.`);
    setIsOpen(false);
  }

  const escFunction = useCallback((event) => {
    if (event.keyCode !== 27) return;

    setIsOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  console.log({ loading });
  console.log({ error });
  console.log({ data });

  return (
    <div>
      <button
        className="border bg-graphql rounded-md hover:shadow-md hover:border-gray-500 p-4 uppercase font-semibold text-xl text-white transition ease-in-out duration-150"
        onClick={() => setIsOpen(true)}
      >
        I want to attend
      </button>
      {data && (
        <div className="pt-3">
          <div>
            {data.event_attendees_aggregate.aggregate.count} / 30 spots left
          </div>
          <div className="text-xs text-gray-600">
            (live updated with GraphQL Subscriptions)
          </div>
        </div>
      )}
      {isOpen && (
        <div className="absolute w-screen h-screen bg-graphql top-0 left-0 transition-all ease-in-out duration-700">
          <div className="max-w-xl mx-auto">
            <div className="py-8 text-gray-200 text-2xl">
              <span className="font-bold text-4xl">Yes,</span> I want to join
              GraphQL Stockholm meetup the 21 October 2020 at WeWork, Stockholm.
            </div>

            <form onSubmit={handleSubmit}>
              <div className="py-2">
                <TextField
                  className="w-full"
                  autoFocus
                  placeholder="My name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="py-2">
                <TextField
                  className="w-full"
                  placeholder="My email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="py-2">
                <button className="py-2 px-4 bg-purple-900 text-white text-sm uppercase rounded-md w-full">
                  I'm in!
                </button>
              </div>
              <div className="mt-8">
                <button
                  className="py-2 px-4 bg-pink-800 text-white text-sm uppercase rounded-md w-full"
                  onClick={() => setIsOpen(false)}
                >
                  close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
