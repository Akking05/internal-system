import { useState } from 'react';
import { Layout } from './components/Layout';
import { DashboardView } from './views/Dashboard';
import { EmployeesView } from './views/Employees';
import { DocumentsView } from './views/Documents';
import type { Tab } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'dashboard' && <DashboardView />}
      {activeTab === 'employees' && <EmployeesView />}
      {activeTab === 'documents' && <DocumentsView />}
    </Layout>
  );
}

export default App;