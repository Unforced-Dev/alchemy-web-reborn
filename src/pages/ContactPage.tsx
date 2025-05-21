import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Calendar } from 'lucide-react'; // Assuming Calendar for Acuity link

const ContactPage: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Let's Connect</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm here to support your journey. Reach out to learn more, book a call, or ask any questions you may have.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
              <Input type="text" id="name" name="name" placeholder="Your Name" required className="bg-input" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
              <Input type="email" id="email" name="email" placeholder="you@example.com" required className="bg-input" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
              <Input type="text" id="subject" name="subject" placeholder="Inquiry about..." required className="bg-input" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
              <Textarea id="message" name="message" rows={5} placeholder="Your message here..." required className="bg-input" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message
            </Button>
            <p className="text-xs text-muted-foreground text-center">Note: Form submission is currently a placeholder.</p>
          </form>
        </div>

        {/* Contact Info & Discovery Call */}
        <div className="space-y-8">
          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Direct Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:chloe@chloegood.com" className="text-muted-foreground hover:text-primary transition-colors">
                    chloe@chloegood.com <span className="text-xs">(Replace with actual email)</span>
                  </a>
                </div>
              </div>
              {/* Optional Phone */}
              {/*
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">(If Chloe wishes to list a phone number)</p>
                </div>
              </div>
              */}
            </div>
          </div>

          <div id="contact-cta" className="bg-primary/10 p-8 rounded-lg shadow-xl text-center">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-4">Book a Free Discovery Call</h2>
            <p className="text-muted-foreground mb-6">
              Ready to explore how we can work together? Schedule your complimentary call to discuss your needs and see if we're a good fit.
            </p>
            <CallToActionButton 
              href="https://calendly.com/chloe-good-example/discovery-call" // Replace with Chloe's actual Acuity/Calendly link
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Schedule Your Call
            </CallToActionButton>
            <p className="mt-2 text-sm text-muted-foreground">(Links to Acuity Scheduling)</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactPage;
