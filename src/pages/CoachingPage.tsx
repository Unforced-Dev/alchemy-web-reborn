import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CoachingPage: React.FC = () => {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Somatic Coaching & Guidance</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Deep, personalized somatic healing to help you rewire your nervous system, feel safe in your body, and transform your life from the inside out.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-6 text-center">
            <p className="text-2xl font-semibold text-foreground">"My work is about getting into the source code, the mainframe of your psychology and nervous system."</p>
            <p>
              Traditional talk therapy often scratches the surface. Somatic coaching, as I practice it, delves deeper. We work with the body's wisdom to access and heal the root causes of distress, attachment wounds, and trauma. It's about feeling the unfelt, nurturing your inner "wise parent," and cultivating a profound sense of safety and aliveness within.
            </p>
            <p>
              Clients typically experience significant shifts within the first 3 months, though many choose to continue this transformative work longer-term, viewing me as a trusted life advisor.
            </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/30 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">My 1-on-1 Offerings</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Ongoing Somatic Attachment Repair Coaching</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>This is my core 1-on-1 offering. We meet regularly (weekly or 3x/month initially, tapering as you integrate) to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Gently process and release stored trauma and emotional blockages.</li>
                <li>Develop skills for nervous system regulation and resilience.</li>
                <li>Rewire attachment patterns towards security and connection.</li>
                <li>Cultivate self-compassion and a strong inner "wise parent."</li>
                <li>Integrate somatic awareness into your daily life.</li>
              </ul>
              <p>This journey is tailored to your unique needs and pace, creating a safe container for profound healing and growth.</p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Day-Longs in Nature</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>For a more immersive experience, I offer personalized day-long intensives set in the healing embrace of nature.</p>
              <p>These extended sessions allow for:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Deeper dives into specific themes or challenges.</li>
                <li>Extended somatic practices and nature-based therapies.</li>
                <li>Profound connection with the natural world as a co-regulator.</li>
                <li>Dedicated time for integration and reflection.</li>
              </ul>
              <p>Day-longs are powerful catalysts for breakthroughs and deep resourcing. (Details and availability discussed during a discovery call).</p>
            </CardContent>
          </Card>
        </div>
         <p className="text-center text-muted-foreground mt-8 text-sm">
            Chloe is currently not offering medicine journeys as part of her listed services.
          </p>
      </SectionWrapper>

      <SectionWrapper>
        <Card className="max-w-2xl mx-auto text-center shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl text-primary">What to Expect in a Session</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
                <p>Our sessions are a collaborative exploration. We start by checking in with your present experience – sensations, emotions, thoughts. </p>
                <p>Guided by your nervous system's cues, we may incorporate gentle movement, breathwork, focused awareness, or therapeutic dialogue to help you connect with and process what arises in a safe and supported way. </p>
                <p>The emphasis is always on your felt sense and building resources for self-regulation and inner safety. There's no pressure, only curiosity and compassion.</p>
            </CardContent>
        </Card>
      </SectionWrapper>

      <SectionWrapper className="bg-primary/10 rounded-lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Ready to Explore 1-on-1 Work?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you're feeling called to this deep, personalized work, I invite you to schedule a complimentary discovery call. We'll discuss your aspirations, answer your questions, and explore if we're a good fit to embark on this journey together.
          </p>
          <CallToActionButton
            href="https://calendly.com/chloe-good-example/discovery-call" // Replace
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Schedule Your Free Discovery Call
          </CallToActionButton>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CoachingPage;
