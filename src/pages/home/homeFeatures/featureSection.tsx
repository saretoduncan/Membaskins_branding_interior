import FeaturedServices from "./featuredServices"
import WhyUsSection from "./whyUsSection"


const FeatureSection = () => {
  return (
    <div className="w-full  grid gap-6">
      <section className="p-4 bg-slate-50">
        <WhyUsSection/>
      </section>
      <section className="p-4">
        <FeaturedServices/>
      </section>

    </div>
  )
}

export default FeatureSection