
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useTranslations from '@/hooks/useTranslations';

interface BackButtonProps {
  to: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  const { tNew } = useTranslations();

  return (
    <Button variant="outline" asChild className="mb-6">
      <Link to={to} className="flex items-center gap-2">
        <ChevronLeft size={16} />
        {tNew('back')}
      </Link>
    </Button>
  );
};

export default BackButton;
