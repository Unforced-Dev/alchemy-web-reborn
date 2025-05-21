
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Chloe Good</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey to healing can inform yours. I understand because I've walked a similar path.
          </p>
        </div>

        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center">My Story: The "Why"</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <div className="md:flex md:space-x-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" // Placeholder nature/journey image
                alt="Path through nature representing Chloe's journey"
                className="w-full md:w-1/3 h-auto rounded-lg shadow-md mb-6 md:mb-0 object-cover"
              />
              <div className="md:w-2/3">
                <p>
                  My path to becoming a somatic coach wasn't linear; it was forged in the fires of personal adversity. The catalyzing event was my father's suicide when I was 18. This profound loss sent me on a long search for healing, a search that initially led me through traditional therapy models that often felt "horrifying" and "pathologizing." I found more solace and understanding in friends than in many clinical settings.
                </p>
                <p className="mt-4">
                  Driven by a deep need for something more, I embarked on a journey of seeking – through travel, meditation, and eventually, somatic therapy. It was in meditation that "colors started changing," and I began to uncover layers of pain I hadn't known I carried. The true breakthrough came with somatic therapy. When a therapist asked, "Have you ever felt safe?" my answer was a stark, "No. Never felt safe." This was a pivotal moment.
                </p>
              </div>
            </div>
            <p>
              This realization, coupled with understanding Complex PTSD (C-PTSD), illuminated the power of somatic work. For me, "this is the gold" – the key to genuine, embodied healing that goes beyond talk. It's about feeling safe in your body, processing unfelt emotions, and connecting with an inner wisdom. This profound personal transformation ignited my passion to train in these modalities and guide others on their own paths to "embodied secure attachment" and aliveness.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-secondary/30">
          <CardHeader>
            <CardTitle className="text-3xl text-center">My Philosophy & Approach</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>My work is rooted in the belief that everyone has an innate capacity for healing and wholeness. I focus on:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Safety First:</strong> Creating a profoundly safe space is paramount for healing to occur.</li>
              <li><strong>Embodiment:</strong> True change happens when we connect with the wisdom of our bodies, not just our minds.</li>
              <li><strong>Secure Attachment:</strong> Helping you develop the felt sense of secure attachment within yourself and in your relationships.</li>
              <li><strong>Aliveness:</strong> Guiding you to reclaim your vitality, joy, and full expression of self.</li>
              <li><strong>Community:</strong> Recognizing the healing power of genuine, supportive connection.</li>
              <li><strong>Anti-Pathologizing Stance:</strong> Moving away from labels and focusing on your inherent strengths and resources.</li>
              <li><strong>Somatic Experience:</strong> Prioritizing felt experience and nervous system regulation over intellectual understanding alone.</li>
            </ul>
            <p className="mt-4">
              I believe in "getting into the source code," working at the level of the nervous system to create lasting shifts. It's about helping you feel the unfelt, nurture your inner "wise parent," and ultimately, to "live alive and full embodied."
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <CallToActionButton href="#contact-cta" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Ready to Start Your Journey? Book a Discovery Call
          </CallToActionButton>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutPage;
