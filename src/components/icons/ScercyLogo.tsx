export interface IScercyLogoProps {
  className?: string;
}

export function ScercyLogo(props?: IScercyLogoProps) {
  return (
    <svg
      className={props?.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.72458 21.9907C5.81559 21.9969 5.90742 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 5.90742 21.9969 5.81558 21.9907 5.72458L5.72458 21.9907Z"
        fill="#F131FA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.72458 2.00933C5.81559 2.00314 5.90742 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 18.0926 21.9969 18.1844 21.9907 18.2754L5.72458 2.00933Z"
        fill="#7317F9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2754 2.00933C18.1844 2.00314 18.0926 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 18.0926 2.00314 18.1844 2.00933 18.2754L18.2754 2.00933Z"
        fill="#382CF9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.7152L2.00933 5.72458C2.00314 5.81558 2 5.90742 2 6V18C2 20.1166 3.64391 21.8492 5.72458 21.9907L12 15.7152Z"
        fill="#41A5FB"
      />
    </svg>
  );
}
