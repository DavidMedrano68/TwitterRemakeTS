import ErrorSVG from "../assets/Error.svg";
export default function ErrorPageProfile() {
  return (
    <div className="col-span-7 grid place-items-center">
      <img src={ErrorSVG} className="h-64 w-64"></img>
      <p>There has been an Error loading this page.</p>
      <p>Perhaps this profile never existed, or it deleted.</p>
    </div>
  );
}
