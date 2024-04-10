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
          <ul className='flex flex-col space-y-2 text-xs'>
            <li>JavaScript (ES6 +)</li>
            <li>React</li>
            <li>NextJs</li>
          </ul>
          <ul className='flex flex-col space-y-2 text-xs'>
            <li>TypeScript</li>
            <li>Node.js/Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <section className='mt-7 border-t border-[#F6F2F2] pt-4'>
        <h2 className='font-bold'>Some Things I've Built</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {dataProject.map(data => <CarouselItem key={data.id}>
              <div className='flex items-center justify-between mt-5'>
                <div>
                  <div>
                    <h3 className='font-bold'>{data.name}</h3>
                    <div className='flex gap-3 mt-1'>
                      <Link className='text-xs text-gray-500' href={data.site}>View Site</Link>
                      <Link className='text-xs text-gray-500' href={data.code}>Code</Link>
                    </div>
                  </div>
                  <div className='max-w-[400px] text-xs tracking-wide mt-3'>
                    <p className='tracking-wide'>{data.description}</p>
                  </div>
                  <div className='flex flex-wrap gap-1 mt-2'>
                    {data.stack.map(s => <Badge key={data.id} variant="outline">{s}</Badge>)}
                  </div>
                </div>
                <div className='w-[300px]'>
                  <Image src={data.img} width={300} height={300} alt='audio' style={{ objectFit: "cover" }} />
                </div>
              </div>
            </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className='mt-5 flex justify-between items-center'>
        <div>
          <h2 className='font-bold'>Let's Connect</h2>
          <p className='tracking-wide text-xs mt-2'>I'm currently looking for new opportunities, my inbox is always open.</p>
          <p className='tracking-wide text-xs'>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        </div>
        <span className='font-bold text-xs'>steve.braco@gmail.com</span>
      </section>
    </main >
  );
}
