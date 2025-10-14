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

export default function Career({ headerHeightPx = 60 }: { headerHeightPx?: number }) {
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

  // Inline styles dùng chung cho ô và mô tả
  const baseCellStyle: React.CSSProperties = {
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    overflowWrap: 'anywhere',
    verticalAlign: 'top',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    tableLayout: 'fixed', // NGĂN dãn cột khi mở More
    borderCollapse: 'separate',
    borderSpacing: 0,
  };

  const tableWrapperStyle: React.CSSProperties = {
    overflowX: 'auto', // an toàn trên màn hẹp
    width: '100%',
  };

  const expandCellInnerStyle: React.CSSProperties = {
    maxWidth: '100%',
    overflow: 'hidden', // không cho nội dung đẩy rộng bảng
  };

  return (
    <div className="pt-32 pb-20" style={{ marginTop: `-${headerHeightPx}px`, paddingTop: `${headerHeightPx + 80}px` }}>
      {/* Section 1 - Header with Filters */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4">
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
            <div style={tableWrapperStyle}>
              {/* DÙNG style trực tiếp để đảm bảo hiệu lực */}
              <Table style={tableStyle}>
                <TableHeader>
                  <TableRow style={{ backgroundColor: '#f9fafb' }}>
                    <TableHead style={{ ...baseCellStyle, width: 64 }}>No.</TableHead>
                    <TableHead style={baseCellStyle}>Major</TableHead>
                    <TableHead style={baseCellStyle}>Position</TableHead>
                    <TableHead style={{ ...baseCellStyle, width: 128, textAlign: 'center' }}>
                      Find out
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredJobs.map((job) => (
                    <React.Fragment key={job.id}>
                      <TableRow>
                        <TableCell style={baseCellStyle}>{job.id}</TableCell>
                        <TableCell style={baseCellStyle}>{job.major}</TableCell>
                        <TableCell style={baseCellStyle}>{job.position}</TableCell>
                        <TableCell style={{ ...baseCellStyle, textAlign: 'center' }}>
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
                          <TableCell colSpan={4} style={{ backgroundColor: '#f9fafb', padding: 0 }}>
                            <div style={{ ...expandCellInnerStyle, padding: '16px 24px' }}>
                              <h4 style={{ color: '#111827', marginBottom: 8 }}>Job Description</h4>
                              <p
                                style={{
                                  color: '#374151',
                                  margin: 0,
                                  whiteSpace: 'normal',
                                  wordBreak: 'break-word',
                                  overflowWrap: 'anywhere',
                                  lineHeight: 1.6,
                                }}
                              >
                                {job.description}
                              </p>
                              <Button className="mt-4 bg-[#53bedd] hover:bg-[#53bedd]/90">
                                Apply Now
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>

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
