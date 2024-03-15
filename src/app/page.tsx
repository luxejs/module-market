import modulesData from "@/modules.json"
import ModuleCard from "../components/card/module"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center">
          {modulesData.map((item, key) => (
            <ModuleCard
              key={key}
              name={item.name}
              description={item.description}
              image={item.image}
              url={item.url}
              validatorKey={item.validatorKey}
              verified={item.verified}
              tags={item.tags}
              disabled={item.disabled}
            />
          ))}
        </div>
      </div>
    </>
  )
}
