import projectsData from "@/src/constants/buildNStake.json"
import ModuleCard from "@/src/components/card/module"
import Navbar from "@/src/components/navbar"

export default function Vote() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center">
          {projectsData.map((item, key) => (
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
