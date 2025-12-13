import React, { useState, useMemo } from 'react';
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
import { useI18n } from '../../shared/hooks/useI18n';

function useJobListings() {
  const { t } = useI18n();
  return useMemo(
    () => [
      {
        id: 1,
        major: t('career_major_software'),
        position: t('career_job1_position'),
        description: t('career_job1_desc'),
      },
      {
        id: 2,
        major: t('career_major_data'),
        position: t('career_job2_position'),
        description: t('career_job2_desc'),
      },
      {
        id: 3,
        major: t('career_major_devops'),
        position: t('career_job3_position'),
        description: t('career_job3_desc'),
      },
      {
        id: 4,
        major: t('career_major_design'),
        position: t('career_job4_position'),
        description: t('career_job4_desc'),
      },
      {
        id: 5,
        major: t('career_major_data'),
        position: t('career_job5_position'),
        description: t('career_job5_desc'),
      },
      {
        id: 6,
        major: t('career_major_software'),
        position: t('career_job6_position'),
        description: t('career_job6_desc'),
      },
    ],
    [t]
  );
}


export default function Career({ headerHeightPx = 60 }: { headerHeightPx?: number }) {
  const { t } = useI18n();
  const jobListings = useJobListings();
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
          <div className="text-center mb-12 space-y-4 pt-16">
            <h1 className="text-[#53bedd]">{t('career_heading')}</h1>
            <p className="text-white/90 max-w-3xl mx-auto">
              {t('career_intro')}
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder={t('career_filter_position')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('career_all_positions')}</SelectItem>
                <SelectItem value="Senior">{t('career_senior_positions')}</SelectItem>
                <SelectItem value="Engineer">{t('career_engineering_roles')}</SelectItem>
                <SelectItem value="Developer">{t('career_developer_roles')}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder={t('career_filter_date')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('career_all_time')}</SelectItem>
                <SelectItem value="week">{t('career_this_week')}</SelectItem>
                <SelectItem value="month">{t('career_this_month')}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={fieldFilter} onValueChange={setFieldFilter}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder={t('career_filter_field')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('career_all_fields')}</SelectItem>
                <SelectItem value="Software Engineering">{t('career_major_software')}</SelectItem>
                <SelectItem value="Data Science">{t('career_major_data')}</SelectItem>
                <SelectItem value="DevOps">{t('career_major_devops')}</SelectItem>
                <SelectItem value="UI/UX Design">{t('career_major_design')}</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t('career_search_placeholder')}
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
                    <TableHead style={{ ...baseCellStyle, width: 64 }}>{t('career_table_no')}</TableHead>
                    <TableHead style={baseCellStyle}>{t('career_table_major')}</TableHead>
                    <TableHead style={baseCellStyle}>{t('career_table_position')}</TableHead>
                    <TableHead style={{ ...baseCellStyle, width: 128, textAlign: 'center' }}>
                      {t('career_table_find_out')}
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
                                {t('career_btn_less')} <ChevronUp className="w-4 h-4" />
                              </>
                            ) : (
                              <>
                                {t('career_btn_more')} <ChevronDown className="w-4 h-4" />
                              </>
                            )}
                          </Button>
                        </TableCell>
                      </TableRow>

                      {expandedRows.includes(job.id) && (
                        <TableRow>
                          <TableCell colSpan={4} style={{ backgroundColor: '#f9fafb', padding: 0 }}>
                            <div style={{ ...expandCellInnerStyle, padding: '16px 24px' }}>
                              <h4 style={{ color: '#111827', marginBottom: 8 }}>{t('career_job_description')}</h4>
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
                                {t('career_btn_apply')}
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
                {t('career_no_results')}
              </div>
            )}
          </div>

          {/* Pagination - Mock */}
          {/* <div className="flex justify-center gap-2 mt-8">
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
          </div> */}
        </div>
      </section>
    </div>
  );
}
