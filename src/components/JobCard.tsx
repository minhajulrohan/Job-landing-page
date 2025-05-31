
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, ExternalLink } from "lucide-react";
import { downloadJobAsText } from "@/utils/downloadUtils";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
  salary?: string;
  applyUrl?: string;
}

const JobCard = ({ title, company, location, description, type, salary, applyUrl }: JobCardProps) => {
  const handleDownload = () => {
    downloadJobAsText({ title, company, location, description, type, salary });
  };

  const handleApply = () => {
    if (applyUrl) {
      window.open(applyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
              {title}
            </h3>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{company}</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4 line-clamp-3">
          {description}
        </p>
        {salary && (
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-600">Salary: </span>
            <span className="text-lg font-semibold text-green-600">{salary}</span>
          </div>
        )}
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleApply}
            disabled={!applyUrl}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Salary & Apply
          </Button>
          {/* <Button 
            variant="outline" 
            onClick={handleDownload}
            className="border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            Download
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
