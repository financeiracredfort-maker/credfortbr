import React, { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

interface CountdownTimerProps {
  endTime?: Date;
  onExpire?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  endTime,
  onExpire 
}) => {
  // Default to end of day if no endTime provided
  const getEndOfDay = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    return end;
  };

  const targetTime = endTime || getEndOfDay();

  const calculateTimeLeft = () => {
    const difference = targetTime.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Set urgent mode when less than 1 hour left
      setIsUrgent(newTimeLeft.hours === 0 && newTimeLeft.minutes < 60);
      
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
        onExpire?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, onExpire]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-md transition-all ${
      isUrgent 
        ? 'bg-destructive/20 border-destructive/40 animate-pulse' 
        : 'bg-primary/10 border-primary/30'
    }`}>
      <div className={`flex items-center gap-2 ${isUrgent ? 'text-destructive' : 'text-primary'}`}>
        {isUrgent ? <Zap className="w-5 h-5 animate-pulse" /> : <Clock className="w-5 h-5" />}
        <span className="text-xs font-bold uppercase tracking-widest">
          {isUrgent ? 'Últimas horas!' : 'Oferta expira em:'}
        </span>
      </div>
      
      <div className="flex items-center gap-1">
        <div className="flex flex-col items-center">
          <span className={`text-2xl font-black tabular-nums ${isUrgent ? 'text-destructive' : 'text-foreground'}`}>
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-[8px] uppercase tracking-widest text-muted-foreground">hrs</span>
        </div>
        <span className={`text-xl font-bold ${isUrgent ? 'text-destructive' : 'text-primary'} animate-pulse`}>:</span>
        <div className="flex flex-col items-center">
          <span className={`text-2xl font-black tabular-nums ${isUrgent ? 'text-destructive' : 'text-foreground'}`}>
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-[8px] uppercase tracking-widest text-muted-foreground">min</span>
        </div>
        <span className={`text-xl font-bold ${isUrgent ? 'text-destructive' : 'text-primary'} animate-pulse`}>:</span>
        <div className="flex flex-col items-center">
          <span className={`text-2xl font-black tabular-nums ${isUrgent ? 'text-destructive' : 'text-foreground'}`}>
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-[8px] uppercase tracking-widest text-muted-foreground">seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
