
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SearchBar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
        <div className="flex-1">
          <Input
            placeholder="All Job Search"
            className="h-12 text-lg bg-white border-0 shadow-sm"
          />
        </div>
        <div className="flex-1">
          <Input
            placeholder="Location (City, State)"
            className="h-12 text-lg bg-white border-0 shadow-sm"
          />
        </div>
        <Button className="h-12 px-8 bg-green-500 hover:bg-green-600 text-white font-semibold">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
        <Select>
          <SelectTrigger className="h-12 w-16 bg-white border-0 shadow-sm">
            <ChevronDown className="w-4 h-4" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Jobs</SelectItem>
            <SelectItem value="fulltime">Full Time</SelectItem>
            <SelectItem value="parttime">Part Time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar;
