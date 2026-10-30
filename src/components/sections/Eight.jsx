import image from "../../assets/chap8.jpg";
import image2 from "../../assets/mobile/eight.png";
import BackgroundImage from "../common/BgPic";

const Eight = () => {
    const tagData=["AI LawTech Platforms", "Enterprise Digital Systems", "Alternative Education"]
    const socialProfiles = [
      ["Facebook", "https://www.facebook.com/prowebmatrix/"],
      ["Instagram", "https://www.instagram.com/prowebmatrix/"],
      ["X", "https://www.x.com/prowebmatrix/"],
      ["LinkedIn", "https://www.linkedin.com/company/prowebmatrixx/"],
      ["Threads", "https://www.threads.com/prowebmatrix/"],
      ["Pinterest", "https://in.pinterest.com/prowebmatrix/"],
      ["YouTube", "https://www.youtube.com/@prowebmatrix"],
      ["Crunchbase", "https://www.crunchbase.com/organization/prowebmatrix"],
    ];
  return (
    <div
      className="md:h-screen relative pb-12 md:pb-0 flex items-center h-full overflow-hidden md:overflow-visible "
      data-motion="float-bottom-right"
    >
           <div data-motion="fade" className="absolute inset-0 -z-10 opacity-10">
              <BackgroundImage source={image2} />
            </div>
            <div className="md:hidden absolute inset-0 -z-10 opacity-10 flex flex-col overflow-x-hidden">
              <div data-motion="fade" className="w-full ">
                <BackgroundImage source={image} />
              </div>
            </div>
      <div className="flex flex-col justify-around md:items-start md:h-2/3 h-full">
        <h3
          className="font-tag text-(--gold-primary) border rounded-xl border-(--gold-primary) w-fit p-1 px-2 bg-(--fground-highlighted)"
          style={{ fontSize: "var(--font-size-small)" }}
          data-motion="float-down"
        >
          ACT 8 // THE MISSION & THE FUTURE
        </h3>

        <div className="my-6">
          <div className="relative pl-3 mt-4 md:mt-0" data-motion="float-left">
            <div className="w-2 h-2 bg-(--gold-primary) absolute top-1.5 -left-0.5"></div>
            <h2
              style={{ fontSize: "var(--font-size-small)" }}
              className="text-(--font-color-s1)"
              data-motion="float-left"
            >
              THE MISSION HAS NEVER CHANGED 
            </h2>
          </div>
          <h2
            className="font-display font-semibold text-(--font-color) leading-12 md:leading-20 mt-12 md:mt-0"
            style={{ fontSize: "var(--font-size-big)" }}
            data-motion="float-right"
          >
            This isn't the
            <span className="text-(--font-color-s1)"> end.</span>
          </h2>
           <h2
            className="font-display font-semibold text-(--font-color) leading-12 md:leading-20"
            style={{ fontSize: "var(--font-size-big)" }}
            data-motion="float-right"
          >
            It is what was<span className="text-(--font-color-s2)"> proven.</span>
          </h2>
          <div
          className="w-full pl-3 border-l-2 border-(--gold-highlight) mt-12 md:mt-3"
          data-motion="float-right"
        >
          <h3
            style={{ fontSize: "var(--font-size-medium)" }}
            className="font-thin text-(--gold-primary) mt-8 md:mt-0"
          >
            “The goal was never simply to become wealthy. <br />
             <span className="ml-2"></span>The goal was to prove what is possible. ”
          </h3>
        </div>
          <p
            className="mt-8 md:mt-2 md:w-1/3 font-light text-gray-400"
            data-motion="float-left"
          >
            Empires don't wait for permission. They are built by those who refuse to wait their turn. 
            The ecosystem is actively expanding——the next decade is already being constructed.
          </p>
        </div>
        <ul className=" w-full flex gap-2 md:gap-6 flex-wrap items-center justify-left mt-8 md:mt-0 " data-motion="float-up">
            <span className="text-(--font-color)/70">Pillars:</span>
            <div className="flex gap-2">
            {tagData.map((item, index) => (
              <div
                key={index}
                className="font-tag mt-2 md:mt-0 flex gap-2 md:gap-5 items-center"
              >
                <li
                  className="p-1 px-2 border rounded-xl border-white/30 bg-(--fground) hover:bg-(--fground-highlighted) hover:text-(--gold-light) text-white hover:cursor-default"
                  style={{ fontSize: "var(--font-size-xsmall)" }}
                  data-motion="float-up"
                >
                  {item}
                </li>
                {index !== tagData.length - 1 && (
                  <div
                    className="w-2 aspect-square bg-(--gold-primary) rounded-full hidden md:block"
                    data-motion="float-up"
                  ></div>
                )}
              </div>
            ))}
            </div>
          </ul>
        <nav aria-label="Promatrix Technologies online profiles" className="flex flex-wrap gap-x-4 gap-y-2 mt-8 md:mt-4" data-motion="float-up">
          <span className="text-(--font-color)/70">Follow Promatrix:</span>
          {socialProfiles.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-(--gold-primary) underline-offset-4 hover:underline">
              {name}
            </a>
          ))}
        </nav>
      </div>
      
    </div>
  );
};

export default Eight;
