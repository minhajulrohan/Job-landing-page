
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { downloadAllJobsAsText } from "@/utils/downloadUtils";

const jobListings = [
  {
    title: "Delivery Driver (Seasonal) Full-Time",
    company: "Amazon Flex",
    location: "Phoenix City, AL",
    description: "Are you looking for a seasonal opportunity with flexible hours and competitive pay? Join Amazon Flex as a delivery driver and earn money delivering packages in your area. Perfect for those seeking extra income during peak seasons.",
    type: "Full-Time",
    salary: "$18-22/hour",
    applyUrl: "https://click2daff.com/click?o=3728&p=6184&s1=FB&s2=landingpage"
  },
  {
    title: "Plasma Center Nurse (RN) *Sign on Bonus",
    company: "Biolife Plasma Services",
    location: "Columbus, GA",
    description: "By clicking the Apply button, I understand that my employment with Biolife will be at-will and that I may be terminated at any time. We are seeking dedicated RN professionals to join our plasma center team.",
    type: "Full-Time",
    salary: "$28-35/hour",
    applyUrl: "https://click2daff.com/click?o=3938&p=6184&s1=FB&s2=Landing"
  },
  {
    title: "OTR CDL-A Driver - Reefer - No Touch",
    company: "Decker Truck Line",
    location: "Columbus, GA",
    description: "Company OTR Reefer Driver $1,100 - $1,300 Average Weekly Gross - Sign on bonus available! Join our team of professional drivers and enjoy excellent benefits, new equipment, and consistent miles.",
    type: "Full-Time",
    salary: "$1,100-$1,300/week",
    applyUrl: "https://click2daff.com/click?o=3730&p=6184&s1=Fb&s2=Marketing"
  },
  {
    title: "CDL-A Company Reefer Driver OTR",
    company: "Transport Solutions",
    location: "Atlanta, GA",
    description: "Seeking experienced CDL-A drivers for over-the-road refrigerated freight. Excellent pay, benefits, and equipment. Home time options available. Must have clean driving record and 2+ years experience.",
    type: "Full-Time",
    salary: "$0.60-0.65/mile",
    applyUrl: "https://www.gn3atrk.com/2Q4JRL2J/37K3CSKJ/?source_id=ruhan"
  }
];

const Index = () => {
  const handleDownloadAll = () => {
    downloadAllJobsAsText(jobListings);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Search */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Results Section */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Driver jobs</h2>
            <p className="text-gray-600">Found {jobListings.length} job opportunities</p>
          </div>
          <Button 
            onClick={handleDownloadAll}
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-50"
          >
            Download All Jobs
          </Button>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {jobListings.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description}
              type={job.type}
              salary={job.salary}
              applyUrl={job.applyUrl}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Load More Jobs
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
