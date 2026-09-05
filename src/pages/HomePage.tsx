import HeroSection from '../sections/HeroSection'
import CurrentlySection from '../sections/CurrentlySection'
import JourneySection from '../sections/JourneySection'
import MomentsSection from '../sections/MomentsSection'
import BuildSection from '../sections/BuildSection'
import SayapatriSection from '../sections/SayapatriSection'
import PeopleSection from '../sections/PeopleSection'
import SEO from '../components/SEO'

export default function HomePage() {
  return (
    <main id="main-content">
      <SEO
        title="Shyam Krishna Gupta — Tech Entrepreneur, AI/ML Engineer & Founder in Nepal"
        description="Official portfolio of Shyam Krishna Gupta — tech entrepreneur, Co-Founder of Sayapatri Group, Computer Engineer, and AI practitioner building startups & enterprise solutions in Nepal."
        keywords="Shyam Krishna Gupta, Tech Entrepreneur Nepal, Startup Founder Nepal, Tech Startup Nepal, Business Technology Nepal, Best Developer in Nepal, AI ML Developer Nepal, Sayapatri Group Founder"
        canonical="https://anshgupta.com.np/"
      />
      <HeroSection />
      <CurrentlySection />
      <JourneySection />
      <MomentsSection />
      <BuildSection />
      <SayapatriSection />
      <PeopleSection />
    </main>
  )
}
