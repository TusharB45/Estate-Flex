// developers.tsx
// developers.tsx
'use client'; 
// developers.tsx
import ClientOnly from '@/app/components/ClientOnly';
import Container from '@/app/components/Container';
import Heading from '@/app/components/Heading';
import DeveloperBox from '@/app/components/DeveloperBox';


const DevelopersPage = () => {
  return (
    <ClientOnly>
      <Container>
        <Heading title="About Our Developers" subtitle="Meet the talented individuals behind our project." />

        <div className="flex justify-between mt-8 space-x-8">
          {/* Developer Box 1 */}
          <DeveloperBox
            name="Borse Tushar"
            imageUrl="/images/1625402791406.png"
            bio="Tushar ScriptWeaver is a dynamic programmer specializing in scripting languages and automation tools.
            Known for creative problem-solving, he streamlines workflows and enhances efficiency through code.
            Proficient in Python, Ruby, and Bash, Tushar simplifies complex processes, saving time and resources.
            An avid learner, he explores new scripting languages and stays updated on automation technologies.
            Strongly advocates for clean, readable code; Tushar collaborates well in interdisciplinary teams, delivering comprehensive solutions."
            github="https://github.com"
            linkedin="https://www.linkedin.com"
            instagram="https://www.instagram.com"
            email="tusharborse45@gmail.com.com"
            resumePath="/Resumes/Borse Tushar Mukesh.pdf"
            pronouns='he/him'
            role=""
          />

          {/* Developer Box 2 */}
          <DeveloperBox
            name="Yadav Akash"
            imageUrl="/images/00c981920d0bd30cca24e62a6b760ba2.jpg"
            bio="Akash CodeMaster is a seasoned programmer skilled in both front-end and back-end development.
            Meticulous and detail-oriented, she transforms abstract concepts into efficient algorithms.
            A collaborative team player, Akash values communication and seamlessly integrates cutting-edge solutions.
            Beyond technical prowess, she excels in troubleshooting and debugging complex issues.
            Committed to staying updated, Akash is a problem solver with a passion for optimizing code and improving software performance."
            github="https://github.com/AkashY45"
            linkedin="https://www.linkedin.com/in/yadav-akash-a395a9291/"
            instagram="https://www.instagram.com/y_akash7/"
            email="akashyadava618@gmail.com"
            resumePath="/Resumes/Yadav Akash.pdf"
            pronouns='he/him'
            role=""
          />
        </div>
      </Container>
      
    
    </ClientOnly>
    
  );
};

export default DevelopersPage;
