import Container from '@/components/Container'
import MotionSection from '@/components/MotionSection'

export default function Compliance() {
  return (
    <main className="pt-32">
      <Container>
        <MotionSection>
          <h2 className="text-4xl font-semibold mb-6">Compliance & Safety</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Health & Safety Standards</li>
            <li>Telecom Regulatory Compliance</li>
            <li>Structured Deployment Methodology</li>
            <li>Documented QA & Testing</li>
          </ul>
        </MotionSection>
      </Container>
    </main>
  )
}

