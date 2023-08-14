import {axios} from './axiosInstance';

type ContentUser = {
  avatar: string;
  name: string;
};

export type FlashCard = {
  description: string;
  flashcard_back: string;
  flashcard_front: string;
  id: number;
  playlist: string;
  type: 'flashcard';
  user: ContentUser;
};

export const fetchFollowingFeedContent = async () => {
  try {
    const response = await axios.get('/following');
    return response.data;
  } catch (e) {
    return;
  }
};
