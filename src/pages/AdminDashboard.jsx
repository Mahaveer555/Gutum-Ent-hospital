import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useClinic } from '../context/ClinicContext';
import { toast } from 'sonner';
import {
  Lock,
  LogOut,
  Download,
  Search,
  Filter,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  User,
  Phone,
  Mail,
  Calendar,
  Save,
  MessageSquare,
  Building2,
  Stethoscope,
  RefreshCw,
  AlertTriangle,
} from 'lucide-react';
import api from '../services/api';

export const AdminDashboard = () => {
  const { admin, login, logout } = useAuth();
  const { clinicData, refreshSettings } = useClinic();

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  // Active tab state
  const [activeTab, setActiveTab] = useState('appointments'); // 'appointments' | 'messages' | 'settings'

  // Appointments state
  const [appointments, setAppointments] = useState([]);
  const [appointmentsLoading, setAppointmentsLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [concernFilter, setConcernFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteModalId, setDeleteModalId] = useState(null);

  // Messages state
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(false);

  // Settings form state
  const [settingsForm, setSettingsForm] = useState(clinicData);
  const [savingSettings, setSavingSettings] = useState(false);

  useEffect(() => {
    if (admin) {
      fetchAppointments();
      fetchMessages();
    }
  }, [admin, statusFilter, concernFilter]);

  useEffect(() => {
    setSettingsForm(clinicData);
  }, [clinicData]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    try {
      await login(loginEmail, loginPassword);
      toast.success('Admin login successful!');
    } catch (err) {
      toast.error(err.message || 'Invalid admin credentials');
    } finally {
      setLoggingIn(false);
    }
  };

  const fetchAppointments = async () => {
    setAppointmentsLoading(true);
    try {
      const res = await api.get('/appointments', {
        params: {
          status: statusFilter,
          concern: concernFilter,
          search: searchQuery,
        },
      });
      if (res.data && res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (err) {
      toast.error('Failed to load appointments');
    } finally {
      setAppointmentsLoading(false);
    }
  };

  const fetchMessages = async () => {
    setMessagesLoading(true);
    try {
      const res = await api.get('/contact');
      if (res.data && res.data.success) {
        setMessages(res.data.data);
      }
    } catch (err) {
      console.log('Failed to load contact messages');
    } finally {
      setMessagesLoading(false);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await api.patch(`/appointments/${id}/status`, { status: newStatus });
      if (res.data && res.data.success) {
        toast.success(`Status updated to ${newStatus}`);
        fetchAppointments();
      }
    } catch (err) {
      toast.error('Failed to update appointment status');
    }
  };

  const handleDeleteAppointment = async () => {
    if (!deleteModalId) return;
    try {
      const res = await api.delete(`/appointments/${deleteModalId}`);
      if (res.data && res.data.success) {
        toast.success('Appointment deleted');
        setDeleteModalId(null);
        fetchAppointments();
      }
    } catch (err) {
      toast.error('Failed to delete appointment');
    }
  };

  const handleMarkMessageRead = async (id, currentStatus) => {
    const newStatus = currentStatus === 'New' ? 'Read' : 'New';
    try {
      const res = await api.patch(`/contact/${id}/status`, { status: newStatus });
      if (res.data && res.data.success) {
        toast.success(`Message marked as ${newStatus}`);
        fetchMessages();
      }
    } catch (err) {
      toast.error('Failed to update message status');
    }
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      const res = await api.patch('/settings', settingsForm);
      if (res.data && res.data.success) {
        toast.success('Clinic settings & doctor profile updated live!');
        refreshSettings();
      }
    } catch (err) {
      toast.error('Failed to update settings');
    } finally {
      setSavingSettings(false);
    }
  };

  const handleExportCSV = async () => {
    try {
      const response = await api.get('/appointments/export/csv', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `gautam-ent-appointments-${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success('Appointments exported to CSV file!');
    } catch (err) {
      toast.error('Failed to export CSV');
    }
  };

  // If not logged in, render Admin Login Form
  if (!admin) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-soft">
        <div className="max-w-md w-full bg-white rounded-card p-8 shadow-2xl border border-slate-100 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-white border border-slate-200 p-1 flex items-center justify-center mx-auto shadow-md">
              <img src="/logo.png" alt="Gautam ENT Clinic" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl font-heading font-extrabold text-medical">Admin Gateway Login</h2>
            <p className="text-xs text-slate-500">
              Gautam ENT Clinic Portal • Kota Management
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-medical uppercase mb-1">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="admin@gautamentclinic.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full text-sm rounded-xl pl-9 pr-4 py-3 border border-slate-200 focus:border-teal focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-medical uppercase mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full text-sm rounded-xl pl-9 pr-4 py-3 border border-slate-200 focus:border-teal focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              className="w-full bg-teal hover:bg-teal-700 disabled:bg-slate-400 text-white font-bold text-sm py-3.5 rounded-xl shadow transition-all"
            >
              {loggingIn ? 'Authenticating...' : 'Sign In to Admin Portal'}
            </button>
          </form>

          <p className="text-[11px] text-center text-slate-400 border-t border-slate-100 pt-4">
            Restricted access. Authorized clinic staff only. Default seed credentials: admin@gautamentclinic.com / AdminPassword123!
          </p>
        </div>
      </div>
    );
  }

  // Admin Dashboard UI
  const totalCount = appointments.length;
  const pendingCount = appointments.filter((a) => a.status === 'Pending').length;
  const confirmedCount = appointments.filter((a) => a.status === 'Confirmed').length;
  const completedCount = appointments.filter((a) => a.status === 'Completed').length;
  const cancelledCount = appointments.filter((a) => a.status === 'Cancelled').length;

  return (
    <div className="min-h-screen bg-soft pb-16">
      {/* Header Bar */}
      <header className="bg-medical text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shadow flex-shrink-0">
              <img src="/logo.png" alt="Gautam ENT Clinic Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xs text-teal-100 font-bold uppercase tracking-wider">
                Management Portal
              </span>
              <h1 className="text-2xl font-heading font-extrabold text-white">
                Gautam ENT Clinic Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-200 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              User: <strong>{admin.name}</strong> ({admin.role})
            </span>
            <button
              onClick={logout}
              className="bg-coral hover:bg-coral/90 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'appointments'
                ? 'bg-teal text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4" /> Appointments ({totalCount})
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'messages'
                ? 'bg-teal text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="w-4 h-4" /> Enquiries ({messages.length})
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'bg-teal text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Building2 className="w-4 h-4" /> Settings &amp; Doctor Profile
          </button>
        </div>

        {/* TAB 1: APPOINTMENTS MANAGEMENT */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            
            {/* Stats Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase block">Total Requests</span>
                <span className="text-2xl font-heading font-extrabold text-medical">{totalCount}</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
                <span className="text-xs font-bold text-amber-800 uppercase block">Pending</span>
                <span className="text-2xl font-heading font-extrabold text-amber-900">{pendingCount}</span>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl shadow-sm border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 uppercase block">Confirmed</span>
                <span className="text-2xl font-heading font-extrabold text-emerald-900">{confirmedCount}</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-200">
                <span className="text-xs font-bold text-blue-800 uppercase block">Completed</span>
                <span className="text-2xl font-heading font-extrabold text-blue-900">{completedCount}</span>
              </div>
              <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-200 col-span-2 sm:col-span-1">
                <span className="text-xs font-bold text-red-800 uppercase block">Cancelled</span>
                <span className="text-2xl font-heading font-extrabold text-red-900">{cancelledCount}</span>
              </div>
            </div>

            {/* Filter & Export Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                
                {/* Search */}
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search name, phone, request ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && fetchAppointments()}
                    className="w-full text-xs rounded-xl pl-9 pr-3 py-2 border border-slate-200 focus:outline-none"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-xs font-semibold rounded-xl px-3 py-2 border border-slate-200 bg-white"
                >
                  <option value="All">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <button
                  onClick={fetchAppointments}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                  title="Refresh List"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* CSV Export Button */}
              <button
                onClick={handleExportCSV}
                className="bg-medical hover:bg-medical-dark text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow inline-flex items-center gap-1.5 transition-all"
              >
                <Download className="w-4 h-4" /> Export CSV
              </button>
            </div>

            {/* Table of Appointments */}
            <div className="bg-white rounded-card shadow-medical border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <th className="py-3 px-4">Request ID</th>
                      <th className="py-3 px-4">Patient Name</th>
                      <th className="py-3 px-4">Phone / Contact</th>
                      <th className="py-3 px-4">Concern</th>
                      <th className="py-3 px-4">Pref. Date &amp; Time</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {appointmentsLoading ? (
                      <tr>
                        <td colSpan="7" className="py-8 text-center text-slate-500">
                          Loading appointment records...
                        </td>
                      </tr>
                    ) : appointments.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="py-8 text-center text-slate-500">
                          No matching appointment requests found.
                        </td>
                      </tr>
                    ) : (
                      appointments.map((a) => (
                        <tr key={a._id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-teal">{a.requestId}</td>
                          <td className="py-3 px-4 font-semibold text-medical">
                            {a.patientName}
                            <span className="block text-[10px] text-slate-400 font-normal">
                              {a.patientType} • {a.age ? `${a.age} yrs` : 'Age N/A'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <a href={`tel:${a.phone}`} className="font-semibold text-slate-800 hover:text-teal">
                              {a.phone}
                            </a>
                            {a.email && <span className="block text-[10px] text-slate-400">{a.email}</span>}
                          </td>
                          <td className="py-3 px-4 font-medium text-slate-700">{a.concern}</td>
                          <td className="py-3 px-4">
                            <span className="font-semibold text-slate-800">{a.preferredDate}</span>
                            <span className="block text-[10px] text-slate-400">{a.preferredTime} • {a.visitType}</span>
                          </td>
                          <td className="py-3 px-4">
                            <select
                              value={a.status}
                              onChange={(e) => handleUpdateStatus(a._id, e.target.value)}
                              className={`text-xs font-bold rounded-lg px-2.5 py-1 border border-slate-200 cursor-pointer ${
                                a.status === 'Pending'
                                  ? 'bg-amber-100 text-amber-800'
                                  : a.status === 'Confirmed'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : a.status === 'Completed'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="Completed">Completed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => setDeleteModalId(a._id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                              title="Delete Appointment"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONTACT MESSAGES */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-card shadow-medical border border-slate-100 p-6 space-y-4">
            <h3 className="text-lg font-heading font-bold text-medical">Website Inquiry Logs</h3>
            
            <div className="space-y-3">
              {messages.length === 0 ? (
                <p className="text-xs text-slate-500">No contact messages received yet.</p>
              ) : (
                messages.map((m) => (
                  <div
                    key={m._id}
                    className={`p-4 rounded-xl border transition-all ${
                      m.status === 'New' ? 'bg-amber-50/50 border-amber-200' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-medical">{m.name}</span>
                        <span className="text-xs text-slate-500">({m.phone})</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            m.status === 'New' ? 'bg-amber-200 text-amber-900' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-slate-400">
                          {new Date(m.createdAt).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => handleMarkMessageRead(m._id, m.status)}
                          className="text-xs font-semibold text-teal hover:underline"
                        >
                          Mark as {m.status === 'New' ? 'Read' : 'New'}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-slate-800">Subject: {m.subject}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{m.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 3: DYNAMIC CLINIC SETTINGS & DOCTOR PROFILE EDITOR */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} className="bg-white rounded-card shadow-medical border border-slate-100 p-6 md:p-8 space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold text-medical">
                Dynamic Clinic &amp; Doctor Profile Settings
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Updates phone numbers, timings, address, and doctor details dynamically across the live website.
              </p>
            </div>

            {/* Section A: Clinic Basic Details */}
            <div className="space-y-4 border-b border-slate-100 pb-6">
              <h4 className="font-heading font-bold text-sm text-teal uppercase tracking-wider">
                Clinic Details &amp; Contact Info
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Clinic Name</label>
                  <input
                    type="text"
                    value={settingsForm.clinicName || ''}
                    onChange={(e) => setSettingsForm({ ...settingsForm, clinicName: e.target.value })}
                    className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Display Phone Number</label>
                  <input
                    type="text"
                    value={settingsForm.phone || ''}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number (e.g. 917014561171)</label>
                  <input
                    type="text"
                    value={settingsForm.whatsappNumber || ''}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                    className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Opening Hours / Availability Text</label>
                  <input
                    type="text"
                    value={settingsForm.openingHoursNotice || ''}
                    onChange={(e) => setSettingsForm({ ...settingsForm, openingHoursNotice: e.target.value })}
                    className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Clinic Address</label>
                <input
                  type="text"
                  value={settingsForm.address || ''}
                  onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                  className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                />
              </div>
            </div>

            {/* Section B: Doctor Profile Settings */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-sm text-teal uppercase tracking-wider">
                Doctor Profile Editor
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Doctor Full Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Leave empty for unverified fallback"
                    value={settingsForm.doctorProfile?.name || ''}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        doctorProfile: { ...settingsForm.doctorProfile, name: e.target.value },
                      })
                    }
                    className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Title / Designation</label>
                  <input
                    type="text"
                    value={settingsForm.doctorProfile?.title || ''}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        doctorProfile: { ...settingsForm.doctorProfile, title: e.target.value },
                      })
                    }
                    className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Qualification</label>
                  <input
                    type="text"
                    placeholder="e.g. MBBS, MS (ENT)"
                    value={settingsForm.doctorProfile?.qualification || ''}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        doctorProfile: { ...settingsForm.doctorProfile, qualification: e.target.value },
                      })
                    }
                    className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Registration Number</label>
                  <input
                    type="text"
                    placeholder="e.g. RMC-XXXXX"
                    value={settingsForm.doctorProfile?.registrationNumber || ''}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        doctorProfile: { ...settingsForm.doctorProfile, registrationNumber: e.target.value },
                      })
                    }
                    className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Professional Bio</label>
                <textarea
                  rows="3"
                  value={settingsForm.doctorProfile?.bio || ''}
                  onChange={(e) =>
                    setSettingsForm({
                      ...settingsForm,
                      doctorProfile: { ...settingsForm.doctorProfile, bio: e.target.value },
                    })
                  }
                  className="w-full text-xs rounded-xl p-3 border border-slate-200 focus:outline-none resize-none"
                ></textarea>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="submit"
                disabled={savingSettings}
                className="bg-teal hover:bg-teal-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow inline-flex items-center gap-2 transition-all"
              >
                <Save className="w-4 h-4" />
                <span>{savingSettings ? 'Saving Settings...' : 'Save Settings Live'}</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Confirmation Modal for Deleting Appointments */}
      {deleteModalId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-card p-6 max-w-sm w-full space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-medical">Confirm Deletion</h4>
            <p className="text-xs text-slate-600">
              Are you sure you want to delete this appointment request? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-center pt-2">
              <button
                onClick={() => setDeleteModalId(null)}
                className="bg-slate-100 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAppointment}
                className="bg-red-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow"
              >
                Delete Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
