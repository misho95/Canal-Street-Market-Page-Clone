type PropsType = {
  title: string;
};

const PageTitle = ({ title }: PropsType) => {
  return (
    <div className="-left-[6px] font-ApercuMonoProRegular text-[16px] opacity-35 text-[#000] uppercase select-none rotate-90 mb-[115px] w-fit h-fit after:content-['\21E3'] after:absolute after:top-1/2 after:-translate-y-1/2 after:-rotate-90 after:-right-[30px]">
      {title}
    </div>
  );
};

export default PageTitle;
