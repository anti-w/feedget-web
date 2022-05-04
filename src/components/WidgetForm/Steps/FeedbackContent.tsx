import { FormEvent, useState } from 'react';

import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';
import { ArrowLeft } from 'phosphor-react';

interface FeedbackContentProps {
  feedbackType: FeedbackType;
  onBackButtonPress: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContent = ({
  feedbackType,
  onBackButtonPress,
  onFeedbackSent,
}: FeedbackContentProps) => {
  const [screenshot, setScreenshot] = useState<
    string | null
  >(null);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({
      comment,
      screenshot,
    });

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <CloseButton />
        <button
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          type="button"
          onClick={onBackButtonPress}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
      </header>

      <form
        onSubmit={handleSubmitFeedback}
        className="my-4 max-w-full"
      >
        <textarea
          className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte os detalhes do que está acontecendo..."
          onChange={(evt) => setComment(evt.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />

          <button
            disabled={comment.length === 0}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
