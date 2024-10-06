import { MessageProps } from "..";

const Message = ({
  text, type='error'
}: MessageProps) => {
  return (
    <p className={`text-left text-xs leading-4 font-medium text-${type === 'error' ? 'rose-600' : 'stone-500'}`}>{text}</p>
  );
};

export default Message;
