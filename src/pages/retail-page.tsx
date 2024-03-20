import { useEffect, useRef, useState } from "react";
import PageTitle from "../components/page.title";
import RetailList from "./retail-list";
import Rose from "../assets/rose.svg";

const RetailPage = () => {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);

    return () => {
      setShow(false);
    };
  }, []);

  const data = [
    {
      id: 1,
      category: "design objects",
      title: "american design club",
      description:
        "Started in 2008, The American Design Club is a platform for designers to show, share, and sell their work. With a mission to discover and bring to the public, new and exciting products by independent designers and brands, The American Design Club supports a community of creative entrepreneurs.",
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/35b63b73f8bf1c9b4317f83217deaf9b80aaa8b1_american-design-club-hero.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/95cb429b813b0cf1774d8552aeee83dc5b10eab1_retail-space-downtown-new-york-42.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5235f72ff6ba8ac42f7d958f9acd65d9a9bd5d8c_retail-space-downtown-new-york-61.png?auto=compress,format",
          },
        ],
      },
    },
    {
      id: 2,
      category: "jewelry",
      title: "beeshaus & raum NYC",
      description: `Beeshaus is a handmade contemporary art jewelry collection that conveys a sense of simplicity and uniqueness from  geometric shapes.
        Raum NYC curates simple but unique accessories to help individuals to develop its own style. Raum NYC finds inspiration in a minimalist lifestyle and aims to present artists who shares the same pursuit from all over the world.`,
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/9bfc4585bb8e64c7207d8694574bdb86f43320b4_e1ea768dc97f6880050e3f5bc8a68c21c5885336_new-york-retail-space-beeshaus-compressor.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/c3c131bb3d932426974fc70ba42c765f8b907f1f_selects-high-res--retail_77.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/3e5ad4665a8165d024c0c724bed59bd67f3ca6b7_retail-space-downtown-new-york-76.png?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5b279b37daef4bb8cf37ff8ed8818fd3eae5db59_retail-space-downtown-new-york-30.jpg?auto=compress,format",
          },
        ],
      },
    },
    {
      id: 3,
      category: "design objects",
      title: "american design club",
      description:
        "Started in 2008, The American Design Club is a platform for designers to show, share, and sell their work. With a mission to discover and bring to the public, new and exciting products by independent designers and brands, The American Design Club supports a community of creative entrepreneurs.",
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/35b63b73f8bf1c9b4317f83217deaf9b80aaa8b1_american-design-club-hero.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/95cb429b813b0cf1774d8552aeee83dc5b10eab1_retail-space-downtown-new-york-42.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5235f72ff6ba8ac42f7d958f9acd65d9a9bd5d8c_retail-space-downtown-new-york-61.png?auto=compress,format",
          },
        ],
      },
    },
    {
      id: 4,
      category: "jewelry",
      title: "beeshaus & raum NYC",
      description: `Beeshaus is a handmade contemporary art jewelry collection that conveys a sense of simplicity and uniqueness from  geometric shapes.
        Raum NYC curates simple but unique accessories to help individuals to develop its own style. Raum NYC finds inspiration in a minimalist lifestyle and aims to present artists who shares the same pursuit from all over the world.`,
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/9bfc4585bb8e64c7207d8694574bdb86f43320b4_e1ea768dc97f6880050e3f5bc8a68c21c5885336_new-york-retail-space-beeshaus-compressor.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/c3c131bb3d932426974fc70ba42c765f8b907f1f_selects-high-res--retail_77.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/3e5ad4665a8165d024c0c724bed59bd67f3ca6b7_retail-space-downtown-new-york-76.png?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5b279b37daef4bb8cf37ff8ed8818fd3eae5db59_retail-space-downtown-new-york-30.jpg?auto=compress,format",
          },
        ],
      },
    },
    {
      id: 5,
      category: "design objects",
      title: "american design club",
      description:
        "Started in 2008, The American Design Club is a platform for designers to show, share, and sell their work. With a mission to discover and bring to the public, new and exciting products by independent designers and brands, The American Design Club supports a community of creative entrepreneurs.",
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/35b63b73f8bf1c9b4317f83217deaf9b80aaa8b1_american-design-club-hero.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/95cb429b813b0cf1774d8552aeee83dc5b10eab1_retail-space-downtown-new-york-42.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5235f72ff6ba8ac42f7d958f9acd65d9a9bd5d8c_retail-space-downtown-new-york-61.png?auto=compress,format",
          },
        ],
      },
    },
    {
      id: 6,
      category: "jewelry",
      title: "beeshaus & raum NYC",
      description: `Beeshaus is a handmade contemporary art jewelry collection that conveys a sense of simplicity and uniqueness from  geometric shapes.
        Raum NYC curates simple but unique accessories to help individuals to develop its own style. Raum NYC finds inspiration in a minimalist lifestyle and aims to present artists who shares the same pursuit from all over the world.`,
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/9bfc4585bb8e64c7207d8694574bdb86f43320b4_e1ea768dc97f6880050e3f5bc8a68c21c5885336_new-york-retail-space-beeshaus-compressor.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/c3c131bb3d932426974fc70ba42c765f8b907f1f_selects-high-res--retail_77.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/3e5ad4665a8165d024c0c724bed59bd67f3ca6b7_retail-space-downtown-new-york-76.png?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5b279b37daef4bb8cf37ff8ed8818fd3eae5db59_retail-space-downtown-new-york-30.jpg?auto=compress,format",
          },
        ],
      },
    },
    {
      id: 7,
      category: "jewelry",
      title: "beeshaus & raum NYC",
      description: `Beeshaus is a handmade contemporary art jewelry collection that conveys a sense of simplicity and uniqueness from  geometric shapes.
        Raum NYC curates simple but unique accessories to help individuals to develop its own style. Raum NYC finds inspiration in a minimalist lifestyle and aims to present artists who shares the same pursuit from all over the world.`,
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/9bfc4585bb8e64c7207d8694574bdb86f43320b4_e1ea768dc97f6880050e3f5bc8a68c21c5885336_new-york-retail-space-beeshaus-compressor.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/c3c131bb3d932426974fc70ba42c765f8b907f1f_selects-high-res--retail_77.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/3e5ad4665a8165d024c0c724bed59bd67f3ca6b7_retail-space-downtown-new-york-76.png?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5b279b37daef4bb8cf37ff8ed8818fd3eae5db59_retail-space-downtown-new-york-30.jpg?auto=compress,format",
          },
        ],
      },
    },
    {
      id: 8,
      category: "design objects",
      title: "american design club",
      description:
        "Started in 2008, The American Design Club is a platform for designers to show, share, and sell their work. With a mission to discover and bring to the public, new and exciting products by independent designers and brands, The American Design Club supports a community of creative entrepreneurs.",
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/35b63b73f8bf1c9b4317f83217deaf9b80aaa8b1_american-design-club-hero.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/95cb429b813b0cf1774d8552aeee83dc5b10eab1_retail-space-downtown-new-york-42.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5235f72ff6ba8ac42f7d958f9acd65d9a9bd5d8c_retail-space-downtown-new-york-61.png?auto=compress,format",
          },
        ],
      },
    },
    {
      id: 9,
      category: "jewelry",
      title: "beeshaus & raum NYC",
      description: `Beeshaus is a handmade contemporary art jewelry collection that conveys a sense of simplicity and uniqueness from  geometric shapes.
        Raum NYC curates simple but unique accessories to help individuals to develop its own style. Raum NYC finds inspiration in a minimalist lifestyle and aims to present artists who shares the same pursuit from all over the world.`,
      imgs: {
        main: "https://images.prismic.io/canalstreetmarket/9bfc4585bb8e64c7207d8694574bdb86f43320b4_e1ea768dc97f6880050e3f5bc8a68c21c5885336_new-york-retail-space-beeshaus-compressor.jpg?auto=compress,format",
        other: [
          {
            url: "https://images.prismic.io/canalstreetmarket/c3c131bb3d932426974fc70ba42c765f8b907f1f_selects-high-res--retail_77.jpg?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/3e5ad4665a8165d024c0c724bed59bd67f3ca6b7_retail-space-downtown-new-york-76.png?auto=compress,format",
          },
          {
            url: "https://images.prismic.io/canalstreetmarket/5b279b37daef4bb8cf37ff8ed8818fd3eae5db59_retail-space-downtown-new-york-30.jpg?auto=compress,format",
          },
        ],
      },
    },
  ];

  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className={`w-full overflow-y-auto h-full ${
        show ? "opacity-100" : "opacity-0"
      } duration-300`}
    >
      <section className="pt-[250px] px-[60px] pb-[120px] flex flex-col gap-[50px]">
        <div className="flex justify-between">
          <PageTitle title={"retail"} />
          <div className="text-[14px] font-ApercuMonoProRegular leading-[21px] text-right">
            <h5>Retail Market Hours:</h5>
            <p>Thurs – Sun: 11:00AM - 7:00PM</p>
          </div>
        </div>
        <div className="flex justify-between pr-[35px]">
          <h1 className="text-[200px] leading-[190px] w-min font-ApercuMonoProRegular">
            The Retail Market
          </h1>
          <div className="w-fit h-fit relative">
            <h1 className="text-[60px] font-ApercuMonoProRegular absolute -top-[60px] -right-[80px]">
              購物
            </h1>
            <img
              className="object-cover max-w-[378px] pb-[115%]"
              src={
                "https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format"
              }
            />
          </div>
        </div>
        <div
          ref={containerRef}
          className="grid grid-cols-3 gap-[80px_60px] relative"
        >
          {data.map((d) => {
            return (
              <RetailList
                key={d.id}
                data={d}
                size={{
                  width: containerRef.current
                    ? containerRef.current.offsetWidth
                    : 0,
                  height: containerRef.current
                    ? containerRef.current.offsetHeight
                    : 0,
                }}
              />
            );
          })}
        </div>
        <div
          className="py-[110px] flex justify-between"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg,#000,#000 1px,transparent 0,transparent 68px),repeating-linear-gradient(45deg,#000,#000 1px,transparent 0,transparent 68px),repeating-linear-gradient(-45deg,#000,#000 1px,transparent 0,transparent 71px),repeating-linear-gradient(45deg,#000,#000 1px,transparent 0,transparent 70px)",
            backgroundPosition: "0 101%,0 101%,0 0,0 0",
            backgroundSize: "93px 50px,93px 50px,100px 50px,100px 50px",
            backgroundRepeat: "repeat-x",
          }}
        >
          <div>
            <img src={Rose} />
          </div>
          <div className="flex flex-col justify-center items-center font-ApercuMonoProMedium">
            <h1 className="text-[100px] leading-[100px] text-center capitalize mb-[30px]">
              the best of NYC
            </h1>
            <p>All under one roof</p>
          </div>
          <div>
            <img src={Rose} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailPage;
