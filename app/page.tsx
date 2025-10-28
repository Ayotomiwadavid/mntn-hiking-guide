import Header from "@/components/header"
import Hero from "@/components/hero"
import Section from "@/components/section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-slate-900 text-white">
      <Header />
      <Hero />

      <Section
        number="01"
        title="What level of hiker are you?"
        description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different pace ratings set by various websites like AllTrails and Modern Hiker. What type of hiker are you – novice, intermediate, advanced mountaineer, expert, or expert backpacker?"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%20%282%29-j34CBL3IlNUDx79dOkjwi1DJfNkCXf.png"
        imagePosition="right"
        link="read more"
      />

      <Section
        number="02"
        title="Picking the right Hiking Gear!"
        description="The only thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing, a typical mistake hiking beginners make is wearing denim jeans or any heavy pant. Avoid plated jackets and go for a lighter breathable jacket or a flannel shirt you can easily put on or off."
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-sQAeM1MESoaebf6X8JIABAPSfubzWs.png"
        imagePosition="left"
        link="read more"
      />

      <Section
        number="03"
        title="Understand Your Map & Timing"
        description="To start, print out the guide and study the map. Get a sense of the lay of the land. I also like to know what to expect time-wise. Typically on flat terrain, you can hike 3 miles every hour. Adjust, but keep in mind that hiking is not a race, you should always allow time to stop and take in the beautiful scenery that each of your hikes offer."
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%20%281%29-v5aFlmyaZH1mPzIVgM7Cj56An56tTn.png"
        imagePosition="right"
        link="read more"
      />

      <Footer />
    </main>
  )
}
