import HeroSection from '../sections/HeroSection'
import CurrentlySection from '../sections/CurrentlySection'
import JourneySection from '../sections/JourneySection'
import MomentsSection from '../sections/MomentsSection'
import BuildSection from '../sections/BuildSection'
import SayapatriSection from '../sections/SayapatriSection'
import PeopleSection from '../sections/PeopleSection'

export default function HomePage() {
  return (
    <main id="main-content">
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
