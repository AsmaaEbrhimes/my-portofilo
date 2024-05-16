
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import girlimg from "../../image/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-9233.avif"
import girl2 from "../../image/pngtree-hand-painted-cartoon-beauty-avatar-png-image_3978904.jpg"
import girl3 from "../../image/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg"
import girl4 from "../../image/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={girlimg} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={girl2} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={girl3} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={girl4} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={girlimg} />
      )
    }
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default App;
