
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AskQuestion = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Question Submitted",
      description: "Your question has been submitted successfully. We'll respond shortly.",
      variant: "default",
    });
  };

  return (
    <TutorialPage title={t('askQuestion')}>
      <div className="space-y-6">
        <p>Have a question about the admin panel? Submit your query using the form below and our support team will respond as soon as possible.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <Input 
              id="name" 
              placeholder="Enter your name" 
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          
          <div>
            <label htmlFor="topic" className="block text-sm font-medium mb-1">
              Topic
            </label>
            <Input 
              id="topic" 
              placeholder="What's your question about?" 
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          
          <div>
            <label htmlFor="question" className="block text-sm font-medium mb-1">
              Your Question
            </label>
            <Textarea 
              id="question" 
              placeholder="Describe your question in detail..." 
              rows={5}
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          
          <div className="pt-2">
            <Button type="submit" className="w-full bg-neonBlue hover:bg-neonBlue/80 text-white">
              Submit Question
            </Button>
          </div>
        </form>
        
        <div className="pt-4">
          <p className="text-sm text-gray-400">You can also contact support directly via:</p>
          <ul className="text-sm text-gray-400 list-disc pl-5 mt-1">
            <li>Email: support@adminpanel.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Live Chat: Available 24/7 in the admin dashboard</li>
          </ul>
        </div>
      </div>
    </TutorialPage>
  );
};

export default AskQuestion;
