import { useState } from 'react';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContent } from './Steps/FeedbackContent';
import { FeedbackSuccess } from './Steps/FeedbackSuccess';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'purple caterpillar representing bug',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'yellow lamp representing idea',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'clounds to represent thought',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] =
    useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccess
          onFeedbackSendAnother={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep
              setFeedbackType={setFeedbackType}
            />
          ) : (
            <FeedbackContent
              onBackButtonPress={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito utilizando as artes marciais secretas.{' '}
        <a
          className="underline underline-offset-2"
          href="https://github.com/anti-w"
        >
          @anti-w 🥷
        </a>
      </footer>
    </div>
  );
};
