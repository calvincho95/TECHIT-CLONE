const ClassCard = ({ bgColor, name, description, image, alarm }) => {
  return (
    <>
      <div className={`${bgColor} flex justify-between rounded-t-lg px-6 py-4`}>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <h5 className="text-techit-gray-200">{description}</h5>
        </div>
        <img
          className="w-[126px]"
          src={`/images/class/${image}.png`}
          alt="frontend"
        />
      </div>
      <div className="flex justify-between mt-5 mb-3 px-6">
        <div className="font-bold">{alarm}</div>
        <button className="flex items-center">
          사전알림신청
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
            className="ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default ClassCard;
