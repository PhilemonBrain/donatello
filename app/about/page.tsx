import Container from '@/components/Container'
import MotionSection from '@/components/MotionSection'

export default function About() {
  return (
    <main className="pt-32">
      <Container>
        <MotionSection>
          <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
          <p className="max-w-2xl text-slate-300">
            We are an engineering-led telecommunications infrastructure company delivering compliant, scalable, and future-proof networks.
          </p>
        </MotionSection>
      </Container>
    </main>
  )
}

