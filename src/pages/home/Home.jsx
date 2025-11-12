import Categories from "../../components/category/Categories";
import CreatorSection from "../../components/creatorSection/CreatorSection";
import EducationFlatform from "../../components/educationFlatform/EducationFlatform";
import Hero from "../../components/hero/Hero";
import Mentors from "../../components/mentorSection/mentors";

function Home() {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <Categories></Categories>
      <EducationFlatform></EducationFlatform>
      <Mentors></Mentors>
      <CreatorSection></CreatorSection>
    </div>
  );
}

export default Home;
