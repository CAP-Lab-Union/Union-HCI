'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/Union-HCI' : '';

const teamMembers = [
  {
    name: 'Shruti Mahajan',
    role: 'Assistant Professor',
    image: `/team/shruti.jpeg`,
    description: "Mary H. '80 and Richard K. Templeton '80 Assistant Professor of Computer Science",
  },
  {
    name: 'James Lin',
    role: 'Research Assistant',
    image: `/team/James.jpeg`,
    description: 'Computer Vision and User Experience Design',
  },
  {
    name: 'Victor Wong',
    role: 'Research Assistant',
    image: `/team/victor.jpg`,
    description: 'Computer Vision and User Experience Design',
  },
  {
    name: 'Kshitij Agarwal',
    role: 'Research Assistant',
    image: `/team/Agarwal.jpeg`,
    description: 'Brain-Computer Interfaces & Computer Vision',
  },
  {
    name: 'Ramissa Kahn',
    role: 'Research Assistant',
    image: `/team/Ramissa.png`,
    description: 'Developing Digital Immersive Experiences for Anxiety Relief through Data Visualization.',
  },
  {
    name: 'Luodi Wang',
    role: 'Research Assistant',
    image: `/team/luodi.jpg`,
    description: 'Software Developer',
  },
  {
    name: 'Natalie Pinto',
    role: 'Research Assistant',
    image: `/team/Natalie.jpeg`,
    description: 'Computer Science Major - ASL-Centric User Interfaces',
  },
  {
    name: 'Ayanat Zhumagaliyeva',
    role: 'Research Assistant',
    image: `/team/ayanat.jpg`,
    description: 'Augmented Reality, 3D modeling',
  },
];

export default function TeamPage() {
  const router = useRouter();

  // Function to navigate to the Team page
  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-card/70 border border-border rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 flex flex-col h-[550px]"
          >
            {/* div for image */}
            <div className="relative h-96 w-full">
              <Image
                src={member.image} //Image path
                alt={member.name}
                fill
                className="object-cover"
                style={{ objectPosition: '50% 30%' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Div for part under */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <p className="text-card-foreground overflow-y-auto flex-grow">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Join Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Email: hci_research@union.edu
        </p>
        <button
          onClick={handleContactClick}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
