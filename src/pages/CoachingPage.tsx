
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, Heart, Sun } from 'lucide-react';

const CoachingPage: React.FC = () => {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-secondary/20 via-background to-primary/5">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Personalized Somatic Coaching</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Deep, individualized somatic healing to rewire your nervous system, "get into the source code," and transform your life from the inside out.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">What to Expect in 1-on-1 Work</h2>
          <p className="text-lg text-muted-foreground">
            My 1-on-1 somatic coaching is for those ready to dive deep. We work directly with your nervous system and embodied experience to:
          </p>
          <ul className="list-disc list-inside text-left mt-4 space-y-2 text-muted-foreground mx-auto max-w-xl">
            <li>Access and process unfelt emotions in a safe, held space.</li>
            <li>Reprogram limiting beliefs and patterns stored in your "mainframe."</li>
            <li>Cultivate a profound sense of safety and trust within your body.</li>
            <li>Develop your "inner wise parent" to navigate life with greater compassion and clarity.</li>
            <li>Experience significant shifts, often within 3 months, though many clients continue longer-term for ongoing support and guidance as a "life advisor."</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">My 1-on-1 Offerings</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg h-full flex flex-col">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-2xl text-primary">Somatic Attachment Repair Coaching</CardTitle>
              <CardDescription>Ongoing Transformative Support</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow">
              <p className="mb-4">
                This is an ongoing journey of deep healing and integration. We typically meet weekly or 3 times a month initially, gradually tapering as you embody new ways of being.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Process & Benefits:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Gentle yet profound exploration of attachment patterns.</li>
                <li>Nervous system regulation and co-regulation.</li>
                <li>Healing developmental trauma at its root.</li>
                <li>Building capacity for secure attachment in all relationships.</li>
                <li>Reclaiming your authentic self and inherent worth.</li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0 text-center">
               <CallToActionButton href="#contact-cta" className="w-full md:w-auto">
                Book a Discovery Call
              </CallToActionButton>
            </div>
          </Card>

          <Card className="shadow-lg h-full flex flex-col">
            <CardHeader className="text-center">
              <Sun className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-2xl text-primary">Day-Longs in Nature</CardTitle>
              <CardDescription>Immersive Healing Experiences</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow">
              <p className="mb-4">
                For a concentrated dose of healing and connection, I offer day-long immersive experiences in nature. These are powerful opportunities to deepen your somatic awareness and relationship with the natural world.
              </p>
              <h4 className="font-semibold text-foreground mb-2">What it Entails:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Guided somatic practices in a natural setting.</li>
                <li>Deepening your connection to the earth as a resource.</li>
                <li>Space for reflection, integration, and profound insight.</li>
                <li>Personalized attention and support throughout the day.</li>
                <li>(Chloe is currently leaning against listing medicine journeys publicly. If this changes, relevant information would be discussed privately.)</li>
              </ul>
            </CardContent>
             <div className="p-6 pt-0 text-center">
               <CallToActionButton href="#contact-cta" className="w-full md:w-auto">
                Inquire About Day-Longs
              </CallToActionButton>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* Testimonials Section - Placeholder */}
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">Words from Clients</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Example Testimonial Card */}
          <Card className="bg-card shadow">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground italic mb-4">"Working with Chloe has been life-changing. I finally feel safe in my own skin and my relationships have transformed."</p>
              <p className="text-right font-semibold text-primary">- Client Name</p>
            </CardContent>
          </Card>
          <p className="text-lg text-muted-foreground text-center">More testimonials specific to 1-on-1 work will be added here.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary/10 rounded-lg">
        <div id="contact-cta" className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            Ready for Deep, Personalized Healing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you're feeling called to this profound 1-on-1 work, I invite you to book a free Discovery Call. Let's explore how somatic coaching can support your unique journey to wholeness.
          </p>
          <CallToActionButton 
            href="https://calendly.com/chloe-good-example/discovery-call" // Replace with Chloe's actual Acuity/Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Book Your Free Discovery Call
          </CallToActionButton>
          <p className="mt-4 text-sm text-muted-foreground">(This will link to Chloe's Acuity Scheduling)</p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CoachingPage;
