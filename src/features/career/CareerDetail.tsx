import { useI18n } from '../../shared/hooks/useI18n';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { JobDetail, jobService, formatDeadline, formatSalary, mapJobTypeToVietnamese } from '../../services/Job';


export default function CareerDetail({ headerHeightPx = 60 }: { headerHeightPx?: number }) {
  const { t } = useI18n();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch job detail from API
  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        setLoading(true);
        const data = await jobService.getJobById(id!);
        setJob(data);
      } catch (error) {
        console.error('Error fetching job detail:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJobDetail();
    }
  }, [id]);

  return (
    <div className="pt-32 pb-20" style={{ marginTop: `-${headerHeightPx}px`, paddingTop: `${headerHeightPx + 80}px` }}>
      {/* Hero Section - Copy từ Career.tsx */}
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
            <h1
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                color: 'white',
              }}
            >
              {loading ? 'Đang tải...' : job?.title || 'Chi tiết công việc'}
            </h1>
            
            {!loading && job && (
              <>
                <div style={{ 
                  fontSize: '1.25rem', 
                  color: 'white', 
                  fontWeight: 400, 
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <span>{formatSalary(job)}</span>
                  <span style={{ fontSize: '0.5rem' }}>●</span>
                  <span>{job.location}</span>
                  <span style={{ fontSize: '0.5rem' }}>●</span>
                  <span>{mapJobTypeToVietnamese(job.job_type)}</span>
                </div>
                
                <button
                  style={{
                    padding: '1rem 3rem',
                    backgroundColor: '#53bedd',
                    color: 'white',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px 0 rgba(90, 238, 238, 0.39)',
                    transition: 'all 0.2s',
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
                  Ứng tuyển ngay
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Job Detail Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
              Đang tải thông tin công việc...
            </div>
          ) : job ? (
            <div style={{ display: 'flex', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
              {/* Main Content - Left Side */}
              <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
                {/* Job Description */}
                {job.job_description && job.job_description.length > 0 && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Mô tả công việc</h3>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: 1.8, color: '#374151' }}>
                      {job.job_description.map((desc, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                {job.requirements && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Yêu cầu công việc</h3>
                    <div style={{ lineHeight: 1.8, whiteSpace: 'pre-wrap', color: '#374151' }}>{job.requirements}</div>
                  </div>
                )}

                {/* Benefits */}
                {job.benefits && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Quyền lợi</h3>
                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', textDecoration: 'underline' }}>
                        Chế độ lương, thưởng, thu nhập
                      </h4>
                    </div>
                    <div style={{ lineHeight: 1.8, whiteSpace: 'pre-wrap', color: '#374151' }}>{job.benefits}</div>
                  </div>
                )}

                {/* Work Environment */}
                {job.work_environment && job.work_environment.length > 0 && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Môi trường làm việc</h3>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: 1.8, color: '#374151' }}>
                      {job.work_environment.map((env, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>{env}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Working Time */}
                {job.working_time && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Thời gian làm việc:</h3>
                    <div style={{ lineHeight: 1.8, color: '#374151' }}>
                      {typeof job.working_time === 'string' ? job.working_time : 'Thứ 2 - Thứ 6, Nghỉ T7 - CN'}
                    </div>
                  </div>
                )}

                {/* Contact Information */}
                {job.contact && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Thông tin liên hệ</h3>
                    <div style={{ lineHeight: 2, color: '#374151' }}>
                      {job.contact.name && (
                        <div>
                          <strong>Người liên hệ:</strong> {job.contact.name}
                        </div>
                      )}
                      {job.contact.phone && (
                        <div>
                          <strong>Số điện thoại:</strong> {job.contact.phone}
                        </div>
                      )}
                      {job.contact.email && (
                        <div>
                          <strong>Email:</strong> {job.contact.email}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Tags/Keywords */}
                {job.tags && job.tags.length > 0 && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Từ khóa:</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {job.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#f3f4f6',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            color: '#374151',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Apply Button */}
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                  <button
                    style={{
                      padding: '1rem 3rem',
                      backgroundColor: '#53bedd',
                      color: 'white',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px 0 rgba(90, 238, 238, 0.39)',
                      transition: 'all 0.2s',
                      width: '100%',
                      maxWidth: '300px',
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
                    Ứng tuyển ngay
                  </button>
                </div>
              </div>

              {/* Sidebar - Right Side */}
              <div style={{ width: '350px', flexShrink: 0 }}>
                <div style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '1rem', 
                  padding: '1.5rem', 
                  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                  border: '1px solid #e5e7eb',
                  position: 'sticky',
                  top: '100px'
                }}>
                  {/* Thu nhập */}
                  <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <svg style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', flexShrink: 0, marginTop: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Thu nhập</div>
                      <div style={{ fontWeight: 600, color: '#111827' }}>{formatSalary(job)}</div>
                    </div>
                  </div>

                  {/* Số lượng */}
                  <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <svg style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', flexShrink: 0, marginTop: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Số lượng</div>
                      <div style={{ fontWeight: 600, color: '#111827' }}>{job.quantity}</div>
                    </div>
                  </div>

                  {/* Địa điểm làm việc */}
                  <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <svg style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', flexShrink: 0, marginTop: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Địa điểm làm việc</div>
                      <div style={{ fontWeight: 600, color: '#111827', lineHeight: 1.5 }}>{job.working_address || job.location}</div>
                    </div>
                  </div>

                  {/* Hạn nộp hồ sơ */}
                  <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <svg style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af', flexShrink: 0, marginTop: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Hạn nộp hồ sơ</div>
                      <div style={{ fontWeight: 600, color: '#111827' }}>{formatDeadline(job.deadline)}</div>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem', textAlign: 'center' }}>
                      Chia sẻ công việc này với bạn bè
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
                        <svg style={{ width: '2rem', height: '2rem' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href={`mailto:?subject=${encodeURIComponent(job.title)}&body=${encodeURIComponent(window.location.href)}`} style={{ color: '#EA4335' }}>
                        <svg style={{ width: '2rem', height: '2rem' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                        </svg>
                      </a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
                        <svg style={{ width: '2rem', height: '2rem' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(job.title)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000000' }}>
                        <svg style={{ width: '2rem', height: '2rem' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
              Không tìm thấy thông tin công việc
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
