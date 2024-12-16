import React, { Suspense } from "react";
import "../../globals.css";
import { Button } from "@mui/material";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import classNames from "classnames";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

enum HeaderSectionsLabels {
  ABOUT_US = "About us",
  SERVICES = "Services",
  MEMBERSHIP = "Membership",
  TESTIMONIALS = "Testimonials",
  RESOURCES = "Resources",
  CONTACT_US = "Contact us",
}

enum HeaderSections {
  ABOUT_US = "ABOUT_US",
  SERVICES = "SERVICES",
  MEMBERSHIP = "MEMBERSHIP",
  TESTIMONIALS = "TESTIMONIALS",
  RESOURCES = "RESOURCES",
  CONTACT_US = "CONTACT_US",
}

const headerMapper: Record<HeaderSections, string> = {
  [HeaderSections.ABOUT_US]: "/about-us",
  [HeaderSections.SERVICES]: "/services",
  [HeaderSections.MEMBERSHIP]: "/membership",
  [HeaderSections.TESTIMONIALS]: "/testimonials",
  [HeaderSections.RESOURCES]: "/media",
  [HeaderSections.CONTACT_US]: "/contact-us",
};

const MainHeader = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isActiveRoute = (route: string) => pathname === route;

  return (
    <div className="w-full h-fit bg-white flex flex-col gap-4 p-4 items-center pb-4">
      <Link href="/">
        <img
          src="/svgs/header-badge.svg"
          alt="Header Badge"
          className="w-[18rem]"
        />
      </Link>
      <div className="flex gap-6 items-center justify-around max-w-[90%] font-vietnam">
        {Object.keys(headerMapper).map((key) => {
          const route = headerMapper[key as HeaderSections];
          const isActive = isActiveRoute(route);
          return (
            <div key={key} className="group relative">
              <a
                href={route}
                className={classNames(
                  "text-[1.1rem] text-secondaryDark relative hover-underline font-vietnam font-normal uppercase",
                  { "active font-[600]": isActive },
                  { "font-[400]": !isActive }
                )}
              >
                {HeaderSectionsLabels[key as keyof typeof HeaderSectionsLabels]}
              </a>
              {key === HeaderSections.RESOURCES && (
                <Suspense fallback={<div>Loading...</div>}>
                  <ResourcesMenu />
                </Suspense>
              )}
            </div>
          );
        })}
        {user ? (
          <UserMenu user={user} logout={logout} />
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <AuthButtons isActiveRoute={isActiveRoute} router={router} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

const ResourcesMenu = () => {
  const searchParams = useSearchParams();
  const active = searchParams?.get("active");

  return (
    <ul className="absolute top-8 left-0 hidden group-hover:block bg-white shadow-lg z-50 min-w-[200px]">
      <li>
        <Link
          href="/media"
          className="block px-4 py-3 text-secondaryDark hover:bg-primary hover:text-white transition-colors"
        >
          IN THE MEDIA
        </Link>
      </li>
      <li>
        <Link
          href="/video-resource"
          className="block px-4 py-3 text-secondaryDark hover:bg-primary hover:text-white transition-colors"
        >
          VIDEOS
        </Link>
      </li>
      <li>
        <Link
          href="/article"
          className="block px-4 py-3 text-secondaryDark hover:bg-primary hover:text-white transition-colors"
        >
          BLOGS
        </Link>
      </li>
      <li>
        <Link
          href="/drik-panchang"
          className="block px-4 py-3 text-secondaryDark hover:bg-primary hover:text-white transition-colors"
        >
          DRIK PANCHANGA
        </Link>
      </li>
      <li>
        <Link
          href="/members-only-resources"
          className="block px-4 py-3 text-secondaryDark hover:bg-primary hover:text-white transition-colors"
        >
          MEMBER ONLY RESOURCES
        </Link>
      </li>
    </ul>
  );
};

const AuthButtons = ({
  isActiveRoute,
  router,
}: {
  isActiveRoute: (route: string) => boolean;
  router: AppRouterInstance;
}) => {
  const searchParams = useSearchParams();
  const active = searchParams?.get("active");

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outlined"
        className={classNames(
          " !font-vietnam !normal-case !border-2",
          {
            "!bg-secondaryLight !text-primary !border-primary":
              active === "sign-in",
          },
          {
            "!text-secondaryLight !bg-primary !border-secondaryLight":
              active !== "sign-in",
          }
        )}
        onClick={() => router.push("/login?active=sign-in")}
        startIcon={<PersonOutlinedIcon />}
      >
        Login
      </Button>
      <Button
        variant="outlined"
        className={classNames(
          " !font-vietnam !normal-case !border-2",
          {
            "!bg-secondaryLight !text-primary !border-primary":
              active === "sign-up",
          },
          {
            "!text-secondaryLight !bg-primary !border-secondaryLight":
              active !== "sign-up",
          }
        )}
        onClick={() => router.push("/login?active=sign-up")}
      >
        Sign up
      </Button>
    </div>
  );
};
const UserMenu = ({
  user,
  logout,
}: {
  user: { firstName: string; lastName: string };
  logout: () => void;
}) => (
  <div className="group relative">
    <span className="text-[1.1rem] text-secondaryDark hover-underline font-medium uppercase font-vietnam cursor-pointer">
      {user.firstName + " " + user.lastName}
    </span>
    <ul className="absolute top-8 left-0 hidden group-hover:block bg-white shadow-lg z-50 min-w-[200px]">
      <li>
        <Link
          href="/profile"
          className="block px-4 py-3 text-secondaryDark hover:bg-primary hover:text-white transition-colors"
        >
          PROFILE
        </Link>
      </li>
      <li>
        <button
          className="block w-full text-left px-4 py-3 text-secondaryDark hover:bg-primary hover:text-white transition-colors"
          onClick={logout}
        >
          LOGOUT
        </button>
      </li>
    </ul>
  </div>
);

export default MainHeader;
