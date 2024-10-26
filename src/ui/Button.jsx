import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ to, children, disabled = false, type = "" , onClick}) {
  const base =
    "text-sm inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2",
    primary: base + "px-4 py-3 md:px-6 md:py-4 text-sm",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-sm px-4 py-2.5 md:px-6 md:py-3.5 inline-block rounded-full border-2 border-stone-300  font-semibold uppercase tracking-wide text-stone-400 transition-all duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed hover:text-stone-800 focus:ring-stone-300",
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  if(onClick){
    return(
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
    )
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
