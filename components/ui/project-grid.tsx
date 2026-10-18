import Image from "next/image";
import type { ProjectImage } from "@/lib/projects";

export function ProjectGrid({
  items,
  detailed = false,
}: {
  items: ProjectImage[];
  detailed?: boolean;
}) {
  return (
    <div className={`project-grid ${detailed ? "project-grid-detailed" : ""}`}>
      {items.map((project, index) => (
        <article className="project-card" key={project.image}>
          <div className={`project-image-wrap project-image-${index % 3}`}>
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
              unoptimized
            />
          </div>
          <div className="project-copy">
            <span>{project.category}</span>
            <h3>{project.caption}</h3>
            {detailed && (
              <>
                <p>{project.focus}</p>
                <p className="project-solution">{project.solution}</p>
              </>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
