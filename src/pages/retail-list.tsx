import { useState } from "react";

type PropsType = {
  data: any;
  size: {
    width: number;
    height: number;
  };
};

const RetailList = ({ data, size }: PropsType) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <img
        src={data.imgs.main}
        className={`absolute bottom-0 left-0 max-w-[350px] pointer-events-none  ${
          show ? "opacity-100" : "opacity-0"
        } duration-1000 z-40`}
        style={{
          top: Math.random() * (size.height - 350),
          left: Math.random() * (size.width - 250),
        }}
      />

      <article
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="font-ApercuMonoProRegular  p-3 w-fit h-fit"
      >
        <h4 className="text-[16px] mb-[30px] capitalize">{data.category}</h4>
        <h3 className="text-[32px] leading-[40px] capitalize">{data.title}</h3>
      </article>
    </>
  );
};

export default RetailList;
