import { Job, JobDetail } from './types';

/**
 * Format ISO date string to dd/mm/yyyy
 */
export const formatDeadline = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Format salary based on salary_type
 */
export const formatSalary = (job: Job | JobDetail): string => {
  if (job.salary_type === 'negotiable') {
    return 'Thỏa thuận';
  } else if (job.salary_type === 'fixed' && job.salary_min) {
    return `${job.salary_min.toLocaleString()} ${job.currency || 'VND'}`;
  } else if (job.salary_type === 'range' && job.salary_min && job.salary_max) {
    return `${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()} ${job.currency || 'VND'}`;
  }
  return 'Thỏa thuận';
};

/**
 * Map job_type to Vietnamese
 */
export const mapJobTypeToVietnamese = (jobType: string): string => {
  const mapping: Record<string, string> = {
    'full_time': 'Toàn thời gian',
    'part_time': 'Bán thời gian',
    'intern': 'Thực tập',
  };
  return mapping[jobType] || jobType;
};
