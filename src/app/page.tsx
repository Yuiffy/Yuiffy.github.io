import Image from 'next/image'
import {Button, Card, Space} from 'antd';
import Script from "next/script";
import Head from "next/head";

export default function Home() {

  const bigButtonData = [
    {title: '猫羊牌 Cat Sheep Card', href: 'http://card.daifish.top/play/#/', description: '简单易懂的多人联机卡牌对战游戏'},
    {title: '熊蛙棋 Bear Frog Chess', href: 'http://www.daifish.top/bear-frog-chess/', description: '又被称为枪棋/炮棋，在4x4的棋盘上12颗棋子的简单的双人对战棋类游戏'},
    {title: '冻鳗榜单王', href: 'http://rank.daifish.top', description: '能够对动画/游戏/食物等进行打分和发布排行榜的榜单网站'},
    {title: '贪吃蛇 Greedy Hebi', href: 'hebi/hebi.html', description: '简单畅快的贪吃蛇游戏'},
  ];

    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/*<Head>*/}
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7443445828476112"
                crossOrigin="anonymous"></Script>
        {/*</Head>*/}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/*<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
        {/*  Get started by editing&nbsp;*/}
        {/*  <code className="font-mono font-bold">src/app/page.tsx</code>*/}
        {/*</p>*/}
        {/*<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">*/}
        {/*  <a*/}
        {/*    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"*/}
        {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    By{' '}*/}
        {/*    <Image*/}
        {/*      src="/vercel.svg"*/}
        {/*      alt="Vercel Logo"*/}
        {/*      className="dark:invert"*/}
        {/*      width={100}*/}
        {/*      height={24}*/}
        {/*      priority*/}
        {/*    />*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/*<Image*/}
        {/*  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"*/}
        {/*  src="/next.svg"*/}
        {/*  alt="Next.js Logo"*/}
        {/*  width={180}*/}
        {/*  height={37}*/}
        {/*  priority*/}
        {/*/>*/}
          <p className="text-4xl font-bold">Yuiffy HomePage (带鱼个人主页)</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {bigButtonData.map(({ title, href, description }) => {
            return (
              <a
                key={title}
                href={href}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>{title}</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
              </a>
        )})}
        {/*<a*/}
        {/*  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <h2 className={`mb-3 text-2xl font-semibold`}>*/}
        {/*    Docs{' '}*/}
        {/*    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
        {/*      -&gt;*/}
        {/*    </span>*/}
        {/*  </h2>*/}
        {/*  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
        {/*    Find in-depth information about Next.js features and API.*/}
        {/*  </p>*/}
        {/*</a>*/}

        {/*<a*/}
        {/*  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <h2 className={`mb-3 text-2xl font-semibold`}>*/}
        {/*    Learn{' '}*/}
        {/*    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
        {/*      -&gt;*/}
        {/*    </span>*/}
        {/*  </h2>*/}
        {/*  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
        {/*    Learn about Next.js in an interactive course with&nbsp;quizzes!*/}
        {/*  </p>*/}
        {/*</a>*/}

        {/*<a*/}
        {/*  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <h2 className={`mb-3 text-2xl font-semibold`}>*/}
        {/*    Templates{' '}*/}
        {/*    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
        {/*      -&gt;*/}
        {/*    </span>*/}
        {/*  </h2>*/}
        {/*  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
        {/*    Explore the Next.js 13 playground.*/}
        {/*  </p>*/}
        {/*</a>*/}

        {/*<a*/}
        {/*  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <h2 className={`mb-3 text-2xl font-semibold`}>*/}
        {/*    Deploy{' '}*/}
        {/*    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
        {/*      -&gt;*/}
        {/*    </span>*/}
        {/*  </h2>*/}
        {/*  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
        {/*    Instantly deploy your Next.js site to a shareable URL with Vercel.*/}
        {/*  </p>*/}
        {/*</a>*/}
      </div>
      <div className="row">
        <div className="text-center">
            <Space direction="vertical" size={1} style={{ display: 'flex' }}>
                <Button type="link" href="index2.html">旧的主页</Button>
                <Button type="link" href="mailto:me@daifish.top?subject=Hello">联系我们 ( Contact Us )</Button>
                {/* <Button type="link" href="http://www.beian.miit.gov.cn/">桂ICP备16004207号</Button> */}
            </Space>

        </div>
      </div>
    </main>
  )
}
