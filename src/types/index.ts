export type Tab = 'dashboard' | 'employees' | 'documents';

export interface Doc {
  id: string;
  title: string;
  status: 'pending' | 'signed' | 'draft';
  date: string;
  author: string;
}