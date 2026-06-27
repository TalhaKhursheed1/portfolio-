"use client";

import Image from "next/image";
import { FaGooglePlay, FaApple, FaDownload, FaRocket } from "react-icons/fa";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio";

interface ProjectCardImageProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCardImage({ project, priority }: ProjectCardImageProps) {
  const isLive = !!(project.androidUrl || project.iosUrl);
  const isComingSoon = project.status === "Coming Soon";

  return (
    <div className={cn("h-56 relative overflow-hidden shrink-0 bg-surface", project.gradient)}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        unoptimized
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
        {isComingSoon && (
          <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-orange-500/25 text-orange-300 rounded-full border border-orange-500/40 flex items-center gap-1.5 w-fit backdrop-blur-sm">
            <FaRocket className="text-[10px]" /> Coming Soon
          </span>
        )}
        {isLive && !isComingSoon && (
          <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-accent/30 text-accent-light rounded-full border border-accent/40 w-fit backdrop-blur-sm">
            Live on Stores
          </span>
        )}
        {project.featured && !isLive && !isComingSoon && (
          <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-accent/20 text-accent-light rounded-full border border-accent/30 w-fit backdrop-blur-sm">
            Featured Build
          </span>
        )}
      </div>

      {project.downloads && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-mono bg-emerald-500/25 text-emerald-300 rounded-full border border-emerald-500/40 flex items-center gap-1.5 z-10 backdrop-blur-sm">
          <FaDownload className="text-[10px]" /> {project.downloads}
        </span>
      )}

      {(project.androidUrl || project.iosUrl) && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 z-10">
          <div className="flex flex-wrap gap-2 justify-center px-4">
            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-background/90 rounded-full text-sm flex items-center gap-2 hover:text-accent-light hover:scale-105 transition-all border border-white/10"
              >
                <FaGooglePlay /> Play Store
              </a>
            )}
            {project.iosUrl && (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-background/90 rounded-full text-sm flex items-center gap-2 hover:text-accent-light hover:scale-105 transition-all border border-white/10"
              >
                <FaApple /> App Store
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
