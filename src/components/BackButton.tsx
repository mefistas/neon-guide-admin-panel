
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useTranslations from '@/hooks/useTranslations';

interface BackButtonProps {
  to: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, className }) => {
  const { tLocal } = useTranslations();
  
  return (
    <Button variant="outline" asChild className={`gap-2 ${className || ''}`}>
      <Link to={to}>
        <ArrowLeft size={16} /> {tLocal('back')}
      </Link>
    </Button>
  );
};

export default BackButton;
