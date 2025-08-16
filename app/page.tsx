import Companioncard from "@/components/Companioncard"
import CompanionsList from "@/components/CompanionsList"
import CTA from "@/components/CTA"
import { recentSessions } from "@/constants"


const Page = () => {
  return (

    <main> <h1 >Popular Companion</h1>
      <section className="home-section">
        <Companioncard 
          id="123"
          name="Neura The Brainy Explorer"
          topic = "Neural Network Of the Brain"
          subject = "science"
          duration = {45}
          color = "#ffda6e"
        />
        <Companioncard 
          id="456"
          name="Countsy the Number Wizard"
          topic ="Derivatives & Integral"
          subject = "maths"
          duration = {30}
          color = "#e5d0ff"
        />
        <Companioncard 
          id="789"
          name="Verba the Vocubulary Builder"
          topic = "English Literature"
          subject = "language"
          duration = {30}
          color = "#bde7ff"
        />
        
    
      </section>
      <section className="home-section">
        <CompanionsList 
          title = "Recently completed sessions"
          companions = {recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section></main>

  )
}

export default Page