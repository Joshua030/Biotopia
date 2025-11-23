import { ArrowButton } from "@/app/_components/icons/ArrowButton";
import { resolveButtonUrl } from "@/app/_lib/utils/resolveButtonUrl";
import type { BlockButton } from "@/app/_types/directusTypes";
import Link from "next/link";

interface ContactLinkProps {
  button: BlockButton;
  lang?: string;
}

const ContactLink = ({ button, lang }: ContactLinkProps) => {
  //* Resolve url for button
  const { href, target, rel, isExternal } = resolveButtonUrl(
    button,
    lang || "es",
  );

  const buttonClassNames = "z-10 absolute bottom-8 lg:top-8 right-8";

  return (
    <>
      {isExternal ? (
        <a href={href} target={target} rel={rel} className={buttonClassNames}>
          <ArrowButton />
        </a>
      ) : (
        <Link href={href} className={buttonClassNames}>
          <ArrowButton />
        </Link>
      )}
    </>
  );
};

export default ContactLink;
