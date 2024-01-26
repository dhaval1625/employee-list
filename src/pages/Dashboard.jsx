import React from 'react';
import BlobImage from '../assets/images/home-blob.png';
import DashboardContent from '../components/layouts/DashboardContent';
import DashboardFooter from '../components/layouts/DashboardFooter';
import AppLayout from '../components/ui/AppLayout';

function Dashboard() {
   return (
      <AppLayout className="!pb-8">
         <div className="fixed bottom-0 left-0 max-w-[200px] md:max-w-[370px] translate-y-[25%]">
            <img
               src={BlobImage}
               alt="blob"
               className="max-w-full"
            />
         </div>
         <DashboardContent />
         <DashboardFooter />
      </AppLayout>
   );
}

export default Dashboard;
