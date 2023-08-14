import {axios} from './axiosInstance';

type MCQOption = {
  id: string;
  answer: string;
};

type ContentUser = {
  name: string;
  avatar: string;
};

export type MultipleChoiceQuestion = {
  type: 'mcq';
  id: number;
  playlist: string;
  description: string;
  question: string;
  image: string;
  options: MCQOption[];
  user: ContentUser;
};

export const fetchForYouFeedService = async () => {
  try {
    const response = await axios.get('/for_you');
    return response.data;
  } catch (e) {
    return;
  }
};
