import Image from 'next/image';

const teamMembers = [
  {
    name: 'test',
    role: 'test test test',
    image: '',
    description: 'test test',
  },
  {
    name: 'test test',
    role: 'testtesttesttesttest',
    image: '',
    description: 'testtesttesttesttesttest',
  },
  {
    name: 'test test',
    role: 'testtesttesttesttest',
    image: '',
    description: 'testtesttesttesttesttest',
  },
  {
    name: 'test test',
    role: 'testtesttesttesttest',
    image: '',
    description: 'testtesttesttesttesttest',
  },
  {
    name: 'test test',
    role: 'testtesttesttesttest',
    image: '',
    description: 'testtesttesttesttesttest',
  },
  {
    name: 'test test',
    role: 'testtesttesttesttest',
    image: '',
    description: 'testtesttesttesttesttest',
  }
];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Meet our team from different 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.name}
            className="bg-card border border-border rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <p className="text-card-foreground">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Join Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
       asdasdasd asd asd asd asd asd 
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
          View Open Positions
        </button>
      </div> */}
    </div>
  );
}