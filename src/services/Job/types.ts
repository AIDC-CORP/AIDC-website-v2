export interface Job {
  id: string;
  title: string;
  location: string;
  salary_type: 'fixed' | 'negotiable' | 'range';
  salary_min?: number;
  salary_max?: number;
  currency?: string;
  deadline: string;
  job_type?: string;
  tags?: string[];
}

export interface JobDetail {
  id: string;
  title: string;
  job_type: string;
  location: string;
  working_address: string;
  salary_type: 'fixed' | 'negotiable' | 'range';
  salary_min?: number;
  salary_max?: number;
  currency?: string;
  quantity: number;
  deadline: string;
  job_description: string[];
  requirements: string;
  benefits: string;
  work_environment: string[];
  working_time: any;
  contact: any;
  status: string;
  tags: string[];
}

export interface JobsResponse {
  items: Job[];
  total: number;
  page: number;
  page_limit: number;
}

export interface Filters {
  locations: string[];
  jobTypes: string[];
  positions: string[];
  categories: string[];
}
