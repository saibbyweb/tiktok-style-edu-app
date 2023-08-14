import {
  RevealAnswerResponse,
  revealMCQAnswerService,
} from '@/api/revealMCQAnswerService';
import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';

export const useRevealMCQAnswer = (selectedOptionId: string) => {
  const {data: answer, refetch: fetchAnswer} = useQuery<RevealAnswerResponse>(
    ['revealMCQAnswer', selectedOptionId],
    () => revealMCQAnswerService({id: selectedOptionId}),
    {
      enabled: false,
    },
  );

  /* array of correct options id */
  const correctOptionIds = useMemo(
    () => answer?.correct_options.map(option => option.id),
    [answer],
  );

  return {correctOptionIds, fetchAnswer};
};
