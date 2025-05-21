import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Users, Leaf, Mic, BookOpen } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center space-x-3 pb-2">
      <Icon className="h-8 w-8 text-primary" />
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground">
      {children}
    </CardContent>
  </Card>
);

const AttachmentAlchemyPage: React.FC = () => {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Attachment Alchemy</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your 4-Month Journey to Embodied Secure Attachment and Thriving Community.
          </p>
        </div>
         <img 
            src="/lovable-uploads/f2df2a74-c830-48c4-98ed-231ca12cc3a2.png"
            alt="Attachment Alchemy program banner with forest background and facilitators Chloe and Spencer"
            className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-xl mb-12 object-cover"
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="relative rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Forest path bathed in sunlight"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for readability */}
          <Card className="relative z-20 bg-transparent border-none shadow-none text-card-foreground">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-white">Is This You?</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-200"> {/* Adjusted text color for better contrast */}
              <ul className="list-disc list-inside space-y-2 columns-1 md:columns-2">
                <li>Feeling unsafe in your body or relationships?</li>
                <li>Longing for nourishment and genuine connection (with self and others)?</li>
                <li>Struggling to navigate life's challenges with resilience?</li>
                <li>Yearning to live an "alive and full embodied" life?</li>
                <li>Seeking a "securely attached embodied community"?</li>
                <li>Wanting people who see your "goodness and your greatness"?</li>
                <li>Tired of surface-level fixes and ready for deep transformation?</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-secondary/30 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">The Transformation You Can Expect</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Feel Safe in Your Body", description: "Cultivate a profound sense of safety and trust within yourself, your primary home." },
            { title: "Nourished & Connected", description: "Build authentic, nourishing relationships with yourself and others, rooted in secure attachment." },
            { title: "Embodied Resilience", description: "Develop the capacity to navigate life's ups and downs with grace and inner strength." },
            { title: "Live an Alive & Full Life", description: "Unlock your vitality, joy, and authentic expression." },
            { title: "Thriving Community", description: "Become part of a supportive community dedicated to growth and connection." },
            { title: "Inner Wise Parent", description: "Develop a compassionate inner guide to support your journey." },
          ].map(item => (
            <Card key={item.title} className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{item.description}</CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">What is Attachment Alchemy?</h2>
        <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-4 text-center">
          <p>Attachment Alchemy is more than just a program; it's a <span className="font-semibold text-primary">four-month immersive journey</span> designed to guide you from attachment distress to <span className="font-semibold text-primary">embodied secure attachment</span>. </p>
          <p>Our vision is for you to feel <span className="font-semibold">safe, nourished, connected, resilient, and vibrantly alive</span>. We believe that healing happens in community, which is why this group program provides a vital space for shared growth, mutual support, and collective transformation.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">How the Program Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={Users} title="1-on-1 Coaching with Chloe">
            Two intensive 1.5-2 hour sessions to dive deep into your personal journey and integrate program material.
          </FeatureCard>
          <FeatureCard icon={BookOpen} title="Bi-weekly Classes">
            Gain skills, self-understanding, and practical tools for healing in relationships and daily life.
          </FeatureCard>
          <FeatureCard icon={Mic} title="Peer Counseling Pods">
            Bi-weekly (alternating with classes), participants become each other's counselors in small, supportive pods.
          </FeatureCard>
          <FeatureCard icon={CheckCircle} title="Recorded Meditations">
            Daily listening, including Ideal Parent Figure meditations, tailored to course parts to develop your "inner wise parent."
          </FeatureCard>
          <FeatureCard icon={Leaf} title="4-Day In-Person Nature Retreat">
            A cornerstone experience for deep connection with nature, self, and the community. (Details TBC)
          </FeatureCard>
          <FeatureCard icon={Users} title="Secure Attachment with Nature">
            Ongoing support and practices to foster a healing relationship with the natural world throughout the course.
          </FeatureCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">Meet Your Facilitators</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <img src="/lovable-uploads/9d76db4c-e415-4080-9e67-67cca0b43cd5.png" alt="Chloe Good, program facilitator" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <CardTitle className="text-2xl text-primary">Chloe Good</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Chloe brings her profound personal healing journey and extensive training in somatic therapies and attachment work to guide you with compassion, wisdom, and authenticity. She is dedicated to helping you find safety within and live a fully embodied life.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
               <img src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Spencer (Partner Facilitator)" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <CardTitle className="text-2xl text-primary">Spencer (Partner Facilitator)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Spencer (bio to be provided by Chloe) is a valued partner in Attachment Alchemy, bringing his unique skills and presence to support the group's journey. He is hired by Chloe and contributes significantly to the program experience.</p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-primary/10 rounded-lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Investment</h2>
          <p className="text-xl text-muted-foreground mb-6">
            This is a significant investment in your transformation. Full program cost and payment plan options will be detailed during your clarity call.
          </p>
          <Card className="p-6 mb-8 bg-card">
            <CardTitle className="text-2xl text-primary mb-2">Program Cost: [To Be Confirmed]</CardTitle>
            <CardDescription>Payment plans available.</CardDescription>
          </Card>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Ready to Transform Your Life?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If Attachment Alchemy resonates with you, the next step is to book a complimentary Clarity Call. This is an opportunity to connect, discuss your needs, and see if this program is the right fit for your journey.
          </p>
          <CallToActionButton href="#contact-cta" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Book Your Free Clarity Call
          </CallToActionButton>
          <p className="mt-4 text-sm text-muted-foreground">(This will link to Acuity Scheduling or an application form)</p>
        </div>
      </SectionWrapper>

      {/* FAQ Section - Placeholder */}
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground text-center">FAQ content will be added here soon.</p>
          {/* Example FAQ Item structure (can use Accordion component from shadcn/ui)
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this program right for me?</AccordionTrigger>
              <AccordionContent>
                Details about who this program is best suited for...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          */}
        </div>
      </SectionWrapper>
    </>
  );
};

export default AttachmentAlchemyPage;
