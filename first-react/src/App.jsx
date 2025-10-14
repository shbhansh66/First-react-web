import React from 'react'
import Card from './components/card.jsx'

const App = () => {

  const job=[
  {
    "id": 1,
    "status": "available",
    "rate": "$55/hr",
    "name": "Wade Wilson",
    "role": "UI/UX Designer",
    "company": "Epic Coders",
    "image_src": "https://th.bing.com/th/id/OIP.9EZAD2Ph4kyKBvP2aUMc9QHaFj?w=232&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["UI", "UX", "Photoshop", "+4"],
    "description": "Wade is a 32-year-old UI/UX designer, with an impressive portfolio behind him."
  },
  {
    "id": 2,
    "status": "busy",
    "rate": "$70/hr",
    "name": "Natasha Romanoff",
    "role": "Full Stack Developer",
    "company": "Stark Industries",
    "image_src": "https://th.bing.com/th/id/OIP.YaaordNnWBRT4lKkwTv_5AHaE7?w=237&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["React", "Node.js", "MongoDB", "+5"],
    "description": "Natasha is an expert in MERN stack development, known for her speed and security focus."
  },
  {
    "id": 3,
    "status": "available",
    "rate": "$60/hr",
    "name": "Peter Parker",
    "role": "Frontend Specialist",
    "company": "Daily Bugle Web",
    "image_src": "https://th.bing.com/th/id/OIP.zJg0eiItKN8ROS1bISdbsgHaGU?w=212&h=181&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js"],
    "description": "Peter is a young and energetic developer with a knack for pixel-perfect frontend implementation."
  },
  {
    "id": 4,
    "status": "on-call",
    "rate": "$85/hr",
    "name": "Bruce Banner",
    "role": "Data Scientist",
    "company": "Gamma Labs",
    "image_src": "https://th.bing.com/th/id/OIP.lQ5MbaD3Cyp6HqHTy90uVQHaEK?w=177&h=150&c=6&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["Python", "Machine Learning", "Big Data", "+3"],
    "description": "Bruce specializes in complex data modeling and predictive analytics, handling massive datasets with ease."
  },
  {
    "id": 5,
    "status": "available",
    "rate": "$50/hr",
    "name": "Carol Danvers",
    "role": "Cloud Architect",
    "company": "Alpha Flight Tech",
    "image_src": "https://th.bing.com/th/id/OIP.thIBLxQKq-oQkcHufJL1SgHaEo?w=232&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["AWS", "Azure", "DevOps", "Kubernetes"],
    "description": "Carol is a certified cloud expert, building scalable and resilient infrastructure for global clients."
  },
  {
    "id": 6,
    "status": "busy",
    "rate": "$95/hr",
    "name": "Tony Stark",
    "role": "Chief Technology Officer",
    "company": "Stark Industries",
    "image_src": "https://th.bing.com/th/id/OIP.Ed2g-wjnBZBo-Q62D0S1LwHaHa?w=145&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["Strategy", "Innovation", "AI", "+10"],
    "description": "Tony is a visionary leader and inventor, available for high-level technical consulting and strategy."
  },
  {
    "id": 7,
    "status": "available",
    "rate": "$45/hr",
    "name": "Steve Rogers",
    "role": "Project Manager",
    "company": "Strategic Services",
    "image_src": "https://th.bing.com/th/id/OIP.7UYyYW9r8Nrpp_CDhAdk_wHaEK?w=307&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["Scrum", "Agile", "Leadership", "Budgeting"],
    "description": "Steve excels at team motivation and on-time project delivery, ensuring clarity and execution."
  },
  {
    "id": 8,
    "status": "on-call",
    "rate": "$65/hr",
    "name": "Thor Odinson",
    "role": "Blockchain Developer",
    "company": "Asgard Finance",
    "image_src": "https://th.bing.com/th/id/OIP.W5rQPai0V_TL5oWXqjkYPwHaFj?w=258&h=187&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["Solidity", "Ethereum", "Cryptography", "DeFi"],
    "description": "Thor brings the hammer down on complex distributed ledger challenges, specializing in smart contracts."
  },
  {
    "id": 9,
    "status": "available",
    "rate": "$58/hr",
    "name": "Wanda Maximoff",
    "role": "Mobile App Developer",
    "company": "Westview Apps",
    "image_src": "https://th.bing.com/th/id/OIP.7Nmm_DaN8rjqP9zdt7yBvQHaFV?w=175&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["Swift", "Kotlin", "React Native", "Firebase"],
    "description": "Wanda crafts seamless and enchanting mobile user experiences across both iOS and Android platforms."
  },
  {
    "id": 10,
    "status": "busy",
    "rate": "$75/hr",
    "name": "Stephen Strange",
    "role": "Security Consultant",
    "company": "Sanctum Solutions",
    "image_src": "https://th.bing.com/th/id/OIP.NMfdrtfzsGK3VMdfHp4otwHaLd?w=115&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["Pen Testing", "Auditing", "Compliance", "Network Security"],
    "description": "Dr. Strange provides deep insight into system vulnerabilities and robust defensive architecture."
  },
  {
    "id": 8,
    "status": "on-call",
    "rate": "$65/hr",
    "name": "Thor Odinson",
    "role": "Blockchain Developer",
    "company": "Asgard Finance",
    "image_src": "https://th.bing.com/th/id/OIP.W5rQPai0V_TL5oWXqjkYPwHaFj?w=258&h=187&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "skills": ["Solidity", "Ethereum", "Cryptography", "DeFi"],
    "description": "Thor brings the hammer down on complex distributed ledger challenges, specializing in smart contracts."
  },
]
 console.log(job)

  return (
    <>
      <div className='parent'>
{  job.map(function(elem){
  return <Card role={elem.role} desc={elem.description} company={elem.company} skill={elem.skills} status={elem.status}  rate={elem.rate} img={elem.image_src} name={elem.name}/>
})

}
      </div>
     
    </>
  )
}

export default App
