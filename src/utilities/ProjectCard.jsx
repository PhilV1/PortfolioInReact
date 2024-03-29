import Button from './Button'

function ProjectCard({ children, link, image }) {
  return (
    <div className="border-orange-400 border-2 relative group rounded-lg h-[200px] w-[300px] z-0">
      <img
        src={image}
        alt="Project Image"
        className="h-full w-full rounded-md"
      />
      <div className="flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 ease-in-out pb-8 bg-orange-400 h-full w-full absolute bottom-0 rounded-md duration-500">
        <p className="pb-2 font-medium">{children}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <Button>View</Button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
