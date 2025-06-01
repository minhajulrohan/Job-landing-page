
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
    applyUrl: "https://tinyurl.com/JobsHubUSA-AmazonJobs"
  },
  {
    title: "Higher Income Jobs PepsiCo Now Hiring *Sign-On Bonus*",
    company: "PepsiCo",
    location: "United States",
    description: "Join our team at PepsiCo and earn a competitive salary with a sign-on bonus. We are hiring dedicated RN professionals for our plasma center. Employment is at-will and may be terminated at any time.",
    type: "Full-Time / Part Time",
    salary: "$28–$35/hour",
    applyUrl: "https://tinyurl.com/HigherIncome-Jobs-Pepsi-Jobs"
  },
  {
    title: "Great Jobs – Coca-Cola Reefer Driver No Touch Freight",
    company: "Decker Truck Line",
    location: "Columbus, GA",
    description: "Now hiring OTR Reefer Drivers for Coca-Cola freight. Earn $1,100–$1,300 weekly gross. Enjoy sign-on bonus, no-touch freight, excellent benefits, new equipment, and consistent miles.",
    type: "Full-Time / Part Time",
    salary: "$1,100–$1,300/week",
    applyUrl: "https://tinyurl.com/Great-Jobs-CocaCola"
  },
  {
    title: "FedEx Delivery Driver – Full-Time with Weekly Pay",
    company: "FedEx Ground Contractor",
    location: "United States",
    description: "Now hiring for FedEx Work From Home positions. Full-time role with weekly pay, health benefits, and paid training. Must be 21+ with a valid driver’s license and clean record. No CDL required. Join our remote support team and help ensure fast, safe, and efficient service",
    salary: "$800–$1,200/week",
    applyUrl: "https://tinyurl.com/HigherIncomeJobs-FedEx-Jobs"
  },
  {
    title: "Earn with Prizestash Cash App – Simple Tasks, Get $800 Gift",
    company: "FedEx Ground Contractor",
    location: "United States",
    description: "Complete simple tasks through the Prizestash Cash App and receive a $100 gift from our company. No experience needed. Weekly earnings potential of $800 depending on task completion. Limited-time opportunity!",
    type: "Flexible/Remote",
    salary: "$800",
    applyUrl: "https://tinyurl.com/PrizestashDTR-Cashapp-1000"
  },
  {
    title: "Walmart Jobs Offer – Remote Task Work with Weekly Pay",
    company: "Expert JobMatch",
    location: "United States",
    description: "Looking for a flexible remote opportunity? Complete simple tasks online and earn up to $800 weekly. No prior experience required. Participants also receive a $100 gift through the Prizestash Cash App. Apply now—limited-time opportunity!",
    type: "Flexible/Remote",
    salary: "$800-$1.500week",
    applyUrl: "https://tinyurl.com/Expert-JobMatch-WalmartJobs"
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
