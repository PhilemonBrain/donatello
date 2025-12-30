import Container from '@/components/Container'
import MotionSection from '@/components/MotionSection'

const services = [
  { title: 'FTTH Deployment', desc: 'End-to-end fiber network rollout.' },
  { title: 'Home Installations', desc: 'Last-mile professional connections.' },
  { title: 'Wireless Equipment', desc: 'Radios, antennas and access points.' },
  { title: 'Telecom Contracts', desc: 'Large-scale rollout and maintenance.' },
]

export default function Services() {
  return (
    <main className="pt-32">
      <Container>
        <MotionSection>
          <h2 className="text-4xl font-semibold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map(s => (
              <div key={s.title} className="bg-[#10273d] p-8 rounded-xl">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </MotionSection>
      </Container>
    </main>
  )
}

