import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { dataProject } from "@/constans/project";
import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link";
import Projects from "@/components/projects/Projects";
import Connect from "@/components/connect/Connect";
export default function Home() {
  return (
    <main className='pb-10'>
      <h1 className='font-bold'>
        Hey, I’m Steve 👋
      </h1>
      <p className='text-sm tracking-wide mt-7'>
        I’m a frontend JavaScript developer, with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Nextjs, Redux, Node.js, Express, MongoDB, Prisma, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set.
        I am a team player 🏀 and I am excited to work with others to create amazing applications.
      </p>
      <div>
        <p className='text-sm tracking-wide mt-2 pt-4'>
          Here are a few technologies I've been working with recently:
        </p>
        <div className='flex space-x-[6rem] mt-5'>
          <ul className='flex-column space-y-2 text-xs'>
            <li>JavaScript (ES6 +)</li>
            <li>React</li>
            <li>NextJs</li>
          </ul>
          <ul className='flex-column space-y-2 text-xs'>
            <li>TypeScript</li>
            <li>Node.js/Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <section className='divider'>
        <h2 className='font-bold'>Some Things I've Built</h2>
        <Carousel>
          <CarouselContent>
            {dataProject.map(data => <CarouselItem key={data.id}>
              <Projects data={data} />
            </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:inline-flex" />
          <CarouselNext className="hidden lg:inline-flex" />
        </Carousel>
      </section>
      <Connect />
    </main >
  );
}
