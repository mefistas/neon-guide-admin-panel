
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { 
  MessageSquare, 
  Users, 
  Shield, 
  Lock, 
  Clock,
  ChevronRight
} from 'lucide-react';

const InternalChats = () => {
  const { tLocal } = useTranslations();
  
  return (
    <TutorialPage title={tLocal('internalChatsTitle')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        {/* Menu path section */}
        <div className="bg-gray-900/40 rounded-lg p-6 border border-gray-700 mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <span>ADDITIONAL</span>
            <ChevronRight size={16} />
            <span>INNER COMMUNICATION</span>
            <ChevronRight size={16} />
            <span className="text-gray-200">{tLocal('internalChatsMenuPath')}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-4">{tLocal('internalChatsAddBranch')}</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 p-4 bg-gray-800/60 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <MessageSquare size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Inner Chat</h4>
                    <p className="text-sm text-gray-400">Private discussions with team members</p>
                  </div>
                </div>
                
                <div className="flex gap-3 p-4 bg-gray-800/60 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Users size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Broadcast Channel</h4>
                    <p className="text-sm text-gray-400">One-way communication to team</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg">{tLocal('internalChatsDescription')}</p>
              
              <div className="mt-4 p-4 border border-gray-700 rounded-lg">
                <button className="w-full py-2 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors">
                  {tLocal('internalChatsInviteButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Owner capabilities section */}
        <div className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-4 flex items-center">
            <Shield className="mr-2 text-amber-500" size={20} />
            {tLocal('internalChatsOwnerCapabilities')}
          </h3>
          
          <p className="mb-6">{tLocal('internalChatsDescription2')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="p-3 bg-gray-800/60 rounded-lg">
                <h4 className="text-lg font-medium">{tLocal('internalChatsChannelOption')}</h4>
                <p className="text-sm text-gray-400">{tLocal('internalChatsGroupOption')}</p>
              </div>
              
              <div className="p-3 bg-gray-800/60 rounded-lg">
                <h4 className="text-lg font-medium">{tLocal('internalChatsEncryption')}</h4>
                <p className="text-sm text-gray-400">{tLocal('internalChatsEncryptionDetails')}</p>
                <p className="text-sm text-gray-400 mt-1">{tLocal('internalChatsServerStorage')}</p>
              </div>
              
              <div className="p-3 bg-gray-800/60 rounded-lg">
                <h4 className="text-lg font-medium">{tLocal('internalChatsPasswordSharing')}</h4>
              </div>
              
              <div className="p-3 bg-gray-800/60 rounded-lg">
                <h4 className="text-lg font-medium flex items-center">
                  <Clock size={16} className="mr-2 text-blue-400" />
                  {tLocal('internalChatsAutoDeletion')}
                </h4>
              </div>
            </div>
            
            <div>
              <img 
                src="https://i.ibb.co/NTYbvQ6/Screenshot-2025-05-18-at-2-51-15-PM.png" 
                alt="Internal chat interface" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default InternalChats;
