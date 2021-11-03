import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const AddressBlock: FunctionComponent = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="w-full lg:w-1/2 h-auto">
      <h2 className="font-bold mt-8 mb-4">{t("contact:onTouch")}</h2>
      <ul className="w-full lg:w-1/2">
        <li className="flex items-center">
          <div className="my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-blue-500"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
                <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z" />
              </g>
            </svg>
          </div>
          <a href="mailto:unost123@i.ua" className="pl-8">
            unost123@i.ua
          </a>
        </li>
        <li className="flex items-center">
          <div className="my-2">
            <svg
              className="fill-current text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              enableBackground="new 0 0 24 24"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z" />
            </svg>
          </div>
          <a href="tel:+380554221302" className="pl-8">
            +38(05542) 2-13-02
          </a>
        </li>
        <li className="flex items-center">
          <div className="my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              className="fill-current text-blue-500"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
            </svg>
          </div>
          <a href="https://www.facebook.com" className="pl-8">
            facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddressBlock;
