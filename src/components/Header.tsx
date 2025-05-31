
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-green-500">ALL</span>
              <span className="text-blue-500">JOB</span>
              <span className="text-blue-600">NOW</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
              Find Jobs
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
              Company Reviews
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
              Post Resume
            </a>
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              Sign In
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Post Jobs
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
