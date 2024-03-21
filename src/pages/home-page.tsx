import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);

    return () => {
      setShow(false);
    };
  }, []);

  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className={`w-full overflow-y-auto h-full ${
        show ? "opacity-100" : "opacity-0"
      } duration-300`}
    >
      <section className="pt-[250px] px-[60px] pb-[120px]">
        <p className="text-[75px] font-ApercuMonoProLight leading-[86px] w-full space-0 max-w-[1030px]">
          Canal Street Market is a carefully curated retail market, food hall &
          community space open year-round at 265 Canal Street.
          <Link
            to="/comunity"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg,#ffb400,#ffb400 1px,transparent 0,transparent 12px),repeating-linear-gradient(45deg,#ffb400,#ffb400 1px,transparent 0,transparent 12.2px)",
              backgroundPosition: "0 103%,2px 103%",
              backgroundSize: "17px 10px",
              backgroundRepeat: "repeat-x",
            }}
            className="animate-animateLink"
          >
            Support Small Business
          </Link>
          this weekend!
        </p>
      </section>
      <img
        src={
          "https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format"
        }
        className="w-full h-full object-cover"
      />
      <h1>A New Kind of Market</h1>
      <div>
        <div>
          <img
            src={
              "https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress,format"
            }
          />
          <p>
            Merging retail, food, art, and culture, Canal Street Market
            highlights top retail and design concepts, restaurants, and
            up-and-coming players in the downtown New York City community.
          </p>
        </div>
        <div>
          <img
            src={
              "https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format"
            }
          />
          <p>Retail Market Hours: Thursday – Sun: 11:00AM - 7:00PM</p>
        </div>
        <div>
          <img
            src={
              "https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format"
            }
          />
          <p>Food Hall Hours: Mon – Sun: 11:00AM - 8:00PM</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
