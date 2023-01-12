import MenuCard from "./MenuCard";
import React from "react";

const FAQSection = () => {
  return (
    <>
      <h3 className="mt-20 pb-4 text-center text-2xl font-bold text-slate-600 dark:text-stone-300">
        FAQ🧐
        <p className="text-sm text-slate-400 dark:text-stone-500">
          (Scroll to read more)
        </p>
      </h3>
      <div className="mb-10 flex h-[70vh] w-full flex-col items-center gap-5 overflow-y-scroll py-5 pb-10 md:gap-10">
        <h3 className="text-lg font-semibold dark:text-stone-400">
          Checkout my other projects
        </h3>
        <a
          href="https://github.com/upscayl/upscayl/"
          className="animate m-4 flex max-w-full flex-col items-center justify-center gap-4 rounded-lg bg-green-100/40 p-4 shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-200 dark:bg-stone-700/40 dark:shadow-none md:m-0 md:w-1/2 lg:w-2/6"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/upscayl.jpg"
            alt="Upscayl Screenshot"
            className="h-full w-full rounded-lg"
          />
          <div className="text-center">
            <h5 className="text-lg font-medium dark:text-stone-200">Upscayl</h5>
            <p className="dark:text-stone-300">
              Free and Open Source AI Image Upscaler
            </p>
          </div>
        </a>

        <a
          href="https://pashword.app"
          className="animate m-4 flex max-w-full flex-col items-center justify-center gap-4 rounded-lg bg-green-100/40 p-4 shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-200 dark:bg-stone-700/40 dark:shadow-none md:m-0 md:w-1/2 lg:w-2/6"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/pashword.jpg"
            alt="Pashword Screenshot"
            className="h-full w-full rounded-lg"
          />
          <div className="text-center">
            <h5 className="text-lg font-medium dark:text-stone-200">
              Pashword
            </h5>
            <p className="dark:text-stone-300">
              Generate passwords that you don't need to remember and cannot ever
              forget
            </p>
          </div>
        </a>

        {/* <a
          href="https://github.com/NayamAmarshe/please"
          target="_blank"
          rel="noreferrer"
          className="animate m-4 flex max-w-full flex-col items-center justify-center gap-4 rounded-lg bg-green-100/40 p-4 shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-200 dark:bg-stone-700/40 dark:shadow-none md:m-0 md:w-1/2 lg:w-2/6"
        >
          <img
            src="/please.jpg"
            alt="Please Screenshot"
            className="h-full w-full rounded-lg"
          />
          <div className="text-center">
            <h5 className="text-lg font-medium dark:text-stone-200">Please</h5>
            <p className="dark:text-stone-300">
              A beautiful New Tab Page and Todo List Manager for your Terminal
            </p>
          </div>
        </a> */}

        <MenuCard
          heading="The hell is this? 🤔"
          content={[
            "MagLit is an encrypted and privacy respecting Link Shortener service that supports not only your regular website links but also Magnet Links which are extensively used to download and share torrents.",
            <br key={1}></br>,
            <br key={2}></br>,
            <i key={3}>
              <b key={4}>
                MagLit admins cannot ever see what links you light up once you
                encrypt them using your own secret key.
              </b>
            </i>,
          ]}
          bgColor="bg-green-100/40 dark:bg-stone-700/40"
          shadowColor="shadow-green-200 dark:shadow-none"
          hoverShadowColor="hover:shadow-green-200"
        />
        <MenuCard
          heading="What's a 'MagLit'? 😅"
          content={[
            "The word MagLit is derived from Magnet and Lit. MagLit started out as a link shortener for torrent magnet links. Later, I made MagLit available for HTTP(s) links but the name stayed :)",
          ]}
          bgColor="bg-green-100/40 dark:bg-stone-700/40"
          shadowColor="shadow-green-200 dark:shadow-none"
          hoverShadowColor="hover:shadow-green-200"
        />
        <MenuCard
          heading="Why should I use MagLit? 🤓"
          content={[
            <b key={1}>
              3 Reasons:
              <br />
            </b>,
            "1 => MagLit keeps everything encrypted. This means nobody except you has access to your links, especially when you use your own password.",
            <br />,
            "2 => MagLit lets you password protect your links and also lets you use custom links. All without any sign-up or account registration.",
            <br />,
            "3 => MagLit protects your privacy. 100% Free and Open Source, Verifiable website deployments. No data mining, no data selling.",
          ]}
          bgColor="bg-amber-100/40 dark:bg-stone-700/40"
          shadowColor="shadow-amber-200 dark:shadow-none"
          hoverShadowColor="hover:shadow-amber-200"
        />
        <MenuCard
          heading="Is it open-source? 🌚"
          content={[
            <b key={1}>Yes 100%</b>,
            <br key={2}></br>,
            "MagLit is a totally free and open source service licensed under AGPLv3. All your requests are proxied through a server and no personal data is ever stored. You can check out the source code on GitHub if you want 😉",
          ]}
          bgColor="bg-purple-100/40 dark:bg-stone-700/40"
          shadowColor="shadow-purple-200 dark:shadow-none"
          hoverShadowColor="hover:shadow-purple-200"
        />
        <MenuCard
          heading="How can I help? 😁"
          content={[
            "1. You can submit PRs on GitHub to improve MagLit's codebase or ",
            <br key={0}></br>,
            "2. You can donate here:",
            <a
              key={2}
              target="_blank"
              rel="noreferrer"
              href="https://www.buymeacoffee.com/fossisthefuture"
              className="font-bold text-blue-400 dark:text-cyan-500"
            >
              {" "}
              Buy Me A Coffee{" "}
            </a>,
          ]}
          bgColor="bg-red-100/40 dark:bg-stone-700/40"
          shadowColor="shadow-red-200 dark:shadow-none"
          hoverShadowColor="hover:shadow-red-200"
        />
        <MenuCard
          heading="My adblock detected a tracker! 🤥"
          content={[
            "Don't worry, MagLit uses open source and privacy respecting",
            <a
              key={1}
              className="font-bold text-blue-400 dark:text-cyan-500"
              href="https://counter.dev"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Counter.Dev Analytics <br></br>
            </a>,
            "Your IP is not logged, no cookies are stored, no fingerprinting data is used to spy on you. It just helps us know what countries are accessing maglit.me and what different screen sizes are accessing this website. It can help us optimize the website layout better. Still, if you don't want to share your screen size and country, please feel free to block the script using your adblocker.",
          ]}
          bgColor="bg-cyan-100 dark:bg-stone-700/40"
          shadowColor="shadow-cyan-200 dark:shadow-none"
          hoverShadowColor="hover:shadow-cyan-200"
        />
      </div>
    </>
  );
};

export default FAQSection;
