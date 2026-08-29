import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_CLINIC_DATA, getWhatsAppLink } from '../config/clinicData';
import api from '../services/api';

const ClinicContext = createContext();

export const ClinicProvider = ({ children }) => {
  const [clinicData, setClinicData] = useState(DEFAULT_CLINIC_DATA);
  const [loading, setLoading] = useState(false);

  const fetchSettings = async () => {
    try {
      const response = await api.get('/settings');
      if (response.data && response.data.success && response.data.data) {
        setClinicData((prev) => ({
          ...prev,
          ...response.data.data,
        }));
      }
    } catch (error) {
      console.log('[ClinicContext] Operating with verified local configuration fallback.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const updateSettingsLocal = (newSettings) => {
    setClinicData((prev) => ({
      ...prev,
      ...newSettings,
    }));
  };

  const getWhatsAppUrl = (customMessage) => {
    return getWhatsAppLink(clinicData.whatsappNumber || '917014561171', customMessage);
  };

  return (
    <ClinicContext.Provider
      value={{
        clinicData,
        loading,
        refreshSettings: fetchSettings,
        updateSettingsLocal,
        getWhatsAppUrl,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
