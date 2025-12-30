import Container from '@/components/Container'
import MotionSection from '@/components/MotionSection'

export default function Contact() {
  return (
    <main className="pt-32">
      <Container>
        <MotionSection>
          <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
          <p className="text-slate-300 max-w-xl">
            Engage us for deployments, partnerships or long-term telecom contracts.
          </p>
        </MotionSection>
      </Container>
    </main>
  )
}

