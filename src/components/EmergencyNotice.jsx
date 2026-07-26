import React from 'react';
import { AlertTriangle, PhoneCall } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const EmergencyNotice = () => {
  return (
    <div id="emergency-notice" className="bg-rose-50/90 border border-roseborder rounded-2xl p-5 md:p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-medicalred text-white flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="font-heading font-bold text-medicalred-dark text-base flex items-center gap-2">
            Urgent Medical Notice
          </h4>
          <p className="text-xs md:text-sm text-bodytext leading-relaxed font-normal">
            {clinicData.emergencyWarning}
          </p>
          <p className="text-xs font-semibold text-medicalred pt-1 flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5" />
            For routine consultation booking, call clinic directly at {clinicData.phone}.
          </p>
        </div>
      </div>
    </div>
  );
};
