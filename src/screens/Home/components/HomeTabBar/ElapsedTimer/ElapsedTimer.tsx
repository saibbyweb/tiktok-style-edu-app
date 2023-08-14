import {Row} from '@/components/Row';
import TimerIcon from '@/assets/icons/timer.svg';
import {Typography} from '@/components/Typography';
import {useEffect, useState} from 'react';
import {useAppState} from '@/hooks/useAppState';
import {Loading} from '@/components/Loading/Loading';

type ElapsedTimerProps = {
  writeDelay?: number;
};

function formatTimeElasped(seconds: number): string {
  if (seconds < 60) {
    return seconds + 's';
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return minutes + 'm';
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return hours + 'h ' + remainingMinutes + 'm';
}

export const ElapsedTimer: React.FC<ElapsedTimerProps> = ({writeDelay = 3}) => {
  const {elapsedTime, updateAppState, isLoadingPersistedState} = useAppState();
  const [elapsedTimeCounter, setElapsedTimeCounter] = useState(0);
  /* synchronize initial state */
  useEffect(() => {
    if (!isLoadingPersistedState && elapsedTimeCounter === 0) {
      setElapsedTimeCounter(elapsedTime);
    }
  }, [elapsedTime, elapsedTimeCounter, isLoadingPersistedState]);

  useEffect(() => {
    if (isLoadingPersistedState) {
      return;
    }
    const intervalId = setInterval(async () => {
      setElapsedTimeCounter(prevTime => {
        const newTime = prevTime + 1;
        if (newTime % writeDelay === 0) {
          updateAppState({elapsedTime: newTime});
        }
        return newTime;
      });
    }, 1000);

    /*  Clean up on unmount */
    return () => {
      clearInterval(intervalId);
    };
  }, [isLoadingPersistedState, updateAppState, writeDelay]);

  if (isLoadingPersistedState) {
    return <Loading size={30} />;
  }

  return (
    <Row horizontallyCentered opacity={0.6} gap={'4'} width={63}>
      <TimerIcon height={16} width={16} />
      <Typography
        color="white"
        typeface="SFProRounded400"
        fontSize={15}
        lineHeight={19.09}>
        {formatTimeElasped(elapsedTimeCounter)}
      </Typography>
    </Row>
  );
};
