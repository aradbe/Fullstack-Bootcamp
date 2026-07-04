import { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

function Exercise2() {
  const [data, setData] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          {
            text: "Have you finished your school work yet?",
            sender: "other",
          },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  });
  const contacts = data.conversations.map((conversation) => conversation.with);

  const displayConvo = (name) => {
    setData({
      ...data,
      displayConversation: name,
    });
  };

  const goBack = () => {
    setData({
      ...data,
      displayConversation: null,
    });
  };

  const currentConversation = data.conversations.find(
    (conversation) => conversation.with === data.displayConversation,
  );

  return (
    <div>
      {data.displayConversation === null ? (
        <List contacts={contacts} displayConvo={displayConvo} />
      ) : (
        <Conversation
          convo={currentConversation.convo}
          sender={data.displayConversation}
          goBack={goBack}
        />
      )}
    </div>
  );
}

export default Exercise2;
