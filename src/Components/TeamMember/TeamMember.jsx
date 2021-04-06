import React from "react";
import { Image, Reveal } from "semantic-ui-react";

const TeamMember = () => (
  <Reveal animated="move">
    <Reveal.Content visible>
      <Image src="https://static.toiimg.com/photo/72975551.cms" size="small" />
    </Reveal.Content>
    <Reveal.Content hidden>Hello</Reveal.Content>
  </Reveal>
);

export default TeamMember;
