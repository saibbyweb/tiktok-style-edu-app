import {axios} from './axiosInstance';
type RevealAnswerQueryParams = {
  id: string;
};

type CorrectMCQOption = {
  answer: string;
  id: string;
};

export type RevealAnswerResponse = {
  correct_options: CorrectMCQOption[];
  id: number;
};

export const revealMCQAnswerService = async (
  queryParams: RevealAnswerQueryParams,
) => {
  const response = await axios.get('/reveal', {
    params: queryParams,
  });
  return response.data;
};
