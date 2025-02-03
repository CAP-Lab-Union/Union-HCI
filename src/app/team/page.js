import Image from 'next/image';

const teamMembers = [
  {
    name: 'Shruti Mahajan',
    role: 'Professor',
    image: '/team/shruti.jpeg',
    description: "Mary H. '80 and Richard K. Templeton '80 Assistant Professor of Computer Science",
    info: 'More info'
  },
  {
    name: 'James Lin',
    role: 'Research Assistant',
    image: '/team/James.jpeg',
    description: 'Computer Vision and User Experience Design',
    info: 'More info'
  },
  {
    name: 'Victor Wong',
    role: 'Research Assistant',
    image: '/team/victor.jpg',
    description: 'Computer Vision and User Experience Design',
    info: 'More info'
  },
  {
    name: 'Kshitij Agarwal',
    role: 'Research Assistant',
    image: '/team/Agarwal.jpeg',
    description: 'Brain-Computer Interfaces & Computer Vision ',
    info: 'More info'
  },
  {
    name: 'Ramissa Kahn',
    role: 'Research Assistant',
    image: '/team/Ramissa.png',
    description: 'Developing Digital Immersive Experiences for Anxiety Relief through Data Visualization. ',
    info: 'More info'
  },
  {
    name: 'Luodi Wang',
    role: 'Research Assistant',
    image: '/team/luodi.jpg',
    description: 'Software Developer',
    info: 'More info'
  },
  {
    name: 'Natalie Pinto',
    role: 'Research Assistant',
    image: '/team/Natalie.jpeg',
    description: 'Computer Science Major - ASL-Centric User Interfaces',
    info: 'More info'
  },
  {
    name: 'Ayanat Zhumagaliyeva',
    role: 'Research Assistant',
    image: '/team/ayanat.jpg',
    description: 'Augmented Reality, 3D modeling',
    info: 'More info'
  }
];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-card/70 border border-border rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 flex flex-col h-[550px] hover:bg-[#3994B2] group" // Added hover background color and group class
          >
            <div className="relative h-96 w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={{ objectPosition: '50% 30%' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-primary mb-1 group-hover:hidden">{member.name}</h3>
              <p className="text-muted-foreground mb-4 group-hover:hidden">{member.role}</p>
              <p className="text-card-foreground overflow-y-auto flex-grow group-hover:hidden">
                {member.description}
              </p>
              <p className="text-card-foreground mt-4 hidden group-hover:block">
                {member.info}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Join Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Email:
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
          Contact
        </button>
      </div>
    </div>
  );
}



