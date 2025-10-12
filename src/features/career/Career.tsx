import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const jobListings = [
  {
    id: 1,
    major: 'Software Engineering',
    position: 'Senior Full-Stack Developer',
    description:
      'We are looking for an experienced Full-Stack Developer with expertise in React, Node.js, and cloud technologies. You will be responsible for developing scalable web applications and collaborating with cross-functional teams to deliver high-quality solutions.',
  },
  {
    id: 2,
    major: 'Data Science',
    position: 'Machine Learning Engineer',
    description:
      'Join our AI team to develop cutting-edge machine learning models. You will work on computer vision, NLP, and predictive analytics projects that drive business value for our clients.',
  },
  {
    id: 3,
    major: 'DevOps',
    position: 'Cloud Infrastructure Engineer',
    description:
      'We need a DevOps engineer to manage our cloud infrastructure, implement CI/CD pipelines, and ensure system reliability. Experience with AWS, Docker, and Kubernetes is required.',
  },
  {
    id: 4,
    major: 'UI/UX Design',
    position: 'Senior Product Designer',
    description:
      'Create intuitive and beautiful user experiences for our enterprise solutions. You will work closely with product managers and engineers to design features that delight our users.',
  },
  {
    id: 5,
    major: 'Data Science',
    position: 'Data Analyst',
    description:
      'Analyze complex datasets to provide actionable insights for business decisions. You will work with stakeholders across the organization to understand their data needs and deliver meaningful analytics.',
  },
  {
    id: 6,
    major: 'Software Engineering',
    position: 'Mobile Developer (iOS/Android)',
    description:
      'Develop native mobile applications for iOS and Android platforms. You will be responsible for building features, fixing bugs, and ensuring optimal performance across devices.',
  },
];

export default function Career() {
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [fieldFilter, setFieldFilter] = useState('all');
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.major.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === 'all' || job.position.includes(positionFilter);
    const matchesField = fieldFilter === 'all' || job.major === fieldFilter;
    return matchesSearch && matchesPosition && matchesField;
  });

  return (
    <div className="pt-32 pb-20">
      {/* Section 1 - Header with Filters */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-[#53bedd]">GROW WITH US, SUCCEED WITH US</h1>
            <p className="text-white/90 max-w-3xl mx-auto">
              Explore career opportunities with us. Check out our open positions and apply to join
              our team!
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Filter by Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="Senior">Senior Positions</SelectItem>
                <SelectItem value="Engineer">Engineering Roles</SelectItem>
                <SelectItem value="Developer">Developer Roles</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Recently Posted" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>

            <Select value={fieldFilter} onValueChange={setFieldFilter}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Filter by Field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fields</SelectItem>
                <SelectItem value="Software Engineering">Software Engineering</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="DevOps">DevOps</SelectItem>
                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Job Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-16">No.</TableHead>
                  <TableHead>Major</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead className="w-32 text-center">Find out</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.map((job) => (
                  <>
                    <TableRow key={job.id} className="hover:bg-gray-50">
                      <TableCell>{job.id}</TableCell>
                      <TableCell>{job.major}</TableCell>
                      <TableCell>{job.position}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleRow(job.id)}
                          className="flex items-center gap-2"
                        >
                          {expandedRows.includes(job.id) ? (
                            <>
                              Less <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              More <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                    {expandedRows.includes(job.id) && (
                      <TableRow>
                        <TableCell colSpan={4} className="bg-gray-50 border-t border-gray-200">
                          <div className="py-4 px-6">
                            <h4 className="text-gray-900 mb-2">Job Description</h4>
                            <p className="text-gray-700">{job.description}</p>
                            <Button className="mt-4 bg-[#53bedd] hover:bg-[#53bedd]/90">
                              Apply Now
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No jobs found matching your criteria.
              </div>
            )}
          </div>

          {/* Pagination - Mock */}
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg ${
                  page === 1
                    ? 'bg-[#53bedd] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
