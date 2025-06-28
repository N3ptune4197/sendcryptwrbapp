import BgImage from "./../assets/bg.png";

export default function SectionThree() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse mt-14 max-w-[1250px] mx-auto">
      <div className="part1 w-full md:w-[62%] flex flex-col justify-center items-center pl-5 md:pl-9 lg:pl-16 pb-7">
        <div className="card1 w-96 flex flex-col gap-y-7 px-10 py-7 rounded-xl bg-[#21242D] font-poppins">
          <label className="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>

          <label className="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>

          <label className="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"
              />
            </svg>
            <input type="text" className="grow" placeholder="Amount" />
          </label>

          <label className="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 6v2H3V6zM3 18h9v-2H3zm0-5h18v-2H3z"
              />
            </svg>
            <input type="text" className="grow" placeholder="index.php" />
          </label>

          <a className="btn btn-warning" href="/">
            Enviar
          </a>
        </div>
      </div>

      <div className="img w-full md:w-[38%] items-center ">
        <img src={BgImage} alt="" />
      </div>
    </div>
  );
}
