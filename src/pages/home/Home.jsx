import CoursFeed from "../../components/cours/CoursFeed";
import CreatorSection from "../../components/creatorSection/CreatorSection";
import EducationFlatform from "../../components/educationFlatform/EducationFlatform";
import Hero from "../../components/hero/Hero";
import Mentors from "../../components/mentorSection/mentors";

function Home() {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <CoursFeed></CoursFeed>
      <EducationFlatform></EducationFlatform>
      <Mentors></Mentors>
      <CreatorSection></CreatorSection>
    </div>
  );
}

export default Home;
