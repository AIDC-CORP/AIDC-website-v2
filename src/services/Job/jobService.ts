import { jobApiClient } from './axios';
import { JOBS_ENDPOINT, JOB_DETAIL_ENDPOINT } from './constant';
import { JobsResponse, JobDetail } from './types';

export const jobService = {
  /**
   * Fetch danh sách jobs với pagination
   */
  getJobs: async (page: number, pageLimit: number): Promise<JobsResponse> => {
    try {
      const response = await jobApiClient.get<JobsResponse>(
        `${JOBS_ENDPOINT}?page=${page}&page_limit=${pageLimit}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }
  },

  /**
   * Fetch chi tiết job theo ID
   */
  getJobById: async (id: string): Promise<JobDetail> => {
    try {
      const response = await jobApiClient.get<JobDetail>(JOB_DETAIL_ENDPOINT(id));
      return response.data;
    } catch (error) {
      console.error('Error fetching job detail:', error);
      throw error;
    }
  },
};
