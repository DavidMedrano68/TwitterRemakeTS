export default function SignIn() {
  return (
    <div className=" z-10 content grid min-h-screen min-w-[80vw] bg-stone-900 border-r-2 border-l-2 border-[#ffffff8f]">
      <header className="border-b-2 row-span-1 grid grid-cols-2 border-[#ffffff8f]">
        <div className="flex gap-2" id="logo">
          <svg
            width="48"
            height="48"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="96" height="96" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_13_3" transform="scale(0.0104167)" />
              </pattern>
              <image
                id="image0_13_3"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE4UlEQVR4nO3ca4hVVRTA8a1WVJplD8qeH1Iqwx4QBUUk0UN7QUSR6RAZipWMUBhEL6jsAVEfikgkgqikD2VBGhn0klJBnaC3ETM0CZEzvXMaZ/Qfi1kfLpd7x3Nn9rl7nXPWD+bL3Duz99n73v1ce4fgnHPOOeecc84555xzzjlXcMBMYBmwBugC+oEh/enX38lrdwGnRkz3QuDJUEXAAcBCYBOt+xyYD0waY9pzgHX6v24KVQPMA3Ywft8Cl2dM82BgEfBFzd9vBCaEqgAOBV4ivheBQxqkNxG4BFgN/F73N38Dp+X1oMcDDwdDgGOBbeRnC3AMcARwPfAC8NMo71+Y58Mu1kQWBTuF/z35kw57OMP7Hs/7gVdpQjKKmJtrYtmanTw/+a16Nvd2H/isrq27ONcER5FTmz9WK0M7AL11Cf+bdbQQOR9zsUGapXvr8iZ9xR1AZ+yHlp5/T4NM/AdcFzWx/Y/zYww1x6tXR0ITgFnAUuA9YFCHsZNDDm1uM1Ixi6Mm2ASwgPSkkN8APtQOutafwOwQG3Bkhoy90mjcHDkfm7BLPohX5PXgUzJmYjNwYk55mIFdw7nOAbQAZOSThcwOl8QeljGyaGaRDMs7Yj5rswLY2mLGpI2cGTH917HnL+DqWM+4vwJ4bAwZHJBxMnB0hPS7sEVm4bPilG62Ajgb2DfGzErz9TQwfRzp92GHzIEOj1vC2Qph/TgzLt+Il4ErZUzfYtoy/LNiIL9SHr0QztNOJ4ZduuR7mcwzMqRtyVB7SjxeX5BlDL1ZF/w6pWMDzgGOA6bJLhW27EtZAQcBH1Ntg8kqQCthat02XNX0Ja0ArYSjdCO7irqDBbpE8S7V82WKwp7a5PeyJLtch5hVsSFFBXwDXDrK62cCH1ANz7e39EcKuLsm7kWCn05o8J7JwBPAXsqtM0UFvNkgI7/qN+Nr4JeM0QNlMC9FBdyW+qkNmZ6iAg5rsAVXRd+1vfBrKuHu1E9vwKqUFTBRN1qq7JZkFaCVcIp2vlW0J8bmUoxKOB3YSfWsC1YAZwA9VEtHsES25fSYTxXsbrYckxxwc81MuaxWB8t0o2Z5SfuGvdLvhSLQANprgbdLtEL6TrAmSxyovAe4RteLiuyiYI0uPf8MfAK8qqdE7gPul3OyeohNJm1/UGxrg0XAVZTfYMzwyqh0J6zsyxJPBctkU8ZYyGBMPWbH/bX0qI5ECZfJcMpDiC0DLijZXsHKUDTAScD7FN8W4MBQRNox3wr8QDH1ypUMoeg0mHa+fiNiRVPnTfqxs0LZaAjjAp2obdRP2QC2DCWJdEiFkXMGPYYmWzeGKtCm6R5Dp112t+2QXWp6xkwOYVhq8+eEstOY0TXGwhV35HKlgBVyC6FeYGHx/MDaJCccI0bHTdO7I+TqgPP1+pjbdQn6LV2itmgQWFGYC/X09KJcvVIGn7b1UHUsei3jQy3cE2FNnwYVF+NT34zeHPiMwQlUM7IL94g0laFM9OpKaet/w6Z+4EG5OiyUmZ6EuRPYnrrEGRnefqRNzZRQNTKe1os4uttc6F0aBHBy6jKwNulaoaugsaMhvgKeA24wEaFsnZ4lkADeDuBR4DWdmP2o4e3/1NywtVNnp1u1OZH75x6QW8iBc6PfQuicc84555xzzjnnnHPOORfy9z+LcNWL8or3MwAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
          <h1>Twitter</h1>
        </div>
        <div className="grid grid-cols-2 place-items-center" id="btns">
          <button className="btn w-3/5 h-3/5">Create Account</button>
          <button className="btn w-3/5 h-3/5">Sign In</button>
        </div>
      </header>
      <div className="relative imageCon">
        <img className="image h-full w-full bg-cover"></img>
        <p className=" text-6xl lowOpWhite absolute left-56 top-20">
          People on Twitter are the first to know
        </p>
        <p className=" absolute text-5xl text lowOpWhite left-10 bottom-10">
          Don't miss what is happening
        </p>
      </div>
      <footer className="relative footer rounded-2xl grid grid-cols-2">
        <p className=" lowOpWhite self-center pl-3 text-2xl">
          See what is happening
        </p>
        <div className="w-1/3 place-self-center" id="exploreBtn">
          <button className=" text-xl w-full grid grid-cols-2 darkBtn p-1">
            Explore
            <svg
              className="justify-self-center"
              width="25"
              height="25"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_25_4)">
                <path
                  d="M27.7708 23.9167H26.3554L25.8538 23.4554C27.6096 21.5079 28.6667 18.9796 28.6667 16.2292C28.6667 10.0963 23.4529 5.125 17.0208 5.125C10.5888 5.125 5.375 10.0963 5.375 16.2292C5.375 22.3621 10.5888 27.3333 17.0208 27.3333C19.9054 27.3333 22.5571 26.3254 24.5996 24.6513L25.0833 25.1296V26.4792L34.0417 35.0038L36.7113 32.4583L27.7708 23.9167ZM17.0208 23.9167C12.5596 23.9167 8.95833 20.4829 8.95833 16.2292C8.95833 11.9754 12.5596 8.54167 17.0208 8.54167C21.4821 8.54167 25.0833 11.9754 25.0833 16.2292C25.0833 20.4829 21.4821 23.9167 17.0208 23.9167Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_4">
                  <rect width="43" height="41" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
