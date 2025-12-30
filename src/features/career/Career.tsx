import { useI18n } from '../../shared/hooks/useI18n';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Job, Filters, jobService, formatDeadline, formatSalary } from '../../services/Job';


export default function Career({ headerHeightPx = 60 }: { headerHeightPx?: number }) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  
  // Filter state
  const [filters, setFilters] = useState<Filters>({
    locations: [],
    jobTypes: [],
    positions: [],
    categories: []
  });
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle filter
  const toggleFilter = (filterType: keyof Filters, value: string) => {
    setFilters(prev => {
      const current = prev[filterType];
      const isSelected = current.includes(value);
      
      return {
        ...prev,
        [filterType]: isSelected 
          ? current.filter(item => item !== value)
          : [...current, value]
      };
    });
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter jobs based on selected filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesLocation = job.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation) return false;
      }
      
      // Location filter
      if (filters.locations.length > 0 && !filters.locations.some(loc => job.location.includes(loc))) {
        return false;
      }
      
      // Job type filter
      if (filters.jobTypes.length > 0) {
        const jobTypeMap: Record<string, string> = {
          'Full-time': 'full_time',
          'Part-time': 'part_time'
        };
        const matchesJobType = filters.jobTypes.some(type => jobTypeMap[type] === job.job_type);
        if (!matchesJobType) return false;
      }
      
      // Category filter (based on title or tags)
      if (filters.categories.length > 0) {
        const matchesCategory = filters.categories.some(cat => {
          const title = job.title.toLowerCase();
          if (cat === 'IT - software' && (title.includes('software') || title.includes('developer') || title.includes('backend') || title.includes('frontend'))) return true;
          if (cat === 'IT - Data' && (title.includes('data') || title.includes('analyst'))) return true;
          if (cat === 'IT - AI' && (title.includes('ai') || title.includes('machine learning') || title.includes('ml'))) return true;
          if (cat === 'Marketing / PR / Communication' && (title.includes('marketing') || title.includes('pr') || title.includes('communication'))) return true;
          if (cat === 'Accounting & finance' && (title.includes('accounting') || title.includes('finance'))) return true;
          return false;
        });
        if (!matchesCategory) return false;
      }
      
      return true;
    });
  }, [jobs, filters, searchQuery]);

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await jobService.getJobs(currentPage, pageLimit);
        setJobs(data.items);
        setTotal(data.total);
        setPageLimit(data.page_limit);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [currentPage, pageLimit]);

  return (
    <div className="pt-32 pb-20" style={{ marginTop: `-${headerHeightPx}px`, paddingTop: `${headerHeightPx + 80}px` }}>
      <section
        style={{
          position: 'relative',
          padding: '8rem 0 6rem',
          backgroundColor: '#0B1120',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)',
              backgroundSize: '14px 24px',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: '600px',
              height: '600px',
              background: 'rgba(56, 189, 248, 0.15)',
              filter: 'blur(100px)',
              borderRadius: '100%',
              opacity: 0.5,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-10%',
              left: '-5%',
              width: '500px',
              height: '500px',
              background: 'rgba(99, 102, 241, 0.15)',
              filter: 'blur(100px)',
              borderRadius: '100%',
              opacity: 0.4,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 space-y-4">
            {/* Label Badge */}
            <div style={{ 
              display: 'inline-block', 
              marginBottom: '1rem', 
              padding: '0.5rem 1rem', 
              borderRadius: '9999px', 
              backgroundColor: 'rgba(56, 189, 248, 0.1)', 
              border: '1px solid rgba(56, 189, 248, 0.2)', 
              backdropFilter: 'blur(4px)' 
            }}>
              <span style={{ 
                fontSize: '0.875rem', 
                fontWeight: 600, 
                letterSpacing: '0.05em', 
                color: '#7dd3fc', 
                textTransform: 'uppercase' 
              }}>
                Join Our Team
              </span>
            </div>
            
            <h1
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                background: 'linear-gradient(to bottom, #ffffff, #ffffff, #94a3b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('career_heading')}
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#94a3b8', fontWeight: 300, lineHeight: 1.6 }} className="max-w-3xl mx-auto">
              {t('career_intro')}
            </p>
            
            {/* Search Box */}
            <div style={{ 
              maxWidth: '600px', 
              margin: '2rem auto 0', 
              position: 'relative' 
            }}>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '9999px',
                padding: '0.75rem 1.5rem',
                boxShadow: '0 10px 40px rgba(56, 189, 248, 0.2)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(56, 189, 248, 0.3)';
                e.currentTarget.style.borderColor = '#53bedd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(56, 189, 248, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
              }}>
                <svg 
                  style={{ 
                    width: '1.25rem', 
                    height: '1.25rem', 
                    color: '#53bedd',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Tìm kiếm công việc theo tên hoặc địa điểm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '1rem',
                    color: '#111827',
                    backgroundColor: 'transparent',
                    padding: '0.25rem 0',
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      marginLeft: '0.5rem',
                      padding: '0.25rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#9ca3af',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#374151';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af';
                    }}
                  >
                    <svg 
                      style={{ width: '1.25rem', height: '1.25rem' }} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 lg:flex-row">
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg border border-cyan-400 p-6">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                  <svg className="h-5 w-5 text-cyan-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>Filters</span>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="rounded-xl border border-cyan-300 bg-cyan-50/40 px-4 py-6 space-y-6">
                    <div>
                      <div className="text-sm uppercase tracking-wide text-gray-700 mb-3"><b>Locations</b></div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.locations.includes('Hà Nội')}
                            onChange={() => toggleFilter('locations', 'Hà Nội')}
                          />
                          <span>Hà Nội</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.locations.includes('Hồ Chí Minh')}
                            onChange={() => toggleFilter('locations', 'Hồ Chí Minh')}
                          />
                          <span>Hồ Chí Minh</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.locations.includes('Đà Nẵng')}
                            onChange={() => toggleFilter('locations', 'Đà Nẵng')}
                          />
                          <span>Đà Nẵng</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-3"><b>Job types</b></div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.jobTypes.includes('Full-time')}
                            onChange={() => toggleFilter('jobTypes', 'Full-time')}
                          />
                          <span>Full-time</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.jobTypes.includes('Part-time')}
                            onChange={() => toggleFilter('jobTypes', 'Part-time')}
                          />
                          <span>Part-time</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-3"><b>Positions</b></div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.positions.includes('Senior / Junior / Fresher')}
                            onChange={() => toggleFilter('positions', 'Senior / Junior / Fresher')}
                          />
                          <span>Senior / Junior / Fresher</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.positions.includes('Intern')}
                            onChange={() => toggleFilter('positions', 'Intern')}
                          />
                          <span>Intern</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-3"><b>Job titles</b></div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.categories.includes('Marketing / PR / Communication')}
                            onChange={() => toggleFilter('categories', 'Marketing / PR / Communication')}
                          />
                          <span>Marketing / PR / Communication</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.categories.includes('Accounting & finance')}
                            onChange={() => toggleFilter('categories', 'Accounting & finance')}
                          />
                          <span>Accounting &amp; finance</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer" 
                            style={{ accentColor: '#06b6d4' }}
                            checked={filters.categories.includes('IT - software')}
                            onChange={() => toggleFilter('categories', 'IT - software')}
                          />
                          <span>IT - software</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer text-cyan-500 accent-cyan-500"
                            checked={filters.categories.includes('IT - Data')}
                            onChange={() => toggleFilter('categories', 'IT - Data')}
                          />
                          <span>IT - Data</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-cyan-400 cursor-pointer text-cyan-500 accent-cyan-500"
                            checked={filters.categories.includes('IT - AI')}
                            onChange={() => toggleFilter('categories', 'IT - AI')}
                          />
                          <span>IT - AI</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div style={{ flex: 1 }}>
              {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                  Đang tải công việc...
                </div>
              ) : filteredJobs.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                  Không có công việc nào phù hợp
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '1rem',
                      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                      border: '1px solid #e5e7eb',
                      padding: '1.5rem',
                      transition: 'box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '1.5rem', fontWeight: 700 }}>{job.title}</h3>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4b5563' }}>
                            <svg style={{ height: '1.25rem', width: '1.25rem', color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            <span style={{ color: '#53bedd', fontWeight: 500 }}>{formatSalary(job)}</span>
                          </div>
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4b5563' }}>
                            <svg style={{ height: '1.25rem', width: '1.25rem', color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{job.location}</span>
                          </div>
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4b5563' }}>
                            <svg style={{ height: '1.25rem', width: '1.25rem', color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Hạn nộp hồ sơ: {formatDeadline(job.deadline)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => navigate(`/career/${job.id}`)}
                        style={{
                          padding: '1rem 2rem',
                          backgroundColor: '#53bedd',
                          color: 'white',
                          borderRadius: '9999px',
                          fontWeight: 700,
                          fontSize: '1rem',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 4px 14px 0 rgba(90, 238, 238, 0.39)',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(90, 238, 238, 0.39)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(90, 238, 238, 0.39)';
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination Info */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginTop: '2rem',
                color: '#6b7280',
                fontSize: '0.875rem'
              }}>
                <div>Tổng số {filteredJobs.length} công việc</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span>
                    Hiển thị {filteredJobs.length > 0 ? 1 : 0} đến {filteredJobs.length} kết quả
                  </span>
                </div>
              </div>
              </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
