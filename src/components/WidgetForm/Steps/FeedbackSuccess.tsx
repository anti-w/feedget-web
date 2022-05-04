import { CloseButton } from '../../CloseButton';

import successImageUrl from '../../../assets/success.svg';

interface FeedbackSuccessProps {
  onFeedbackSendAnother: () => void;
}

export const FeedbackSuccess = ({
  onFeedbackSendAnother,
}: FeedbackSuccessProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img
          src={successImageUrl}
          alt="Green icon with white v to represent success"
          className="w-10 h-10"
        />
        <span className="text-xl mt-2">
          Agradecemos o feedback!
        </span>
        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 transition-colors"
          onClick={onFeedbackSendAnother}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
