export interface Contact {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  photoUrl: string;
  role: string;
  type: 'prospect' | 'customer' | 'partner' | 'vendor';
}

export interface Lead {
  id: string;
  name: string;
  industry: string;
  email: string;
  phone: string;
  source: string;
  salesRep: string;
  lifecycleStage: 'unqualified' | 'qualified' | 'opportunity' | 'client';
  score: number;
  createdAt: Date;
}

export interface DashboardStats {
  unqualifiedLeads: number;
  qualifiedLeads: number;
  opportunities: number;
  clients: number;
}

export interface OpportunityStages {
  discovery: number;
  proposal: number;
  negotiation: number;
  closed: number;
}
