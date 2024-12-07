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
<<<<<<< HEAD
            bio=""
=======
            bio="Tushar ScriptWeaver excels in Python, data science, streamlining workflows and advocating for clean, readable code in collaborative teams."
>>>>>>> 8a27f5cff31833368e4465e8ebbd8d766970e3bd
            github="https://github.com"
            linkedin="https://www.linkedin.com"
            instagram="https://www.instagram.com"
            email="tusharborse45@gmail.com.com"
            resumePath="/Resumes/Borse Tushar Mukesh.pdf"
            pronouns='he/him'
            role="FrontEnd Developer"
          />

          {/* Developer Box 2 */}
          <DeveloperBox
            name="Yadav Akash"
            imageUrl="/images/00c981920d0bd30cca24e62a6b760ba2.jpg"
            bio=""
            github="https://github.com/AkashY45"
            linkedin="https://www.linkedin.com/in/yadav-akash-a395a9291/"
            instagram="https://www.instagram.com/y_akash7/"
            email="akashyadava618@gmail.com"
            resumePath="/Resumes/YAkash Resume.pdf"
            pronouns='he/him'
            role="BackEnd Developer"
  
          />
        </div>
      </Container>
      
    
    </ClientOnly>
    
  );
};

export default DevelopersPage;