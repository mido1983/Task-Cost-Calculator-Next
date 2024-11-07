import Head from 'next/head';
import Layout from '../components/Layout';
import TaskTable from '../components/TaskTable';
import Summary from '../components/Summary';
import GlobalSettings from '../components/GlobalSettings';
import ClientForm from '../components/ClientForm';

export default function Home({ 
    tasks, 
    setTasks, 
    clientData, 
    setClientData, 
    globalSettings, 
    setGlobalSettings 
}) {
    return (
        <Layout>
            <Head>
                <title>Task Cost Calculator</title>
                <meta name="description" content="Task Cost Calculator for managing and summarizing project tasks." />
            </Head>
            <h1 className="text-center mb-4">Task Cost Calculator</h1>

            <div className="row">
                <div className="col-md-6 bg-light">
                    <ClientForm clientData={clientData} setClientData={setClientData} />
                </div>
                <div className="col-md-6 bg-light">
                    <GlobalSettings globalSettings={globalSettings} setGlobalSettings={setGlobalSettings} />
                </div>
            </div>

            <TaskTable tasks={tasks} setTasks={setTasks} globalSettings={globalSettings} />
            <Summary tasks={tasks} clientData={clientData} />
        </Layout>
    );
}
