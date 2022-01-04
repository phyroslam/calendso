export default function Logo({ small, icon }: { small?: boolean; icon?: boolean }) {
  return (
    <h1 className="inline">
      <strong>
        {icon ? (
          <img className="w-9 mx-auto" alt="Cal" title="Cal" src="/st_app_ltng_logo.png" />
        ) : (
          <img
            className={small ? "h-4 w-auto" : "h-5 w-auto"}
            alt="Cal"
            title="Cal"
            src="/Sitetracker_2color.png"
          />
        )}
      </strong>
    </h1>
  );
}
