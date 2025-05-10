import { BackToTop } from '@/app/src';

const BackToTopExample = () => {
  return (
    <div className="w-full flex justify-center">
      <BackToTop
        className="relative bottom-0 right-0"
        smooth
      />
    </div>
  );
};

export default BackToTopExample;
